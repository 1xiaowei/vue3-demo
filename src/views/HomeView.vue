<template>
  <v-navigation-drawer v-if="isShow" color="#00529F" class="menus">
    <home-page-left @menus-click="menusClick" />
  </v-navigation-drawer>
  <v-navigation-drawer width="20px" color="#08009f" class="menus">
    <v-btn v-if="isShow" @click="menuShow" color="#08009f" elevation="2" x-small>◀</v-btn>
    <v-btn v-if="!isShow" @click="menuShow" color="#08009f" elevation="2" x-small>▶</v-btn>
  </v-navigation-drawer>
  <v-container class="right-style">
    <home-page-right :menu-select="menus" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

// Components
// import HelloWorld from '../components/HelloWorld.vue'
import HomePageLeft from '../components/HomePageLeft.vue'
import HomePageRight from "../components/HomePageRight.vue";

export default defineComponent({
  name: 'HomeView',

  components: {
    // HelloWorld,
    HomePageLeft,
    HomePageRight,
  },
  data: () => ({
    isShow: true,
  }),
  methods: {
    menuShow: function () {
      this.isShow = !this.isShow;
      return this.isShow;
    }
  },
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
