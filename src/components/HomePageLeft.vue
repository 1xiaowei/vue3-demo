<template>
    　<v-card color="#00529F" class="mx-auto" max-width="300">
        <v-list  class="mx-auto" :items="items" ></v-list>
    </v-card>
</template>
  
<script lang='ts'>
export default {
    data: () => ({
        items: [
            {
                title: 'TOP',
                value: 1,
            },
            {
                title: 'ユーザー一覧',
                value: 2,
            },
        ],
    }),
}
</script>
<style>
</style>
  