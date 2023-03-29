import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/views/AppHome.vue'
import AppProduct from '@/views/AppProduct.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome,
    props: {
      products: store.state.products
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: AppProduct,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router