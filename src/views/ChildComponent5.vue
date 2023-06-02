<script setup>
    import {ref} from "vue";

    const msg = ref("메시지");

    function childFunc(){
        msg.value = "변경된 메시지";
    }

    defineExpose({
        msg,
    });
</script>

<template>
    <button type="button" @click="childFunc()" ref="btn">자식 컴포넌트 데이터 변경</button>
</template>

<style scoped>

</style>