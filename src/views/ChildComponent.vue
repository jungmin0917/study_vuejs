<script setup>

    import {ref} from "vue";

    const btn = ref("btn");

    function childFunc(){
        alert("부모 컴포넌트에서 직접 발생시킨 이벤트");
    }

</script>

<template>
    <button type="button" @click="childFunc()" ref="btn">Click</button>
</template>

<style scoped>

</style>