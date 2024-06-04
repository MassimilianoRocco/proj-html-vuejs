import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueKinesis from "vue-kinesis";

createApp(App).use(VueKinesis).mount('#app')
