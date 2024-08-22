import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import VisitCardView from '../views/VisitCardView.vue';
import LegalNotice from '../views/LegalNotice.vue';
import ServicesView from '../views/ServicesView.vue'

const routes = [
  {
    path: '/accueil',
    name: 'HomeView',
    component: HomeView
  },
  {
    path:'/nos-services',
    name : 'ServicesView',
    component : ServicesView
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView
  },
  {
    path: '/visit-card',
    name: 'VisitCard',
    component: VisitCardView
  },
  {
    path: '/mentions-legales',
    name: 'LegalNotice',
    component: LegalNotice
  },
  {
    path: '/',
    redirect: '/accueil'
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    } else {
      return { top: 0 };
    }
  }
});

export default router;
