<template>
    <div class="container">
        <header>
            <my-header>
                <h1>Shopping Cart</h1>
            </my-header>
        </header>
        <button-big destination="/" label="Back to shop"></button-big>
        <div class="products">
            <h2 class="productsHeading" v-if="cartHasProducts()">List of products </h2>
            <h2 class="productsHeading" v-else>Cart is empty</h2>
            <div class="product" v-for="(product, index) in products.items">
                <h3>Name: {{ product.name }} </h3>
                <p>Unit Price: {{ product.price | currency }} </p>
                <p>Quantity: {{ product.quantity }} </p>
                <p>Price: {{ product.total_price | currency }} </p>
                <button v-on:click="removeFromCart(index)">Remove</button>
            </div>
            <h3 v-if="cartHasProducts()">Total: {{ products.total_price | currency }} </h3>
        </div>
        <button-big destination="/checkout" label="Checkout" v-if="cartHasProducts()"></button-big>
        <footer></footer>
    </div>
</template>

<script>
import Header from './Header.vue'
import ButtonBig from './ButtonBig.vue'
import store from '../store'

export default {
    components: {
        'my-header': Header,
        'button-big': ButtonBig
    },
    methods: {
        cartHasProducts: function() {
            return (Object.keys(store.state.cart).length !== 0 )
        },
        removeFromCart: function(index) {
            store.commit('remove_from_cart', index)
            store.commit('reload_cart')
        }
    },
    beforeMount(){
        store.dispatch('load_products')
        store.commit('reload_cart')
    },
    computed: {
        products() {
            let products            = {}
            products["items"]       = {}
            products["total_price"] = 0

            let cart            = store.getters.cart
            let store_products  = store.state.products

            if (Object.keys(store_products).length !== 0) {
                for (var id = 0; id < cart.length; id++) {
                    if (cart[id] !== null ) {
                        let currentProduct = store_products[id]
                        currentProduct['quantity'] = cart[id]
                        currentProduct['total_price'] = currentProduct.price * cart[id]
                        products.items[id] = currentProduct
                        products["total_price"] += currentProduct['total_price']
                    }
                }
            }

            return products
        }
    },
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