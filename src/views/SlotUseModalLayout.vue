<script setup>

    // 이 파일이 레이아웃의 해당 slot에 매핑할 요소를 작성하여 레이아웃을 이용해 렌더링하는 부분
    import SlotModalLayout from "@/views/SlotModalLayout.vue";

</script>

<template>
    <slot-modal-layout> <!-- 반드시 이 부분이 위의 import한 부분과 같아야 함 (또는 케밥케이스도 된다) -->
        <template v-slot:header>
            <h1>팝업 타이틀</h1>
        </template>

<!--    v:slot이 default인 것은 다른 v-slot에 매핑되지 않는 부분을 뜻한다.    -->
        <template v-slot:default>
            <p>팝업 컨텐츠 1</p>
            <p>팝업 컨텐츠 2</p>
        </template>

        <template v-slot:footer>
            <button type="button">닫기</button>
        </template>
    </slot-modal-layout>
</template>

<style scoped>

</style>