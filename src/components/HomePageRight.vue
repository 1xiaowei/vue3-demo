<template>
    <div v-if="menuSelect === 1">
        <v-card class="mx-auto" max-width="800" style="height:15.5rem">
            <v-toolbar color="cyan-lighten-1">
                <v-toolbar-title>運営からの通知( {{ announce.length }} 件)</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <div style="height:24rem">
                <v-row>
                    <v-col>
                            <thead class="text-center">
                                    <tr>
                                        <th style="width:30%">通知日</th>
                                        <th style="width:60%">概要</th>
                                        <th style="width:10%">確認</th>
                                    </tr>
                             </thead>
                             <v-dialog transition="dialog-top-transition" v-for="item in announce">
                            <template v-slot:activator="{ props }">
                                <tbody class="text-center" >
                                    <tr>
                                        <td style="width:30%">{{ item.notification_date }}</td>
                                        <td style="width:60%"> ・{{ item.title_text }}</td>
                                        <td style="width:10%"><v-btn v-bind="props" color="#00529F"> 確認</v-btn></td>
                                    </tr>
                                </tbody>
                            </template>
                            <template v-slot:default="{ isActive }">
                                <v-card style="width:50%;height:50%;margin:auto">
                                    <v-toolbar color="primary">運営からのメッセージ: <br>
                                        {{ item.notification_date }}  {{ item.title_text }}
                                    </v-toolbar>
                                    <v-card-text>
                                        <div style='white-space:pre-line;'><span>{{ item.body_text }}</span></div>
                                    </v-card-text>
                                    <v-card-actions class="justify-end">
                                        <v-btn variant="text" @click="isActive.value = false">戻る</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </v-col>
                </v-row>
            </div>
        </v-card>
        <v-card class="mx-auto" max-width="800" style="height:20rem">
            <v-toolbar color="cyan-lighten-1">
                <v-toolbar-title>通知一覧( {{ nortification.length }} 件)</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <div style="height:24rem">
                <v-row>
                    <v-col>
                        <thead class="text-center">
                                    <tr>
                                        <th style="width:25%">通知日</th>
                                        <th style="width:25%">対応期限</th>
                                        <th style="width:40%">概要</th>
                                        <th style="width:10%">確認</th>
                                    </tr>
                         </thead> 
                        <v-dialog transition="dialog-top-transition" v-for="item in nortification">
                            <template v-slot:activator="{ props }">                                    
                                    <tr>
                                        <td style="width:25%">{{ item.notification_date }}</td>
                                        <td style="width:25%">{{ item.due_date }}</td>
                                        <td style="width:40%"> ・{{ item.title_text }}</td>
                                        <td style="width:10%"><v-btn v-bind="props" color="#00529F"> 確認</v-btn></td>
                                    </tr>
                            </template>
                            <template v-slot:default="{ isActive }">
                                <v-card style="width:50%;height:30%;margin:auto">
                                    <v-toolbar color="primary">通知: <br>
                                        {{ item.notification_date }}  {{  item.title_text  }}
                                    </v-toolbar>
                                    <v-card-text>
                                        <div>{{ item.body_text }}</div>
                                    </v-card-text>
                                    <v-card-actions class="justify-end">
                                        <v-btn variant="text" @click="isActive.value = false">戻る</v-btn>
                                    </v-card-actions>
                                </v-card>

                            </template>
                        </v-dialog>
                    </v-col>
                </v-row>
            </div>
        </v-card>
    </div>
    <div v-if="menuSelect === 2">
        <user />
    </div>
</template>
<script lang="ts">
import axios from 'axios'
import User from "../components/Uesr.vue"
export default {
    name: 'HomePageRight',
    data() {
        return {
            announce: [] as any,
            nortification: [] as any
        }
    },
    components: {
        User,
    },
    props: {
        menuSelect: Number
    },
    created() {
        this.getAnnounces();
        this.getNortifications();
    },
    methods: {
        getAnnounces: function () {
            const vm = this;
            axios.get("/data/announce.json")
                .then(function (response) {
                    console.log(response.data);
                    let results = response.data || [];
                    if (results && results.length > 0) {
                        vm.announce = results;
                    }
                }).catch(function (error) {
                    console.log(error);
                    vm.announce = [];
                })
        },
        getNortifications: function () {
            const vm = this;
            axios.get("/data/nortification.json")
                .then(function (response) {
                    console.log(response.data);
                    let results = response.data || [];
                    if (results && results.length > 0) {
                        vm.nortification = results;
                    }
                }).catch(function (error) {
                    console.log(error);
                    vm.nortification = [];
                })
        }
    }
}

// axios.get("/data/nortification.json").then((res1) => {
//     console.log(res1);
// });
</script>
<style>

</style>