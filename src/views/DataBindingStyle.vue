<script setup>
    import {ref} from "vue";

    const styleObject = ref({
        color: 'red',
        fontSize: '24px'
    });
</script>

<template>
    <div :style="styleObject">인라인 스타일 바인딩</div>
</template>

<style scoped>

</style>