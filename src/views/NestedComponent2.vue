<script setup>

    import {ref} from "vue";
    import BlogPost from "@/components/BlogPost.vue";

    const likes = ref(40); // 숫자 40 지정
</script>

<template>
    <div>
<!--    케밥-케이스 방식으로 하는 것이 컨벤션에 부합함   -->
        <blog-post />
        <blog-post likes="42" />
        <blog-post :likes="41" />
        <blog-post :likes="likes" /> <!-- 현재 Vue 인스턴스 변수 likes 사용 -->
        <blog-post comment-ids="[234, 266, 273]"/> <!-- 문자열로 전달됨 -->
        <blog-post :comment-ids="[234, 266, 273]"/>
    </div>
</template>

<style scoped>

</style>