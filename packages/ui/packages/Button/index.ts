import type { App, Plugin } from "vue";
import Button from "./src/Button.vue";

export const ButtonPlugin: Plugin = {
    install(app: App) {
        app.component("TinyButton", Button);
    },
};

export { Button };
