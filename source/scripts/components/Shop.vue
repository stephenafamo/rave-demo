<template>
  <div class="shop">
    <div class="shopItem" v-for="(product, index) in products">
      <div class="itemImg">
        <img :src="'https://lorempixel.com/200/300/fashion/1' + (index % 10 -  9)"/>
      </div>
      <div class="itemDetails">
        <div class="textDetails">
          <div class="itemName">
            {{ product.name }}
          </div>
          <div class="itemCategory">
            {{ product.category }}
          </div>
        </div>
        <div class="priceDetails">
          <div class="itemPrice">
            {{ product.price | currency }}
          </div>
          <div class="itemBuy" v-on:click="addToCart(index, product.id)">
            Add to cart
          </div>
        </div>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import router from '../router'
import store from '../store'

export default {
  computed: {
    products () {
      return store.state.products
    }
  },
  methods: {
    addToCart: function(index) {
      store.commit('add_to_cart', index)
      store.commit('reload_cart')
      if(window.confirm("Added to cart. View cart?")) {
        router.push("/cart")
      }
    }    
  },
  beforeMount(){
    store.dispatch('load_products')
  }
}
</script>

<style scoped>
.shop {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  background-color: white;
}

.shopItem {
  min-width: 250px;
  max-width: 300px;
  width: 100%;
  text-align: center;
  margin: 8% 3%;
  box-sizing: border-box;
  background-color: white;
}

.itemImg {
  width: 100%;
}

img {
  width: 100%;
  padding: 0px;
}

.itemDetails {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: auto;
}

.textDetails {
  text-align: left;
  color: grey;
  flex-shrink: 9999;
}

.itemName {
  text-transform: uppercase;
  font-weight: bolder;
  margin: 10px 7px 5px 7px;
}

.itemCategory {
  margin: 5px 7px 10px 7px;
}

.priceDetails {
  text-align: right;
}

.itemPrice {
  font-weight: bolder;
  font-size: 1.2em;
  color: #258c21;
  margin: 10px 7px 5px 7px;
}

.itemBuy {
  margin: 5px 7px 10px 7px;
  cursor: pointer;
  border: 3px solid #258c21;
  padding: 3px;
  font-size: small;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  color: #258c21;
}

.itemBuy:hover {
  border: 3px solid #258c21;
  background-color: #258c21;
  color: #ddd;
}

footer {
  height: 10vw;
  width: 100%;
  background-color: lightgrey;
}

</style>