const app = Vue.createApp({
    data() {
        return {
            producto: 'Calcetines🧦',
            descripcion: 'Son muy calentitos.'
        }
    }
})

// Montar app
const mountedApp = app.mount('#vista1')