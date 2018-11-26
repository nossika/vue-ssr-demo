import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

export function createRouter() {
  return new VueRouter({
    mode: 'history',
    routes: [
      {
        path: `/page1`,
        component: () => import('./pages/page1.vue'),
      },
      {
        path: `/page2`,
        component: () => import('./pages/page2.vue'),
      },
      {
        path: `/`,
        component: null,
      },
      {
        path: `*`,
        component: () => import('./pages/404.vue'),
      },
    ],
  });
}