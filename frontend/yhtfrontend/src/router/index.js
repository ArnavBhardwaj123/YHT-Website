import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CausesView from '../views/CausesView.vue'
import DonateView from '../views/DonateView.vue'
import EventsView from '../views/EventsView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactView from '../views/ContactView.vue'
import BlogView from '../views/BlogView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/causes', component: CausesView },
  { path: '/donate', component: DonateView },
  { path: '/events', component: EventsView },
  { path: '/gallery', component: GalleryView },
  { path: '/contact', component: ContactView },
  { path: '/blog', component: BlogView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
