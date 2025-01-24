import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import TableView from '@/views/TableView.vue';
import TablesList from '@/components/TablesList.vue';
const routes = [
  { path: '/', component: HomeView },
  { path: '/table', component: TableView },
  { path: '/tables', component: TablesList } // Новый маршрут для просмотра сохраненных таблиц
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
