<template>
    <table>
        <tr>
            <th>Имя</th>
            <th>Рост</th>
            <th>Вес</th>
            <th>Цвет Волос</th>
            <th>Добавить / Убрать из избранного</th>
        </tr>

        <TableRow v-for="(row, index) in information" :key="`table-row-${index}`" :row="row" />
    </table>
</template>

<script setup lang="ts" >
    import TableRow from "@/components/table/TableRow.vue";

    const props = defineProps({
        information: {
            type:Array,
            default: () => []
        }
    })
</script>

<style scoped>
  table {
      width: 90%;
      border: 1px solid var(--c-ghost);
      margin: 20px 0;
      border-collapse: collapse;
      text-align: center;
  }

  th {
      font-size: 18px;
      font-weight: 600;
      padding: 5px;
      border: 1px solid white;
  }

</style>