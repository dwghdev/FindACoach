import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: null },
    {
      path: '/coaches/:id',
      component: null,
      children: [
        {
          path: 'contact', component: null
        } // /coaches/c1/contact
      ]
    },
    { path: '/register', component: null },
    { path: '/request', component: null },
    { path: '/:notFound(.*)', component: null },
  ]
});
