import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'

import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
// import titleMixin from './util/title'
import * as filters from './util/filters'
import Elements from 'element-ui'

Vue.use(Elements);
// mixin控制title显示
// Vue.mixin(titleMixin);


// 遍历加载全局过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// g构建即时store router（工厂方法）
// 每个ssr请求都会实例化app
export function createApp() {
    const store = createStore()
    const router = createRouter()
    sync(store, router)
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });

    router.beforeEach(({ meta, path }, from, next) => {　　
        const { auth = true } = meta // meta代表的是to中的meta对象，path代表的是to中的path对象
        console.log(path)
        var isLogin = Boolean(store.state.login) // true用户已登录， false用户未登录　　　
        if (auth && !isLogin && path !== '/main') { // auth 代表需要通过用户身份验证，默认为true，代表需要被验证， false为不用检验 　　　　
            return next({ path: '/login' }) //  跳转到login页面
        }
        if (path != '/main') {
            store.commit('SET_Menu', false);
        } else {
            store.commit('SET_Menu', true);
        }


        next() // 进行下一个钩子函数
    })
    return { app, router, store }
}