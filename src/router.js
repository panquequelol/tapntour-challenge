import { createWebHistory, createRouter } from "vue-router";

// import HomeLayout from "@/layouts/HomeLayout.vue"; // not implemented yet
import TourView from "@/menu/tour/TourView.vue";
import GuideView from "@/menu/guide/GuideView.vue";
import SignUpView from "@/menu/profile/SignUpView.vue";

import TourDetail from "@/menu/tour/TourDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TourView,
  },
  {
    path: "/tours",
    name: "TourView",
    component: TourView,
  },
  {
    path: "/tours/:id",
    name: "TourDetail",
    component: TourDetail,
  },
  {
    path: "/guides",
    name: "GuideView",
    component: GuideView,
  },
  {
    path: "/profile",
    name: "SignUpView",
    component: SignUpView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
