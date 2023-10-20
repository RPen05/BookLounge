import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/views/MainPage.vue';
import StocksPage from './components/views/StocksPage.vue';
import DetailsPage from './components/views/DetailsPage.vue';
import CategoryBookPage from './components/views/CategoryBookPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/stocks', component: StocksPage },
  { path: '/details/:id', name: 'details', component: DetailsPage, props: true },
  {
    path: '/category/:category',
    name: 'category',
    component: CategoryBookPage,
    props: route => ({
      category: route.params.category,
      title: 'Some title'
    }),
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;