<script setup>
    import {ref} from 'vue';

    const numberModel = 3;
</script>

<template>
    <div>
        <input type="number" v-model.number="numberModel">
    </div>
</template>

<style scoped>

</style>