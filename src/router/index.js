import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Vocab from "../views/Vocab.vue";
import Reference from "../views/Reference.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
      path: '/vocab',
      name: 'vocab',
      component: Vocab,
    },
  {
      path: '/reference',
      name: 'reference',
      component: Reference,
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
