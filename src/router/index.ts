import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import TourDetailView from '../views/TourDetailView.vue'
import AboutView from '../views/AboutView.vue'
import ReviewsView from '../views/ReviewsView.vue'
import ContactsView from '../views/ContactsView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/search', name: 'search', component: SearchView },
  { path: '/tour/:id', name: 'tour-detail', component: TourDetailView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/reviews', name: 'reviews', component: ReviewsView },
  { path: '/contacts', name: 'contacts', component: ContactsView },
  // Редирект для несуществующих страниц
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router