<template>
    <section class="page" >
        <h2>Все персонажи</h2>
        <MySearch/>
        <TableBoard :information="storePeoples.characters" />
    </section>
</template>

<script setup lang="ts" >
    import TableBoard from "@/components/table/TableBoard.vue";
    import {usePeoplesStore} from "@/stores/peoples";
    import MySearch from "@/components/atoms/MySearch.vue";

    const storePeoples = usePeoplesStore()
</script>

<style scoped>

</style>