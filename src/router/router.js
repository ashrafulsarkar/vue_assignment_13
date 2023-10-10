import { createRouter, createWebHistory } from 'vue-router'
import UserDetails from '../components/UserDetails.vue'
import EditDetails from '../components/EditDetails.vue'

const routes = [
    { path: '/', component: UserDetails},
    { path: '/edit', component: EditDetails},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router