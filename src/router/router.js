import LoginPage from './../components/pages/LoginPage.vue'
import WelcomePage from './../components/pages/WelcomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage
    },
    {
        path: "/welcome",
        name: "WelcomePage",
        component: WelcomePage
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;