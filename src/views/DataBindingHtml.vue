<script setup>
    import {ref} from 'vue';

    const htmlString = ref(`<p style="color:red">HTML으로 작성한 문장</p>`);
</script>

<template>
    <div>
        <div>{{ htmlString }}</div>
        <div v-html="htmlString"></div>
    </div>
</template>

<style scoped>

</style>