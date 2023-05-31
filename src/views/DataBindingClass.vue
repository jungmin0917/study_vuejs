<script setup>
    import {ref} from "vue";

    const isActive = ref(true);
    const hasError = ref(false);
</script>

<template>
    <div class="container" :class="{'active': isActive, 'text-red': hasError}">
        Class Binding
    </div>
</template>

<style scoped>
    .container {
        width: 100%;
        height: 200px;
    }

    .active {
        background-color: yellow;
        font-weight: bold;
    }

    .text-red {
        color: red;
    }
</style>