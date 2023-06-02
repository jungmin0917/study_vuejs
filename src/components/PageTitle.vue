<script setup>

    // Vue 3에서는 defineProps로 props를 사용하는데, 이는 자동으로 import가 되어서 굳이 import하지 않아도 된다.
    defineProps({
        title: {
            type: String,
            default: "페이지 제목입니다" // 부모 쪽에서 해당 데이터를 사용하지 않을 시 기본값
        }
    });

    // 위와 같이 정의된 프롭스(Props)는, 컴포넌트 내에서 데이터처럼 사용할 수 있다.
</script>

<template>
    <h2>{{ title }}</h2>
</template>

<style scoped>

</style>