import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/index/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Home,
    children: [
      {
        path: '/user',
        name: 'User',
        component: () => import("../views/user/index")
      },
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
