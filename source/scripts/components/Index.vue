<template>
    <div class="container">
        <header>
            <my-header>
            <h1>Shop</h1>
            </my-header>
        </header>
        
        <my-shop></my-shop>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import Shop from './Shop.vue'
    export default {
        components: {
            'my-header': Header,
            'my-shop': Shop
        }
    }
</script>
