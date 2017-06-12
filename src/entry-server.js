//***ssr服务器端渲染 */
//在 server-entry 文件中服务端会传递一个context对象，
//里面包含当前用户请求的url，vue-router 会跳转到当前请求的url中，
//通过 router.getMatchedComponents( ) 来获得当前匹配组件，则去调用当前匹配到的组件里的 preFetch 钩子，
//并传递store（Vuex下的状态），会返回一个 Promise 对象，
//并在then方法中将现有的vuex state 赋值给context，给服务端渲染使用，
//最后返回vue实例，将虚拟DOM渲染成网页。服务端会将vuex初始状态也生成到页面中。
// 如果 vue-router 没有匹配到请求的url，直接返回 Promise中的reject方法，传入404，
//这时候会走到下方renderStream的error事件，让页面显示错误信息。
//created by MrM
import { createApp } from './app'

const isDev = process.env.NODE_ENV !== 'production'

//  `bundleRenderer`请求的方法
export default context => {
    return new Promise((resolve, reject) => {
        const s = isDev && Date.now()
        const { app, router, store } = createApp()

        router.push(context.url)
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()

            if (!matchedComponents.length) { // 无匹配的router执行
                reject({ code: 404 })
            }

            Promise.all(matchedComponents.map(component => {
                return component.asyncData && component.asyncData({
                    store,
                    route: router.currentRoute
                })
            })).then(() => {
                isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
                context.state = store.state
                resolve(app)
            }).catch(reject)
        }, reject)
    })
}