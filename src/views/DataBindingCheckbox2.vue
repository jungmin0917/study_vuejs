<script setup>
    import {ref} from 'vue';

    const checked = ref([]); // 배열을 만들어 데이터 바인딩을 함
</script>

<template>
    <div>
        <label for="">서울</label>
        <input type="checkbox" value="서울" v-model="checked">
        <label for="">부산</label>
        <input type="checkbox" value="부산" v-model="checked">
        <label for="">제주</label>
        <input type="checkbox" value="제주" v-model="checked">

        <br>
        <span>체크한 지역 : {{ checked }}</span>
    </div>
</template>

<style scoped>

</style>