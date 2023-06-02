<script setup>
    import {ref} from "vue";

    // 변수를 반응형으로 설정
    const msgmsg = ref("1");

    // 변수를 다른
    defineExpose({
        msgmsg,
    });
</script>

<template>
    <h1>{{ msgmsg }}</h1>
</template>

<style scoped>

</style>