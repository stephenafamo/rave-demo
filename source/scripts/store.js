import Vue from 'vue'
import Vuex from 'vuex'
import * as Cookie from 'tiny-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		ussd_code:  "*123*100*2",
		cart: 		[],
		orders: 	{},
		products: 	{},
		products_loaded: false,
		selected: 	0,
	},
	mutations: {
		add_purchase (state, payload) {
			state.purchases.push({
				"payload": payload,
				"time": Date.now()
			})
		},
		add_to_cart (state, payload) {
			let cart 	= Cookie.get('cart', JSON.parse)
			if (cart === null) {
				cart 	= []
			}
			if (!(payload in cart)) {
				cart[payload] = 0				
			}
			cart[payload] += 1
			Cookie.set('cart', cart, JSON.stringify)		
		},
		remove_from_cart (state, payload) {
			if ((payload in state.cart)) {
				state.cart[payload] = null			
			}
			Cookie.set('cart', state.cart, JSON.stringify)
		},
		reload_cart (state, payload) {
			let cart 	= Cookie.get('cart', JSON.parse)
			if (cart === null) {
				cart 	= []
			}		
			state.cart 	= cart
		},
		load_products (state) {
			if (state.products_loaded === false) {
				var request = new XMLHttpRequest();
				request.open('GET', '/api/products.php', false); 
				request.send();

				if (request.status === 200) {
					let response = JSON.parse(request.responseText)

					state.products = response
					state.products_loaded = true
				}
			}
		},
		make_order (state) {
			if (Object.keys(state.cart).length === 0 ) {
				return
			}
			var request = new XMLHttpRequest();
			request.open('POST', '/api/order.php', false); 
			request.send(JSON.stringify({
				cart: state.cart
			}));

			if (request.status === 200) {
				let response = JSON.parse(request.responseText)
				if (response.status === 'success') {
					let order_number 	= response.number
					let prev_orders 	= Cookie.get('orders', JSON.parse)

					if (prev_orders === null) {
						prev_orders = []
					}

					prev_orders.unshift(order_number)

					Cookie.set('orders', prev_orders, JSON.stringify)
					Cookie.set('cart', [], JSON.stringify)
				}
			}
		},
		load_orders (state) {
			let prev_orders = Cookie.get('orders')

			var request = new XMLHttpRequest();
			request.open('POST', '/api/orders.php', false); 
			request.send(prev_orders);

			if (request.status === 200) {
				let response 	= JSON.parse(request.responseText)
				state.orders 	= response
			}
		}
	},
	actions: {
		load_products (context) {
			context.commit('load_products')
		},
		make_order (context) {
			context.commit('make_order')
		},
		load_orders (context) {
			context.commit('load_orders')
		}
	},
	getters: {
		ussd_code: state => {
			return state.ussd_code
		},
		cart: state => {
			return state.cart
		},
		orders: state => {
			return state.orders
		}
	}
})
