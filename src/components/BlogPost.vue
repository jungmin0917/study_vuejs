<script setup>

    defineProps({
        likes: {
            type: Number,
            default: 10
        },
        commentIds: {
            type: Array,
            default: [1, 2, 3]
        }
    });
</script>

<template>
    <h2>{{ likes }}</h2>
    <h2>{{ commentIds }}</h2>
</template>

<style scoped>

</style>