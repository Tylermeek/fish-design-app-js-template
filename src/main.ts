import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import FishDesign from "fish-design-vite";
import "fish-design-vite/style.css";

createApp(App)
    .use(FishDesign).mount('#app')
