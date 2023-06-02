<script setup>
    import ChildComponent5 from "@/views/ChildComponent5.vue";

    import {computed, ref} from "vue";

    // 부모 컴포넌트에서 자식 컴포넌트를 참조
    const childComponent = ref(null); // 자식 컴포넌트를 부른 태그에 적은 ref와 변수명이 같아야 함

    // 자식 컴포넌트의 msg를 받아 현재 컴포넌트의 msg로 사용함
    const msg = computed(() => {
        return childComponent.value.msg;
    });

    function checkChild(){
        alert(msg.value);
    }
</script>

<template>
    <div>
        <child-component5 ref="childComponent" />
        <button type="button" @click="checkChild()">
            자식 컴포넌트 데이터 조회
        </button>
    </div>
</template>

<style scoped>

</style>