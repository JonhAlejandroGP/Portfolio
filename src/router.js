import Vue from 'vue';
import  Router from 'vue-router';
import Landing from '@/components/Landing';

Vue.use(Router);

const router = new Router({
    mode:'history',
    routes: [
        { 
            path: '/',
            name: 'landing',
            component: Landing

        },   
        {
            path: '*',
            name: 'error',
            component:  Error
        }
    ]
 });
 export default router