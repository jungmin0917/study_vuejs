<script setup>
    import {ref} from 'vue';

    // select 데이터 바인딩의 경우, select 태그에 v-model="변수명"으로 작성하고,
    // 해당 변수의 값을 option value 중 하나로 바인딩해준다.
    // 그러면 바인딩된 값의 option이 기본 선택되어 selected 상태로 렌더링된다.
    const city = ref('064');
</script>

<template>
    <div>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="051">부산</option>
            <option value="064">제주</option>
        </select>
    </div>
</template>

<style scoped>

</style>