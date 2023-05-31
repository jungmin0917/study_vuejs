<script setup>
    import {ref} from "vue";

    const counter = ref(0); // 이렇게 선언하면 this로 접근할 수 있다

    // Vue 3의 컴포지션 API 방식으로는 그냥 여기에 사용할 함수를 나열하면 된다.
    function increaseCounter(){
        this.counter = this.counter + 1;
    }

    function setCounter(counter){
        this.counter = counter;
    }

    function one(){
        alert('One');
    }

    function two(){
        alert('Two');
    }

</script>

<template>
    <div>
        <button type="button" v-on:click="increaseCounter()">Add 1</button>
    </div>
</template>

<style scoped>

</style>







