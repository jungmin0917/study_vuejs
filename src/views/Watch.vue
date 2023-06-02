<script setup>
    import {ref, watch} from "vue";

    const firstName = ref("Jungmin");
    const lastName = ref("Hwang");
    const fullName = ref("");

    // 첫 번째 인자로 감시할 데이터의 배열을 전달하고, 두 번째 인자로 변경이 감지될 때 실행될 콜백 함수를 전달한다.
    watch([firstName, lastName], () => {
        fullName.value = `${firstName.value} ${lastName.value}`;
    });

    function changeName(){
        firstName.value = "Jungmin2";
    }

</script>

<template>
    <div>
        <h1>Full Name : {{ fullName }}</h1>
        <button type="button" @click="changeName()">변경</button>

        <br>
        <input type="text" v-model="firstName">
        <input type="text" v-model="lastName">
    </div>
</template>

<style scoped>

</style>