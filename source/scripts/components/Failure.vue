<template>
    <div class="container">
        <header>
            <my-header>
                <h1>Transaction Error</h1>
            </my-header>
        </header>
        <button-big destination="/" label="Back to shop"></button-big>

    </div>
</template>

<script>
    import Header from './Header.vue'
    import ButtonBig from './ButtonBig.vue'
    export default {
        components: {
            'my-header': Header,
            'button-big': ButtonBig
        }
    }
</script>
