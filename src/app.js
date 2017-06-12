import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
import * as filters from './util/filters'
import Elements from 'element-ui'

Vue.use(Elements);
// mixin控制title显示
// Vue.mixin(titleMixin);

// 遍历加载全局过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

const store = createStore()
const router = createRouter();

  router.beforeEach(({ meta, path }, from, next) => {　　
        const { auth = true } = meta // meta代表的是to中的meta对象，path代表的是to中的path对象
        var isLogin=store.getters.login;
        var token=store.getters.token;
        console.log(token)
        console.log(isLogin+'2221111111111111111111')　　
        if (auth && !store.getters.token) { // auth 代表需要通过用户身份验证，默认为true，代表需要被验证， false为不用检验 　
              // if(path != '/main')
              //  {　　　
              //     next({ path:'/main' }) //  跳转到login页面
              //  }
        }
        else{
               if (path != '/main') 
               {
                  store.commit('SET_Menu', false);
                  store.commit('SET_URL',path+'_1');
                }
              else
               {
                  store.commit('SET_Menu', true);
                  store.commit('SET_URL',path+'_2');
               } 
        }   
        next() // 进行下一个钩子函数
     })

// g构建即时store router工厂
// 每个ssr请求都会实例化app
export function createApp() {
    sync(store, router)
    const app = new Vue({
        router,
        store,
        render: h => h(App),
        data:{
            eventHub: new Vue()
        }
    });
    return {app,router,store}
}
