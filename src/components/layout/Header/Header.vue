<template>
  <section class="header" >
      <MyRouterLink v-for="(link, index) of links" :key="link-`${index}`" :item="link" />
      <div class="line" />
  </section>
</template>

<script setup lang="ts" >
import MyRouterLink from "@/components/atoms/MyRouterLink.vue";

const links = [
        {
            name: 'Персонажи',
            path: '/peoples'
        },
        {
            name: 'Избранное',
            path: '/favorites'
        }
      ]
</script>

<style scoped>
  .header {
      position: relative;
      width: 100%;
      max-width: 1440px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 20px;
      z-index: 20;
      background: var(--color-background);
  }

  .line {
      position: absolute;
      width: 100%;
      bottom: 0;
      height: 2px;
      background: var(--c-ghost);
  }
</style>