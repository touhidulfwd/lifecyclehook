import { createRouter, createWebHistory } from 'vue-router'
const HomePage = () => import('../components/HomePage.vue')
const CarouselSlider = () => import('../components/CarouselSlider.vue')
const PieChart = () => import('../components/PieChart.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    }, 
    {
      path: '/carousel',
      name: 'carouselSlider',
      component: CarouselSlider
    },    
    {
      path: '/chart',
      name: 'pieChart',
      component: PieChart
    }
  ]
})

export default router
