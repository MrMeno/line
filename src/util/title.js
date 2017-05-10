function getTitle(vm) {
    const { title } = vm.$options
    if (title) {
        return typeof title === 'function' ?
            title.call(vm) :
            title
    }
}

const serverTitleMixin = {
    created() {
        const title = getTitle(this)
        if (title) {
            this.$ssrContext.title = `媒大媒小-影视植入服务平台 | ${title}`
        }
    }
}

const clientTitleMixin = {
    mounted() {
        const title = getTitle(this)
        if (title) {
            document.title = `媒大媒小-影视植入服务平台 | ${title}`
        }
    }
}

export default process.env.VUE_ENV === 'server' ?
    serverTitleMixin :
    clientTitleMixin