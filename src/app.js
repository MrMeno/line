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
    return { app, router, store }
}