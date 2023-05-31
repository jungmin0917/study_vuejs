<script setup>
    import {ref} from 'vue';

    const picked = ref('');
    const radioValue1 = ref("서울");
    const radioValue2 = ref("부산");
    const radioValue3 = ref("제주");

    // 이렇게 구성하면, picked 변수에 현재 선택된 radio의 value값이 들어가고,
    // 그 value값과 picked값이 같을 경우에 해당 라디오버튼이 활성화된다.
</script>

<template>
    <div>
        <label for="radio1">서울</label>
        <input type="radio" id="radio1" :value="radioValue1" v-model="picked">
        <label for="radio2">부산</label>
        <input type="radio" id="radio2" :value="radioValue2" v-model="picked">
        <label for="radio3">제주</label>
        <input type="radio" id="radio3" :value="radioValue3" v-model="picked">

        <br>
        <span>선택한 지역 : {{ picked }}</span>
    </div>
</template>

<style scoped>

</style>