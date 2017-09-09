import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {
			email: ""
		},
		purchases: [],
		products: [
			{
				id: 1,
				name: "classy shirt",
				category: "shirts",
				price: 12000
			},
			{
				id: 2,
				name: "denim shorts",
				category: "shorts",
				price: 7500
			},
			{
				id: 3,
				name: "cotton trousers",
				category: "trousers",
				price: 3000
			},
			{
				id: 4,
				name: "leather jacket",
				category: "jackets",
				price: 30000
			},
			{
				id: 5,
				name: "rolex wristwatch",
				category: "watches",
				price: 200000
			},
			{
				id: 6,
				name: "short party dress",
				category: "dresses",
				price: 22000
			},
			{
				id: 7,
				name: "dinner gown",
				category: "gowns",
				price: 25000
			},
			{
				id: 8,
				name: "leather shoes",
				category: "shoes",
				price: 28000
			},
			{
				id: 9,
				name: "sexy heels",
				category: "shoes",
				price: 45000
			},
			{
				id: 10,
				name: "Swaggerlicious Hoodie",
				category: "jackets",
				price: 125000
			},
			{
				id: 11,
				name: "classy bracelet",
				category: "jewelry",
				price: 12000
			},
			{
				id: 12,
				name: "diamond ring",
				category: "jewelry",
				price: 1125000
			}
		],
		selected: 0,
	},
	mutations: {
		set_email (state, payload) {
			state.user.email = payload.email
		},
		add_purchase (state, payload) {
			state.purchases.push({
				"payload": payload,
				"time": Date.now()
			})
		}
	},
	getters: {
		user_email: state => {
			return state.user.email
		}
  }
})
