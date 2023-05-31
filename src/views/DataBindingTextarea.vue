<script setup>
    import {ref} from 'vue';

    const message = '여러 줄을 입력할 수 있는 textarea입니다';
</script>

<template>
    <div>
        <textarea v-model="message" cols="30" rows="10"></textarea>
    </div>
</template>

<style scoped>

</style>