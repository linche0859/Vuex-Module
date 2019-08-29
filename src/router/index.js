import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: () => import('@/pages/Page1')
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('@/pages/Page2')
    },
    {
      path: '/page3',
      name: 'page3',
      component: () => import('@/pages/Page3')
    },

    {
      path: '*',
      redirect: '/page1'
    }
  ]
})
