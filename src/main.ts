import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import FishDesign from "@tyler_the_duck/fish-design";
import "@tyler_the_duck/fish-design/style.css";

createApp(App)
    .use(FishDesign).mount('#app')
