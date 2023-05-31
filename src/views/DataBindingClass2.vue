<script setup>
    import {ref} from "vue";

    const activeClass = 'active';
    const errorClass = 'text-red';

    // 이번엔 Boolean 형태로 조건문이 아닌 그냥 배열 형태로 추가하고 싶은 거 추가할 때 사용
</script>

<template>
    <div class="container" :class="[activeClass, errorClass]">Class Binding</div>
</template>

<style scoped>
    .container {
        width: 100%;
        height: 200px;
    }

    .active {
        background-color: yellow;
        font-weight: bold;
    }

    .text-red {
        color: red;
    }
</style>