import DefaultTheme from 'vitepress/theme';
import tinyUi from "../../../src/index";
import PreView from "./components/PreView.vue";
// 导入Unocss
import 'uno.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('PreView', PreView);
    app.use(tinyUi);
  }
}