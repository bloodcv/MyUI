import { App, Plugin } from 'vue';
import FooT from './src/index.vue';

export const FooTPlugin: Plugin = {
  install(app: App) {
    app.component('my-foo-t', FooT);
  },
};

export {
  FooT,
};
