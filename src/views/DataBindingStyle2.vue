<script setup>
    import {ref} from "vue";

    const baseStyle = ref("background-color:yellow;width:100%;height:200px;");
    const addStyle = ref("color:red;font-weight:bold;");
</script>

<template>
    <div :style="[baseStyle, addStyle]">인라인 스타일 바인딩</div>
</template>

<style scoped>

</style>