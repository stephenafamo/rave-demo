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
				id: 12,
				name: "my shirt",
				img: "http://lorempixel.com/400/200/fashion/1",
				category: "shirts",
				price: 500
			},
			{
				id: 123,
				name: "my shorts",
				img: "http://lorempixel.com/400/200/fashion/2",
				category: "shorts",
				price: 300
			},
			{
				id: 123,
				name: "my shorts",
				img: "http://lorempixel.com/400/200/fashion/3",
				category: "shorts",
				price: 300
			},
			{
				id: 123,
				name: "my shorts",
				category: "shorts",
				price: 300
			},
			{
				id: 123,
				name: "my shorts",
				category: "shorts",
				price: 300
			},
			{
				id: 123,
				name: "my shorts",
				category: "shorts",
				price: 300
			},
			{
				id: 123,
				name: "my shorts",
				category: "shorts",
				price: 300
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
