import Vue from 'vue'
import Router from 'vue-router'
import Swiper from '@/components/Swiper.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Swiper',
      component: Swiper
    }
  ]
})
