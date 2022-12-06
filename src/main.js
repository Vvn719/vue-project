import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// @>把這個符號指到src資料夾的意思，內建設定
// '@': fileURLToPath(new URL('./src', import.meta.url))
import '@/sass/main.sass'

const app = createApp(App)

app.use(router)

app.mount('#app')
