<script setup>

    // 데이터를 받을 자식

    import {inject, onMounted} from "vue"; // 데이터를 받기 위한 inject 함수

    const itemLength = inject('itemLength'); // 받을 데이터의 키값을 명시

    // 마운트가 되면
    onMounted(() => {
        alert(itemLength());
    });
</script>

<template>

</template>

<style scoped>

</style>