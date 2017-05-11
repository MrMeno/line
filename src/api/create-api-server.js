import Firebase from 'firebase'
import LRU from 'lru-cache'

export function createAPI({ config, version }) {
    let api
        // 在开发环境会运行好几次
        //所以在process函数中加上了实例化的API来避免重复运行此函数
    if (process.__API__) {
        api = process.__API__
    } else {
        Firebase.initializeApp(config)
        api = process.__API__ = Firebase.database().ref(version)

        api.onServer = true

        // fetched item cache
        api.cachedItems = LRU({
            max: 1000,
            maxAge: 1000 * 60 * 15 // 15 min cache
        })

        // cache the latest story ids
        api.cachedIds = {};
        ['main', 'new', 'show', 'ask', 'job', 'userCenter'].forEach(type => {
            api.child(`${type}stories`).on('value', snapshot => {
                api.cachedIds[type] = snapshot.val()
            })
        })
    }
    return api
}