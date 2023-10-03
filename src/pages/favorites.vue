<template>
    <section class="page" >
        <h2>Избранные персонажи</h2>
        <TableBoard :information="storePeoples.favouriteCharacters" />
    </section>
</template>

<script setup lang="ts" >
import TableBoard from "@/components/table/TableBoard.vue";
import {usePeoplesStore} from "@/stores/peoples";

const storePeoples = usePeoplesStore()
</script>

<style scoped>

</style>