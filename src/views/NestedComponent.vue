<script setup>

    import {ref} from "vue";
    import PageTitle from "@/components/PageTitle.vue";

    const title = ref("이것은 제목이지롱");
    const title2 = ref("이것은 두번째입니다");
</script>

<template>
    <div>
        <PageTitle :title="title"/>
        <PageTitle :title="title2"/>
    </div>
</template>

<style scoped>

</style>