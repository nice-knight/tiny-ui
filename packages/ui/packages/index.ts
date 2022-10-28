import type { App, Plugin } from 'vue';
import { ButtonPlugin } from "./Button";

const Plugins: Plugin = {
    install(app: App, options) {
        ButtonPlugin.install?.(app);
    },
};


export default Plugins;

export * from './Button';
