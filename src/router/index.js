import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventsList from "@/views/EventsList.vue";
import CreateEvent from "../views/CreateEvent.vue";
import EventShow from "@/components/EventShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/list",
    name: "event-list",
    component: EventsList,
  },
  {
    path: "/create",
    name: "event-create",
    component: CreateEvent,
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
