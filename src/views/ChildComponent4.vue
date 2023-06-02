<script setup>
    import {onMounted, ref, defineEmits} from "vue";

    // 이벤트를 보내면서 사용할 데이터를 설정함
    const msg = ref("자식 컴포넌트로부터 보내는 메세지");

    // 컴포넌트 내부에서 이벤트를 발생시키기 위한 이벤트 이름들을 설정하는 역할을 함 (실제 이벤트 핸들러 함수의 구현은 이 컴포넌트를 불러서 쓰는 부모 컴포넌트 쪽에서 구현해야 함)
    const emit = defineEmits(['send-message']);

    // 마운트되면 부모 컴포넌트에게 위에서 지정한 이벤트 핸들러 이름과 그에 대한 이벤트 데이터를 전달함.
    onMounted(() => {
        emit('send-message', msg.value);
    });
</script>

<template>

</template>

<style scoped>

</style>