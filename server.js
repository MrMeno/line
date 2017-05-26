/*create by MrM */
/*2017-5-3*/
/*lastmodified:2017-5-10*/
const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const bodyParser = require('body-parser');
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')
const isProd = process.env.NODE_ENV === 'production' //全局环境变量，当前为开发环境
const useMicroCache = process.env.MICRO_CACHE !== 'false' //是否缓存
const home = require('./function/home')
const login = require('./function/login')
const serverInfo =
    `express/${require('express/package.json').version} ` +
    `vue-server-renderer/${require('vue-server-renderer/package.json').version}`; //ssr，服务器端渲染组件的版本
const app = express()
const template = fs.readFileSync(resolve('./src/index.template.html'), 'utf-8') //前端入口模板文件

global.hostAddress = '192.168.1.202'; //192.168.1.202
global.portNum = '80'; //8083
global.ctx = '/mmcms/api'; //mmcms

function createRenderer(bundle, options) { //设置服务器端渲染参数
    return createBundleRenderer(bundle, Object.assign(options, {
        template,
        cache: LRU({
            max: 1000,
            maxAge: 1000 * 60 * 15
        }),
        basedir: resolve('./dist'), //webpack输出目录
        runInNewContext: false
    }))
}

let renderer
let readyPromise
if (isProd) { //设置生产环境的参数，ssr组件加载
    const bundle = require('./dist/vue-ssr-server-bundle.json')
    const clientManifest = require('./dist/vue-ssr-client-manifest.json')
    renderer = createRenderer(bundle, {
        clientManifest
    })
} else {
    readyPromise = require('./build/setup-dev-server')(app, (bundle, options) => {
        renderer = createRenderer(bundle, options)
    })
}

const serve = (path, cache) => express.static(resolve(path), { //获取完整路径
    maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
})

app.use(compression({ threshold: 0 })) //环参应用
    // app.use(favicon('./public/img/favicon.ico'))
app.use('/dist', serve('./dist', true))
app.use('/public', serve('./public', true))
app.use('/manifest.json', serve('./manifest.json', true))
app.use('/functions', serve('./api/home', false))
app.use('/service-worker.js', serve('./dist/service-worker.js'))
app.use('/home', home)
app.use('/login', login)
    //app.use('/mock.json', serve('./function/data.json', true))


const microCache = LRU({
    max: 100,
    maxAge: 1000
})

const isCacheable = req => useMicroCache

function render(req, res) {
    const s = Date.now()

    res.setHeader("Content-Type", "text/html")
    res.setHeader("Server", serverInfo)

    const handleError = err => {
        if (err && err.code === 404) {
            res.status(404).end('404 | Page Not Found')
        } else {
            res.status(500).end('500 | Internal Server Error')
            console.error(`error during render : ${req.url}`)
            console.error(err.stack)
        }
    }

    const cacheable = isCacheable(req)
    if (cacheable) {
        const hit = microCache.get(req.url)
        if (hit) {
            if (!isProd) {
                console.log(`cache hit!`)
            }
            return res.end(hit)
        }
    }

    const context = {
        title: '媒大媒小影视植入平台',
        url: req.url
    }
    renderer.renderToString(context, (err, html) => {
        if (err) {
            return handleError(err)
        }
        res.end(html)
        if (cacheable) {
            microCache.set(req.url, html)
        }
        if (!isProd) {
            console.log(`whole request: ${Date.now() - s}ms`)
        }
    })
}

app.get('*', isProd ? render : (req, res) => { //判定开发环境
    readyPromise.then(() => render(req, res))
})

const port = process.env.PORT || 8088 //端口监听开启
app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})