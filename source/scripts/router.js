import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import Success from './components/Success.vue'
import Failure from './components/Failure.vue'

Vue.use(VueRouter)

const routes = [
{ path: '/', component: Index },
{ path: '/success', component: Success },
{ path: '/failure', component: Failure }
]

export default new VueRouter({
	routes,
})