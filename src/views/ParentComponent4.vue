<script setup>

    import ChildComponent4 from "@/views/ChildComponent4.vue";

    import {ref} from "vue";

    const msg = ref("");

    function sendMessage(data){
        msg.value = data;

        console.log(data);
    }
</script>

<template>
    <div>
        <child-component4 @send-message="sendMessage" />
        <h1>{{ msg }}</h1>
    </div>
</template>

<style scoped>

</style>