<script setup>
    import {ref} from 'vue';

    const checked = ref(true);
    // 아래와 같이 설정 시, true-value가 yes이므로 당연히 checked가 안 된 상태일 것이다.
    // const checked2 = ref(true);
        const checked2 = ref('yes'); // 이렇게 초기값과 true-value로 설정해둔 값이 일치해야만 checked가 된 상태로 렌더링된다.
</script>

<template>
    <div>
        <label for="checkbox">{{ checked }}
            <input type="checkbox" id="checkbox" v-model="checked">
        </label>

        <label for="checkbox2">{{ checked2 }}
<!--        아래와 같이 체크/해제되었을 때의 기본값을 변경할 수 있다. label의 값과 상관없이 되는 듯?   -->
            <input type="checkbox" id="checkbox2" v-model="checked2" true-value="yes" false-value="no">
        </label>
    </div>
</template>

<style scoped>

</style>