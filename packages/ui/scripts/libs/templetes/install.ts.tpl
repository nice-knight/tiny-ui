import type { App, Plugin } from 'vue';
{{importPlugins}}
const Plugins: Plugin = {
    install(app: App, options):void {
        {{installPlugins}}
    },
};
export default Plugins;
{{ exportPlugins }};