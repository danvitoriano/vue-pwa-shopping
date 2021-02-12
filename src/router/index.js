import Vue from "vue";
import VueRouter from "vue-router";
// import Shopping from "../views/Shopping.vue";
import Produto from '../views/grupo1/WatchScreen.vue'

// 1. Use Vue Router
Vue.use(VueRouter);

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  // {
  //   path: "/",
  //   name: "Shopping",
  //   component: Shopping
  // },
  { 
    // Fiap Smart Watch 
    // Bruno Fonseca de Almeida - RM 337107
    // Demetrius Tavares - RM 338132
    // Dorenalto Mangueira Couto - RM 338609
    // Marcelo Toshio Yamashita - RM 337940
    path: "/grupo1",
    name: "Produto",
    component: Produto

  },
  {
    path: "/about",
    name: "About",
    // 3. route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

// 4. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
