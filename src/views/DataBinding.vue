<!--<script>
    export default{
        data(){
            return{
                title: 'World';
            };
        }
    }
</script>-->
<!-- 위의 방법은 Vue 2의 방법이다 -->

<!-- 아래의 방법은 Vue 3의 방법이다 (Composition API) -->
<script setup>

import {ref} from 'vue';

const title = ref('World!');

</script>

<template>
    <h1>Hello, {{ title }}</h1>
</template>

<style scoped>

</style>