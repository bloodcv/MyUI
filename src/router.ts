/* eslint-disable prettier/prettier */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

 import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'

 const routes = [{
  path: '/',
  redirect: '/components/Button'
 },{
    title: '按钮',
    name: 'Button',
    path: '/components/Button',
    components: {
      default: () => import('packages/Button/docs/README.md'),
      PreviewMobile: () => import('packages/Button/docs/demo.vue')
    },
  },{
    title: 'Foo测试',
    name: 'FooT',
    path: '/components/FooT',
    components: {
      default: () => import('packages/FooT/docs/README.md'),
      PreviewMobile: () => import('packages/FooT/docs/demo.vue')
    },
  },{
    title: '测试2',
    name: 'InputT',
    path: '/components/InputT',
    components: {
      default: () => import('packages/InputT/docs/README.md'),
      PreviewMobile: () => import('packages/InputT/docs/demo.vue')
    },
  }];
 
 const routerConfig = {
   history: createWebHashHistory(),
   routes,
   scrollBehavior(to: any, from: any) {
     if (to.path !== from.path) {
       return { top: 0 };
     }
   },
 };
 
 const router = createRouter(routerConfig as RouterOptions);
 
 export default router;
