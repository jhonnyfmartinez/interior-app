import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Interior from "../pages/Interior.vue";
import Projects from "../pages/Projects.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/interior",
    name: "Interior",
    component: Interior,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
