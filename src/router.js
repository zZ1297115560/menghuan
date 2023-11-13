import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import UpgradeCalculator from './views/UpgradeCalculator.vue';
import MaterialYield from './views/MaterialYield.vue';
import StoneYield from './views/StoneYield.vue';
import ROI from './views/ROI.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/upgrade-calculator', component: UpgradeCalculator },
    { path: '/material-yield', component: MaterialYield },
    { path: '/stone-yield', component: StoneYield },
    { path: '/roi', component: ROI },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
export default router;