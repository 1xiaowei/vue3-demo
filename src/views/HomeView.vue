<template>
  <v-navigation-drawer class="menus">
      <home-page-left
      />
    </v-navigation-drawer>
    <v-container class="right-style">
      <home-page-right
      />
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
// import HelloWorld from '../components/HelloWorld.vue'
import HomePageLeft from '../components/HomePageLeft.vue'
// import HomePageRight from "../components/HomePageRight.vue";

export default defineComponent({
  name: 'HomeView',

  components: {
    // HelloWorld,
    HomePageLeft,
    // HomePageRight,
  },
});
</script>
<style>
.menus{
  background-color: #00529F;
}
</style>
