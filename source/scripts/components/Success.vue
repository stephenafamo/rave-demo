<template>
  <div class="container">
    <header>
      <my-header>
        <h1>Transaction successful</h1>
      </my-header>
    </header>
    <button-big destination="/" label="Continue shopping"></button-big>
    <div class="purchases">
      <h2 class="purchasesHeading" v-if="purchasesAvailable()">List of purchases </h2>
      <div class="purchase" v-for="(purchase, index) in purchases">
        <h3>Name: {{ getPurchasedProduct(purchase).name }} </h3>
        <p>Price: NGN {{ getPurchasedProduct(purchase).price }} </p>
        <p>Paid: {{ purchase.payload.data.data.currency }} {{ purchase.payload.data.data.amount }} </p>
        <p>Purchased on: {{ (new Date(purchase.time)).toString() }} </p>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import ButtonBig from './ButtonBig.vue'
  export default {
    computed: {
      purchases () {
        return this.$store.state.purchases
      }
    },
    methods: {
      getPurchasedProduct: function(purchase) {
        var purchaseRefCode = purchase.payload.data.data.txRef
        var id = purchaseRefCode.split("-").pop()
        return this.$store.state.products.find(function(element){
          return element.id == id
        })
      },
      purchasesAvailable: function() {
        var purchases_array = this.$store.state.purchases
        return (typeof purchases_array !== 'undefined' && purchases_array.length > 0)
      }
    },
    components: {
      'my-header': Header,
      'button-big': ButtonBig
    }
  }
</script>

<style scoped>
  .purchases {
    background-color: white;
    width: 80%;
    margin: auto;
  }

  .purchasesHeading {
    padding: 3% 3% 0% 3%;
    text-align: center;
    text-transform: uppercase;
  }

  .purchase {
    text-align: left;
    margin: auto;
    padding: 0% 3% 3% 3%;
  }

  .purchase h3 {
    text-transform: uppercase;
  }

  footer {
    height: 10vw;
    width: 100%;
  }

</style>