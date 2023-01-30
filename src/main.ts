import { setupRouter } from '@/router';
import 'uno.css';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

async function setupApp() {
  const app = createApp(App);
  // vue router
  await setupRouter(app);
  // mount app
  app.mount("#app");
}

setupApp().then();
