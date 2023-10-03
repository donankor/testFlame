<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import Header from "@/components/layout/Header/Header.vue";
    import {onMounted} from "vue";
    import {usePeoplesStore} from "@/stores/peoples";

    const storePeoples = usePeoplesStore()

    onMounted(() => {
        storePeoples.getCharacters()
        storePeoples.getFavourites()
    })
</script>

<template>
    <div class="app" >
        <Header/>
        <RouterView />
    </div>
</template>

<style scoped>
.app {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
