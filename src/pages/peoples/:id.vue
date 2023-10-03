<template>
  <section v-if="storePeoples.singleCharacter.name" class="page" >
      <h1>{{storePeoples.singleCharacter.name}}</h1>
      <h4>Рост - {{storePeoples.singleCharacter.height}}</h4>
      <h4>Вес - {{storePeoples.singleCharacter.mass}}</h4>
      <h4>Цвет волос - {{storePeoples.singleCharacter.hair_color}}</h4>
      <h4>Цвет глаз - {{storePeoples.singleCharacter.eye_color}}</h4>
      <h4>Род - {{storePeoples.singleCharacter.gender}}</h4>
      <h4>Дата рождения - {{storePeoples.singleCharacter.birth_year}}</h4>
      <h1>Фильмы</h1>
      <h4 v-for="film in storePeoples.singleCharacter.films" :key="film" >
          {{film}}
      </h4>
      <button :class="favouriteCheck ? 'button-del' : 'button-add'" @click="changeFavourite()">{{favouriteCheck ? 'УБРАТЬ' : 'ДОБАВИТЬ'}}</button>
  </section>
  <section v-else class="page" >
     <h1>
          Ожидайте
      </h1>
    </section>
</template>

<script lang="ts" setup >
import {computed, onMounted} from "vue";
  import {useRoute} from "vue-router";
  import {usePeoplesStore} from "@/stores/peoples";

  const router = useRoute()

  const storePeoples = usePeoplesStore()

  const favouriteCheck = computed(() => {
      if ( storePeoples.favouriteCharacters ) {
          return storePeoples.favouriteCharacters.find( x => x.name === storePeoples.singleCharacter.name) !== undefined
      }
      else {
          return false
      }
  })

  const changeFavourite = () => {
      if (favouriteCheck.value) {
          storePeoples.deleteFavourite(storePeoples.singleCharacter)
      } else {
          storePeoples.addFavourite(storePeoples.singleCharacter)
      }
  }

  onMounted(() => {
      storePeoples.getSingleCharacter(router.params.id)
      storePeoples.getFavourites()
  })
</script>

<style scoped>
    button {
        margin: 20px 20px;
    }
</style>