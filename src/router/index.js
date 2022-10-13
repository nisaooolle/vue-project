import MotorView from "../view/MotorView.vue";
import MobilView from "../view/MobilView.vue";
import BusView from "../view/BusView.vue";
import KapalView from "../view/KapalView.vue";
import PesawatView from "../view/PesawatView.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)
const routes =[
 {
path: "/",
name: "motor",
component: MotorView,
  },
  {
        path: "/mobil",
        name: "mobil",
        component: MobilView,
  },
  {
    path: "/bus",
    name: "bus",
    component: BusView,
},
{
    path: "/kapal",
    name: "kapal",
    component: KapalView,
},
{
    path: "/pesawat",
    name: "pesawat",
    component: PesawatView,
},
]
// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// });

const router = new Router({
    routes,
    mode: "history",
});

export default router;