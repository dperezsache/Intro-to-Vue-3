const app = Vue.createApp({
    data() {
        return {
            producto: 'Socks',
            imagen: './assets/images/socks_green.jpg',
            url: 'https://calcetines.com'
        }
    }
})

// Mount app
const mountedApp = app.mount('#app')