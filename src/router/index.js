import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import NowaWspolnota from '@/components/NowaWspolnota'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/nowa-wspolnota',
      name: 'NowaWspolnota',
      component: NowaWspolnota
    }
  ]
})
