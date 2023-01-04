<template>
    　<v-card style="max-width=300;" color='#00529F' class="mx-auto">
        <v-list  class="mx-auto">
        <v-list-item value="1" @click="menusClick(1)">TOP</v-list-item>
        <v-list-item value="2" @click="menusClick(2)">ユーザー一覧</v-list-item>
        </v-list>
    </v-card>
</template>
  
<script lang='ts'>
export default {
    name: 'HomePageLeft',
    data: () => ({
    }),
    setup(props,{emit}){
        function menusClick(data: any){
        emit('menusClick',data)
      }
    return{
        menusClick,
    }
 },

}
</script>
<style>

</style>
  