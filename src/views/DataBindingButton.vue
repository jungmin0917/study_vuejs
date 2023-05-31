<script setup>
    import {ref} from "vue";

    const textValue = ref("");
</script>

<template>
    <div>
        <input type="text" v-model="textValue">
        <button type="button" :disabled="textValue == ''">Click</button>
    </div>
</template>

<style scoped>

</style>