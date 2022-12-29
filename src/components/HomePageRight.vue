<template>
    <div class="header" style="height: 40px;">
        <div class="">
           <p></p> 
           <v-card color="#009f55" class="mx-auto" width="800">
           <v-btn color="#009f55">通知一覧画面</v-btn>
           </v-card>
        </div>
    </div>
    <div>
      <v-card
        class="mx-auto"
         max-width="800"
         style="height:15.5rem"
      >
        <v-toolbar color="cyan-lighten-1">
        <v-toolbar-title>運営からの通知</v-toolbar-title>
        <v-spacer></v-spacer>
        </v-toolbar>
        <div style="height:24rem">
          <v-row>
            <v-col>
              <v-dialog
                transition="dialog-top-transition"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    style="width:90%"
                  >1111</v-btn>
                  <v-btn
                    v-bind="props"
                    style="width:10%"
                    color="#00529F"> 確認</v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card style="width:50%;height:30%;margin:auto">
                    <v-toolbar
                      color="primary"
                    >1111</v-toolbar>
                    <v-card-text>
                      <div>111</div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn
                        variant="text"
                        @click="isActive.value = false"
                      >戻る</v-btn>
                    </v-card-actions>
                  </v-card>
    
                </template>
              </v-dialog>
            </v-col>
          </v-row>
        </div>
        </v-card>
        <v-card
        class="mx-auto"
         max-width="800"
         style="height:20rem"
      >
        <v-toolbar color="cyan-lighten-1">
        <v-toolbar-title>通知一覧</v-toolbar-title>
        <v-spacer></v-spacer>
        </v-toolbar>
        <div style="height:24rem">
          <v-row>
            <v-col>
              <v-dialog
                transition="dialog-top-transition"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    style="width:90%"
                  >1111</v-btn>
                  <v-btn
                    v-bind="props"
                    style="width:10%"
                    color="#00529F"> 確認</v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card style="width:50%;height:30%;margin:auto">
                    <v-toolbar
                      color="primary"
                    >1111</v-toolbar>
                    <v-card-text>
                      <div>111</div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn
                        variant="text"
                        @click="isActive.value = false"
                      >戻る</v-btn>
                    </v-card-actions>
                  </v-card>
    
                </template>
              </v-dialog>
            </v-col>
          </v-row>
        </div>
        </v-card>
    </div>
</template>
<style>
</style>