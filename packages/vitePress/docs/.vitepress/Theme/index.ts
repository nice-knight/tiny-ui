import DefaultTheme from 'vitepress/theme';
// import tinyUi from "@tiny-ui/ui";
import PreView from "./components/PreView.vue";
import { type EnhanceAppContext } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp({ app }:EnhanceAppContext) {
    app.component('PreView', PreView);
   // app.use(tinyUi as any,{});
  }
}