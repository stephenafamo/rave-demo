<template>
    <div class="heading">
        <slot>
            <h1>Page Title</h1>
        </slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .heading {
        text-align: center;
        width: 100%;
        background-color: lightgrey;
        color: #333333;
        height: 15vh;
        max-height: 100px;
        z-index: 3;
    }

    .heading h1 {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: relative;
        margin: 0px;
        font-weight: bold;
        font-size: 2.5em;
        text-transform: uppercase;
    }
</style>
