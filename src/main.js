import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const fullBg = new Image();
fullBg.src = new URL('./assets/image0.png', import.meta.url).href;
fullBg.onload = () => {
  document.documentElement.classList.add('loaded');
};

createApp(App).mount('#app')
