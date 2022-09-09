import { App, Plugin } from 'vue';
import InputT from './src/index.vue';

export const InputTPlugin: Plugin = {
  install(app: App) {
    app.component('my-input-t', InputT);
  },
};

export {
  InputT,
};
