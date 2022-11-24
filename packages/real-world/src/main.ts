import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import tinyUi from "@tiny-ui/ui";


const app = createApp(App);
app.use(tinyUi as any);

app.mount('#app')
