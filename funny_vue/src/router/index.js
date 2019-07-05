import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/account/login.vue'
import join from '../components/account/join.vue'
import boardList from '../components/board/boardList.vue'
import boardAdd from '../components/board/boardAdd.vue'
import boardDetail from '../components/board/boardDetail.vue'
Vue.use(VueRouter)

const Home = { template: '<div>Home</div>'}
const NotFound = { template: '<div>Not Found</div>'}


const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/home', component: Home },
      { path: '/test', component: NotFound },
      { path: '/login', component: login },
      { path: '/join', component: join },
      { path: '/boardList', component: boardList, props:true},
      { path: '/boardAdd', component: boardAdd},
      { path: '/boardDetail', component: boardDetail, props:true},
    ]
  })
  
  export default router