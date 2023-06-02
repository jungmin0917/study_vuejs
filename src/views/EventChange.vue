<script setup>
    import {ref} from "vue";

    const selectedValue = ref("");
    const inputValue = ref("엔터키");

    function changeSelect(){
        alert(selectedValue.value);
    }

    function test(){
        alert("엔터키 누름");
    }

    function combination(){
        alert("조합키 누름");
    }
</script>

<template>
    <div>
        <select v-model="selectedValue" @change="changeSelect()">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>

        <input @keyup.enter="test" :value="inputValue">
        <input @keyup.alt.enter="combination" placeholder="조합키 테스트 (alt + enter)">
        <input @click.ctrl="combination" placeholder="조합키 테스트 (ctrl + click)">
    </div>
</template>

<style scoped>

</style>