<template>
  <div class="shop">
    <div class="shopItem" v-for="(product, index) in products">
      <div class="itemImg">
        <img :src="'http://lorempixel.com/200/300/fashion/1' + (index % 10 -  9)"/>
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
          <div class="itemBuy" v-on:click="buy(index, product.id)">
            Buy Now
          </div>
        </div>
      </div>
    </div>
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
      buy: function(index, id) {
        var product = store.state.products[index]
        var PBFKey = "FLWPUBK-1cf610974690c2560cb4c36f4921244a-X";

        getpaidSetup({
          PBFPubKey: PBFKey,
          customer_email: "user@example.com",
          customer_firstname: "Temi",
          customer_lastname: "Adelewa",
          custom_description: "Stephen's Rave Demo",
          custom_logo: "http://media/logo.svg",
          custom_title: "Rave Demo",
          amount: product.price,
          customer_phone: "234099940409",
          country: "NG",
          currency: "NGN",
          txref: 'rave-demo-product-' + id,
          onclose: function() {},
          callback: function(response) {
            var flw_ref = response.tx.flwRef; 
            console.log("This is the response returned after a charge", response);
            if (
              response.tx.chargeResponseCode == "00" ||
              response.tx.chargeResponseCode == "0"
              ) 
            {
              store.commit('add_purchase', response)
              router.push('/success');
            } else {
              router.push('/faliure');
            }
          }
        });
      }
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
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
  }

  .textDetails {
    float: left;
    text-align: left;
    color: grey;
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
    float: right;
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

</style>