<script setup>
    import {ref} from "vue";

    const imgSrc = ref("https://kr.vuejs.org/images/logo.png");
</script>

<template>
    <div>
        <img :src="imgSrc">
    </div>
</template>

<style scoped>

</style>