<script setup>
import {onMounted, ref} from "vue";
    import ChildComponent3 from "@/views/ChildComponent3.vue";

    // 자식 컴포넌트를 참조하기 위해 반드시 이게 있어야 한다.
    const childComponent = ref(null);

    function changeChildData(){
        childComponent.value.msgmsg = "test";
    }

    // 아래와 같이 바로 접근하면 오류가 남 (마운트되기 전이라 null임)
    // console.log(childComponent.value.msgmsg);

    // childComponent.value.msgmsg.value처럼 value를 두 번 사용하면 오류가 난다.

    onMounted(() => {
        console.log(childComponent.value.msgmsg);
    });
</script>

<template>
    <div>
        <child-component3 ref="childComponent"/>
        <button type="button" @click="changeChildData">Change Child Data</button>


    </div>
</template>

<style scoped>

</style>