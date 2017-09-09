import Vue from 'vue'
import store from './store'
import router from './router'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.use(VueCurrencyFilter, {symbol : 'NGN'})

const app = new Vue({
	el: '#app',
	store,
	router,
});