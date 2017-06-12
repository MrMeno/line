import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import mainPage from '../views/ItemList.vue'
import detailPage from '../views/ItemView.vue'
import psdPage from '../views/psd.vue'
import registPage from '../views/regist.vue'
import userPage from '../views/userCenter.vue'
import infoPage from '../views/user/userInfo.vue'
import proPage from '../views/user/proManage.vue'
import pubPage from '../views/user/pubMedia.vue'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: [{
                path: '/',
                redirect: '/main'
            },
            {
                path: '/main',
                component: mainPage
            },
            {
                path: '/psd',
                component: psdPage,
                meta: {
                    auth: false 
                }
            },
            {
                path: '/regist',
                component: registPage,
                meta: {
                    auth: false
                }
               }, {
                path: '/detail',
                component: detailPage,
                meta: {
                    auth: true
                }
            },
             {
                path: '/userCenter',
                component: userPage,
                meta: {
                    auth: true 
                },
                children:[
                    {
                    path: '',
                    component: infoPage
                    },
                    {
                     path: '/userCenter/info',
                      component: infoPage
                    },
                    { 
                    path: '/userCenter/proManage',
                     component: proPage
                    },
                      { 
                    path: '/userCenter/pubMedia',
                     component: pubPage
                    }
                ]
            }
        ]
    });
}

/*<!-- 字符串 -->
<router-link to="home">Home</router-link>

<!-- 渲染结果 -->
<a href="home">Home</a>

<!-- 使用 v-bind 的 JS 表达式 -->
<router-link v-bind:to="'home'">Home</router-link>

<!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
<router-link :to="'home'">Home</router-link>

<!-- 同上 -->
<router-link :to="{ path: 'home' }">Home</router-link>

<!-- 命名的路由 -->
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

<!-- 带查询参数，下面的结果为 /register?plan=private -->
<router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>*/