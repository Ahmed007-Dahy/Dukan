<script setup lang="ts">
import HomePage from "~/pages/HomePage.vue";

useHead({
    htmlAttrs: {
        lang: "en",
    },
    title: "Dukan",
    meta: [{ name: "Dukan HomePage", content: "My amazing site." }],
});
</script>

<template>
    <HomePage />
</template>
