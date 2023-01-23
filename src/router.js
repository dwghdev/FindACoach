import { createRouter, createWebHistory } from 'vue-router';

import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
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
      path: '/coaches/:id',
      component: CoachDetails,
      children: [
        {
          path: 'contact',
          component: ContactCoach
        } // /coaches/c1/contact
      ]
    },
    { path: '/register', component: CoachRegistration },
    { path: '/request', component: RequestReceive },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});
