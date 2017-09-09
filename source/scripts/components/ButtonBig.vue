<template>
    <router-link :to="destination">
        <div class="button">
            <span>{{ label }}</span>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: [
        'label',
        'destination'
        ],

    }
</script>

<style scoped>

    .button:hover {
        background-color: #258c21;
        color: #ddd;
    }

    a {
        text-decoration: none;
    }
    .button {
        text-align: center;
        width: 50%;
        max-width: 300px;
        margin: auto;
        cursor: pointer;
        border: 10px solid #258c21;
        color: #258c21;
        background-color: transparent;
        max-height: 100px;
        z-index: 3;
        text-align: center;
    }

    .button span {
        text-decoration: none;
        font-weight: bold;
        font-size: 2em;
    }

</style>
