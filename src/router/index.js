import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import VisitCardView from '../views/VisitCardView.vue';
import LegalNotice from '../views/LegalNotice.vue';
import ServicesView from '../views/ServicesView.vue';

const routes = [
  {
    path: '/',
    alias: '/accueil',
    name: 'HomeView',
    component: HomeView,
    meta: {
      title: 'Arkadis Consulting | Karl Delobbe',
      description: 'Bienvenue sur le site d\'Arkadis Consulting.'
    }
  },
  {
    path: '/nos-services',
    name: 'ServicesView',
    component: ServicesView,
    meta: {
      title: 'Nos Services',
      description: 'Découvrez l\'ensemble de nos services'
    }
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView,
    meta: {
      title: 'Contactez-nous',
      description: 'Contactez-nous '
    }
  },
  {
    path: '/visit-card',
    name: 'VisitCard',
    component: VisitCardView,
    meta: {
      title: 'Carte de visite',
      description: 'Retrouvez toutes nos coordonnées'
    }
  },
  {
    path: '/mentions-legales',
    name: 'LegalNotice',
    component: LegalNotice,
    meta: {
      title: 'Mentions Légales',
      description: 'Mentions légales'
    }
  }
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

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.meta.description) {
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', to.meta.description);
  }
  next();
});

export default router;