import type { App, Plugin } from 'vue';
import {{ componentName }} from './src/{{componentName}}.vue';

export const {{ componentName }}Plugin: Plugin = {
  install(app: App) {
    app.component('Tiny{{ componentName }}', {{ componentName }});
  },
};

export {
  {{ componentName }},
};
