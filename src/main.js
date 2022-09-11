import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('@/assets/scss/main.scss')

store.subscribe((mutation, state) => {
	localStorage.setItem("balda-state", JSON.stringify(state));
})

createApp(App).use(router).use(store).mount('#app')
