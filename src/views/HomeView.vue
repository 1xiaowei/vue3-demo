<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" color="#00529F" class="menus" app>
      <home-page-left @menus-click="menusClick" />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Vue Demo</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <home-page-right :menu-select="menus" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import HomePageLeft from '../components/HomePageLeft.vue'
import HomePageRight from "../components/HomePageRight.vue";

export default defineComponent({
  name: 'HomeView',

  components: {
    HomePageLeft,
    HomePageRight,
  },
  data: () => ({
    drawer: true
  }),
  setup() {
    let menus = ref(1)
    function menusClick(data: any) {
      menus.value = data
    }
    return {
      menus,
      menusClick,
    }
  },
}
);
</script>
<style>

</style>
