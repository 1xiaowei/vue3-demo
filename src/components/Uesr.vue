<template>
    <div>
        <v-card class="mx-auto" max-width="800" style="height:30rem">
            <div style="height:24rem">
                <v-row>
                    <v-col>
                        <v-dialog transition="dialog-top-transition">
                            <template v-slot:activator="{ props }">
                                <!-- プレーンテーブルでコンテンツを表示する -->
                                <thead>
                                    <tr color="#00529F">
                                        <th style="width:15%">ユーザーNo</th>
                                        <th style="width:15%">名前</th>
                                        <th style="width:20%">読み仮名</th>
                                        <th style="width:20%">所属</th>
                                        <th style="width:10%">役職</th>
                                        <th style="width:20%">権限</th>
                                    </tr>
                                    <tr v-for="item in user">
                                        <td style="width:15%">{{ item.user_id }}</td>
                                        <td style="width:15%">{{ item.user_name }}</td>
                                        <td style="width:20%">{{ item.user_name_kana }}</td>
                                        <td style="width:20%">{{ item.user_department }}</td>
                                        <td style="width:10%">{{ item.user_position }}</td>
                                        <td style="width:20%">{{ item.user_permissions }}</td>
                                    </tr>
                                </thead>
                                <!-- v-data-tableでコンテンツを表示する -->
                                <v-data-table :headers="headers" :items="desserts" :items-per-page="5"
                                    class="elevation-1"></v-data-table>
                            </template>
                        </v-dialog>
                    </v-col>
                </v-row>
            </div>
        </v-card>
    </div>
</template>

<script lang="ts">
import axios from 'axios'
export default {
    name: 'User',
    data() {
        return {
            user: [] as any,
            headers: [
          {
            text: 'ユーザーNo',
            align: 'start',
            sortable: false,
            value: 'user_id',
          },
          { text: '名前', value: 'user_name' },
          { text: '読み仮名', value: 'user_name_kana' },
          { text: '所属', value: 'user_department' },
          { text: '役職', value: 'user_position' },
          { text: '権限', value: 'user_permissions' },
        ],
        desserts: []
        };
    },
    created() {
        this.getUsers();
        // this.getData();
    },
    methods: {
        getUsers: function () {
            const vm = this;
            axios.get("/data/user.json")
                .then(function (response) {
                    console.log(response.data);
                    let results = response.data || [];
                    if (results && results.length > 0) {
                        vm.user = results;
                    }
                }).catch(function (error) {
                    console.log(error);
                    vm.user = [];
                })
        },
        getData: function(){
            const vm = this;
            axios.get("/data/user.json").then(
        response => {
          console.log(response.data);
          vm.desserts = response.data;
        },
        error => {  
          console.log(error);
        }
      );
        }
    }
}
</script>