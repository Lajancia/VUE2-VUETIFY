import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        title: "Home",
      },
  },
  {
    path: '/about',
    name: 'About',
    meta: {
        title: "About",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    meta: {
        title: "Resume",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
  },
    {
    path: '/gallery',
    name: 'Gallery',
    meta: {
        title: "Gallery",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Gallery.vue')
  },
    {
    path: '/blender',
    name: 'Blender',
    meta: {
        title: "3D Arts",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Blender.vue')
  },
    {
    path: '/book',
    name: 'Book',
    meta: {
        title: "Book",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Book.vue')
  },
      {
    path: '/game',
    name: 'Game',
    meta: {
        title: "Game",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Game.vue')
  },
        {
    path: '/journey',
    name: 'Journey',
    meta: {
        title: "Journey",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Journey.vue')
  },
        {
    path: '/mr',
    name: 'Mr Rabbit',
    meta: {
        title: "Mr. Rabbit",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Mr.vue')
  },
        {
    path: '/other',
    name: 'others',
    meta: {
        title: "Others",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Other.vue')
  },
        {
    path: '/school',
    name: 'School',
    meta: {
        title: "School",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/School.vue')
  },
        {
    path: '/witch',
    name: 'Witch',
    meta: {
        title: "Witch",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Witch.vue')
  },
    {
    path: '/projects',
    name: 'Projects',
    meta: {
        title: "Projects",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },
    {
    path: '/activity',
    name: 'Activity',
    meta: {
        title: "Activities",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Activity.vue')
  },
    {
    path: '/indexpage',
    name: 'IndexPage',
    meta: {
        title: "IndexPage",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/IndexPage.vue')
  },
   {
    path: '/login',
    name: 'Login',
    meta: {
        title: "Login",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue')
  },
    {
    path: '/join',
    name: 'Join',
    meta: {
        title: "Join",
      },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Join.vue')
  },
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router
