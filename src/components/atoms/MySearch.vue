<template>
  <article class="search" >
      <label for="search" >Поиск</label>
      <input v-if="!storePeople.filterLeading" @input="storePeople.getFiltredCharacters(searchValue)" v-model="searchValue" id="search" />
      <div v-if="storePeople.filtredCharacters.length && !storePeople.filterLeading" class="search-droplist" >
          <router-link v-for="characters in storePeople.filtredCharacters" :key="characters.name" :to="`/peoples/${characters.url.slice(characters.url.lastIndexOf('e/') + 2, characters.url.length)}`">
              {{characters.name}}
          </router-link>
      </div>
  </article>
</template>

<script setup lang="ts" >
  import {ref} from "vue";
  import {usePeoplesStore} from "@/stores/peoples";
  const searchValue = ref('')

  const storePeople = usePeoplesStore()

</script>

<style scoped>
  .search {
      position: relative;
      display: flex;
      padding: 10px;
      gap: 15px;
  }
  .search-droplist {
      position: absolute;
      z-index: 10;
      width: 100%;
     top: 50px;

      background: var(--color-background);
      padding: 10px;
      gap:10px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
</style>