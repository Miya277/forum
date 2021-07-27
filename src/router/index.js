import Vue from 'vue'
import VueRouter from 'vue-router'
const Square = () => import('../pages/level1/square/Square')
const Message = () => import('../pages/level1/message/Message')
const Profile = () => import('../pages/level1/profile/Profile')
Vue.use(VueRouter)

const routers = [
  {
    path: '',
    redirect: '/square'
  },
  {
    path: '/square',
    component: Square
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routers
})

export default router
