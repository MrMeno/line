import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../views/ItemList.vue'
import detailPage from '../views/ItemView.vue'

Vue.use(Router)

// route-level code splitting

export function createRouter() {
    return new Router({
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/main', component: mainPage },
            { path: '/detail', component: detailPage }
        ]
    })
}