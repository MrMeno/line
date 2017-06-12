//***ssr客户端渲染* */
// 判断如果在服务端渲染时已经写入状态，则将vuex的状态进行替换，
///使得服务端渲染的html和vuex管理的数据是同步的。
//然后将vue实例挂载到html指定的节点中。
//wrote by MrM 
//きみ(君)といたなつ（夏）kimi to i ta nastu
import Vue from 'vue'
import 'es6-promise/auto'
import { createApp } from './app'
import ProgressBar from './components/ProgressBar.vue'

const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount()
document.body.appendChild(bar.$el)

// 路由变化时执行此方法
Vue.mixin({
    beforeRouteUpdate(to, from, next) {
        const { asyncData } = this.$options;
        if (asyncData) {
            asyncData({
                store: this.$store,
                route: to
            }).then(next).catch(next)
        } else {
            next()
        }
    }
})

const { app, router, store } = createApp()



// 服务初始化时准备加载store
//SSR和内联在页面标记期间state被确认.
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}



// 等待路由（组件）异步加载完成之后挂载
router.onReady(() => {
    // 操作异步数据时挂载路由钩子.
    // 初始路由解决之后执行以防2次加载
    // 已经获取的数据. 用router.beforeResolve()等待异步组件全部加载成功



    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)
        let diffed = false
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c))
        })
        if (!activated.length) {
            return next()
        }
        bar.start()
        Promise.all(activated.map(c => {
            if (c.asyncData) {
                return c.asyncData({ store, route: to })
            }
        })).then(() => {
            bar.finish()
            next()
        }).catch(next)
    });


    // 最终将vue服务与dom挂上
    app.$mount('#app')
})



// 启动服务
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
}