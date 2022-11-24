import DefaultTheme from 'vitepress/theme';
import tinyUi from "../../../src/index";
import PreView from "./components/PreView.vue";
import { type EnhanceAppContext } from 'vitepress'
// 导入Unocss
import 'uno.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }:EnhanceAppContext) {
    app.component('PreView', PreView);
    app.use(tinyUi as any,{});
  }
}