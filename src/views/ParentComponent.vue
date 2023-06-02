<script setup>
    import ChildComponent from "@/views/ChildComponent.vue";
    import {ref, onMounted} from "vue";

    // 마운트 이후 바인딩 될 예정
    const childComponentRef = ref(null);

    // 컴포넌트가 마운트된 후 실행되는 함수
    onMounted(() => {
        childComponentRef.value.$refs.btn.click();
    });
</script>

<template>
    <child-component ref="childComponentRef"/>
</template>

<style scoped>

</style>