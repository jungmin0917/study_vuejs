<script setup>

    // 데이터를 넘겨줄 부모

    import ProvideInjectChild from "@/views/ProvideInjectChild.vue";
    import {ref, provide} from "vue"; // 데이터를 넘겨주기 위한 provide 함수

    const items = ref(['A', 'B']);

    // 컴포지션 스타일에서는 provide 함수를 사용하여 데이터를 제공할 수 있다.
    // itemLength는 변수가 아니고 items.value.length를 반환하는 익명함수이다!
    // 그래서 자식 쪽에서 itemLength.value로 접근하는 게 아니고 itemLength()로 사용해야 한다.
    // provide는 주로 함수나 객체를 전달할 때 사용하지 변수를 전달하지는 않는다고 함. (가능은 함. 객체로 넘기면)
    provide('itemLength', () => {
        return items.value.length; // 반드시 return을 해야 함!
    });

</script>

<template>
    <provide-inject-child />
</template>

<style scoped>

</style>