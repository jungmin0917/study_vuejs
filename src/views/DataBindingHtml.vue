<script setup>
    const htmlString = ref(`<p style="color:red">HTML으로 작성한 문장</p>`);

    import {ref} from 'vue';
</script>

<template>
    <div>
        <div>{{ htmlString }}</div>
        <div v-html="htmlString"></div>
    </div>
</template>

<style scoped>

</style>