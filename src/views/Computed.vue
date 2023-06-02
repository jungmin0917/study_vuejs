<script setup>
    import {ref, computed} from "vue";

    const firstName = ref("Jungmin");
    const lastName = ref("Hwang");

    // 아래의 () => { }; 이건 익명함수라는 뜻
    // 익명함수를 fullName이라는 변수에 담음
    // const getFullName = () => {
    //     return firstName.value + ' ' + lastName.value;
    // };
    //
    // const fullName = computed(getFullName);

    const fullName = computed(() => {
        return firstName.value + ' ' + lastName.value;
    });
    // 위에 정의된 데이터 중 하나라도 바뀌면, computed로 감싸진 함수들이 실행된다.

</script>

<template>
    <div>
        <h1>Full Name : {{ fullName }}</h1>

        <br><br>
        <input type="text" v-model="lastName">
        <input type="text" v-model="firstName">
    </div>
</template>

<style scoped>

</style>