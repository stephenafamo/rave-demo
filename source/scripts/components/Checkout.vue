<template>
    <div class="container">
        <header>
            <my-header>
                <h1>Checkout</h1>
            </my-header>
        </header>
        <button-big destination="/" label="Back to shop"></button-big>
        <div class="products" v-if="ordersExist()">
            <h2 class="productsHeading">Checkout</h2>
            <div class="product" v-for="(order, index) in orders">
                <h4>Order number: {{ index }}</h4>
                <h3>Total: {{ order.total | currency }} </h3>
                <p>Dial <strong>{{ ussd_code }}{{ index }}#</strong> to pay for your order</p>
                <p v-if="order.paid">Paid: <span style="color: green;">YES</span> </p>
                <p v-else>Paid: <span style="color: red;">NO</span> </p>
            </div>
        </div>
        <div class="products" v-else>
            <h2 class="productsHeading">No orders yet</h2>
        </div>
        <footer></footer>
    </div>
</template>

<script>
import Header from './Header.vue'
import ButtonBig from './ButtonBig.vue'
import store from '../store'
import { mapGetters } from 'vuex'

export default {
    components: {
        'my-header': Header,
        'button-big': ButtonBig
    },
    methods: {
        ordersExist: function() {
            return true
            return (Object.keys(store.state.orders).length !== 0 )
        },
        orderHasItems: function(index) {
            return (Object.keys(store.state.orders[index]).length !== 0 )
        }
    },
    computed: mapGetters({
        orders      : "orders",
        ussd_code   : "ussd_code"
    }),
    beforeCreate(){
        store.commit('reload_cart')
        store.commit('make_order')
        store.commit('load_orders')
    }
}
</script>

<style scoped>
.products {
    background-color: white;
    width: 80%;
    margin: auto;
}

.productsHeading {
    padding: 3% 3% 0% 3%;
    text-align: center;
    text-transform: uppercase;
}

.product {
    text-align: left;
    margin: auto;
    padding: 0% 3% 3% 3%;
}

.product h3 {
    text-transform: uppercase;
}

footer {
    height: 10vw;
    width: 100%;
}

</style>