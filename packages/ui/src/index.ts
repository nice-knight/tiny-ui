import type { App, Plugin } from 'vue';
import { ButtonPlugin } from "./Button";
import 'uno.css';

const Plugins: Plugin = {
    install(app: App, options):void {
        ButtonPlugin.install?.(app);
    },
};


export default Plugins;

export * from './Button';

