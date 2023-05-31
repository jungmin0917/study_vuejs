<script setup>
    import {ref} from "vue";

    const type = ref("A");
    const bShow = ref(true);
    const bShow2 = ref(false);
</script>

<template>
    <div>
        <h1 v-if="type == 'A'">A</h1>
        <h1 v-else-if="type == 'B'">B</h1>
        <h1 v-else>C</h1>

        <h1 v-show="bShow">bShow가 true면, 현재 블록 화면이 보이게 됩니다.</h1>
        <h1 v-show="bShow2">bShow2가 true면, 현재 블록 화면이 보이게 됩니다.</h1>
    </div>
</template>

<style scoped>

</style>