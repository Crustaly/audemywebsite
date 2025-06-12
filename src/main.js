import { createApp } from 'vue';
import router from './router/index.js';
import App from './App.vue';
import './style.css';
// import GoogleSignInPlugin from "vue3-google-signin";
import vue3GoogleLogin from 'vue3-google-login';

// This will create the Vue application instance
const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_APP_CLIENT_ID, // Correct way with Vite
});
app.use(router);
app.mount('#app');
