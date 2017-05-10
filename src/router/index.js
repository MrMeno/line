import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const createListView = id => () => System.import('../views/CreateListView').then(m => m.default(id))
const ItemView = () => System.import('../views/ItemView.vue')
const UserView = () => System.import('../views/UserView.vue')
const usageView = () => System.import('../views/turn.vue')

export function createRouter() {
    return new Router({
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/main/:page(\\d+)?', component: createListView('top') },
            { path: '/new/:page(\\d+)?', component: createListView('new') },
            { path: '/show/:page(\\d+)?', component: createListView('show') },
            { path: '/ask/:page(\\d+)?', component: createListView('ask') },
            { path: '/job/:page(\\d+)?', component: createListView('job') },
            { path: '/item/:id(\\d+)', component: ItemView },
            { path: '/user/:id', component: UserView },
            { path: '/zr', component: usageView },
            { path: '/', redirect: '/main' }
        ]
    })
}