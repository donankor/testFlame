<template>
  <RouterLink :class="active ? 'link-active' : 'link-default'" class="link" :to="item.path">
      {{item.name}}
  </RouterLink>
</template>

<script setup lang="ts" >
  import {computed} from "vue";
  import {useRoute} from "vue-router";

  const route = useRoute()

  const props = defineProps({
      item: {
          type: Object,
          default: () => {}
      }
  })

  const active = computed(() => {
      return props.item.path === route.fullPath
  })
</script>

<style scoped>
  .link {
      padding: 4px 25px;
      font-size: 18px;

      outline: 1px solid var(--c-ghost);
      border-radius: 15px;

      transition: 200ms ease-in-out;
  }
  .link-active {
      outline: 1px solid var(--c-main);
      background: var(--c-ghost);
  }
</style>