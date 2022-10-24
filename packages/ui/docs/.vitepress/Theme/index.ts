import DefaultTheme from 'vitepress/theme';
import tinyUi from "../../../packages/index";
import PreView from "./components/PreView.vue"

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('PreView', PreView);
        app.use(tinyUi);
    }
}