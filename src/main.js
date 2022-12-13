import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import Vuex from "vuex";

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.use(Vuex)

app.mount('#app')
