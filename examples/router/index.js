import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/src/button'
import Editor from '@/src/simeditor'
import LimitTextarea from '@/src/limit-textarea'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/button',
      name: 'onloonUI',
      component: Button
    }, {
      path: '/editor',
      name: 'onloonUI',
      component: Editor
    }, {
      path: '/limitTextarea',
      name: 'onloonUI',
      component: LimitTextarea
    }
  ]
})
