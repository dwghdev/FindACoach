import { createRouter, createWebHistory } from 'vue-router';

import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';

import RequestReceive from './pages/requests/RequestReceive.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import NotFound from './pages/NotFound.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      component: CoachDetail,
      path: '/coaches/:id',
      props: true,
      children: [
        { path: 'contact', component: ContactCoach }
      ]
    },
    { path: '/register', component: CoachRegistration },
    { path: '/request', component: RequestReceive },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});
