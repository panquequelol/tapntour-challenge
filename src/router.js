import { createWebHistory, createRouter } from "vue-router";

import HomeLayout from "@/layouts/HomeLayout.vue";
import TourView   from "@/menu/tour/TourView.vue";
import GuideView  from "@/menu/guide/GuideView.vue";
import SignUpView from "@/menu/profile/SignUpView.vue";

import TourDetail from "@/menu/tour/TourDetail.vue";

const routes = [
    {
      path: "/",
      name: "HomeLayout",
      component: HomeLayout,
    },
    {
      path: "/tours",
      name: "TourView",
      component: TourView,
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
    {
      path: "/TourDetail",
      name: "TourDetail",
      component: TourDetail,
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(), routes });
  
export default router;