<script setup>
    import {ref} from 'vue';

    const valueModel = 'South Korea';
    const placeholderModel = '입력해주세용';
</script>

<template>
    <div>
        <input type="text" v-model="valueModel" :placeholder="placeholderModel">
    </div>
</template>

<style scoped>

</style>