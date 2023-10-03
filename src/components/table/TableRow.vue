<template>
  <tr v-if="row" >
      <td>{{row.name}}</td>
      <td>{{row.height}}</td>
      <td>{{row.mass}}</td>
      <td>{{row.hair_color}}</td>
      <td><button :class="favouriteCheck ? 'button-del' : 'button-add'" @click="changeFavourite()">{{favouriteCheck ? 'УБРАТЬ' : 'ДОБАВИТЬ'}}</button></td>
  </tr>
</template>

<script setup lang="ts" >
    import {usePeoplesStore} from "@/stores/peoples";
    import {computed} from "vue";

    const props = defineProps({
        row: {
            type: Object,
            default: () => {}
        }
    })

    const favouriteCheck = computed(() => {
        if ( storePeoples.favouriteCharacters ) {
            return storePeoples.favouriteCharacters.find( x => x.name === props.row.name) !== undefined
        }
        else {
            return false
        }
    })

    const changeFavourite = () => {
        if (favouriteCheck.value) {
            storePeoples.deleteFavourite(props.row)
        } else {
            console.log(props.row)
            storePeoples.addFavourite(props.row)
        }
    }

    const storePeoples = usePeoplesStore()
</script>

<style scoped>
td {
    font-size: 16px;
    border: 1px solid var(--c-ghost);
    padding: 8px;
}

button {
    width: 140px;
    padding: 5px;

    font-weight: 600;
    transition: 200ms ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
}

.button-del {
    background: #fff6f6;
    &:hover {
        background: #ffc2c2;
    }
}

.button-add {
    background: #f4ffed;
    &:hover {
        background: #d4ffa2;
    }
}
</style>