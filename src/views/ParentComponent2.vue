<script setup>
    import {onMounted, ref} from "vue";
    import ChildComponent2 from "@/views/ChildComponent2.vue";

    // 마운트 이후 바인딩 될 예정 (아래의 child-component2 태그의 ref명과 같아야 한다)
    // 그래야 자식 컴포넌트의 참조를 제대로 가져옴
    const childComponent2Ref = ref(null);

    // 컴포넌트가 마운트된 후 실행되는 함수
    onMounted(() => {
        childComponent2Ref.value.callFromParent();
    });
</script>

<template>
    <child-component2 ref="childComponent2Ref"/>
</template>

<style scoped>

</style>