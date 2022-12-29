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

    </div>
    <div>
        <v-card class="mx-auto" max-width="800" style="height:15.5rem">
            <v-toolbar color="cyan-lighten-1">
                <v-toolbar-title>運営からの通知( {{ announce.length }} 件)</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <div style="height:24rem">
                <v-row>
                    <v-col>
                        <v-dialog transition="dialog-top-transition">
                            <template v-slot:activator="{ props }">
                                <v-data-table style="border: 1">
                                    <tr>
                                        <td style="width:30%">通知日</td>
                                        <td style="width:60%">概要</td>
                                        <td style="width:10%">確認</td>
                                    </tr>
                                    <tr v-for="item in announce">
                                        <td>{{ item.notification_date }}</td>
                                        <td> ・{{ item.title_text }}</td>
                                        <td><v-btn v-bind="props" color="#00529F"> 確認</v-btn></td>
                                    </tr>
                                </v-data-table>
                            </template>
                            <template v-slot:default="{ isActive }">
                                            <v-card style="width:50%;height:30%;margin:auto">
                                                <v-toolbar color="primary">運営からのメッセージ
                                                </v-toolbar>
                                                <v-card-text>
                                                    <div>111</div>
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
                <v-toolbar-title>通知一覧</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <div style="height:24rem">
                <v-row>
                    <v-col>
                        <v-dialog transition="dialog-top-transition">
                            <template v-slot:activator="{ props }">
                                <v-data-table style="border: 1;">
                                    <tr>
                                        <td style="width:20%">通知日</td>
                                        <td style="width:20%">対応期限</td>
                                        <td style="width:50%">概要</td>
                                        <td style="width:10%">確認</td>
                                    </tr>
                                    <tr v-for="item in nortification">
                                        <td>{{ item.notification_date }}</td>
                                        <td>{{ item.due_date }}</td>
                                        <td> ・{{ item.title_text }}</td>
                                        <td><v-btn v-bind="props" color="#00529F"> 確認</v-btn></td>
                                    </tr>
                                </v-data-table>
                            </template>
                            <template v-slot:default="{ isActive }">
                                <v-card style="width:50%;height:30%;margin:auto">
                                    <v-toolbar color="primary">1111</v-toolbar>
                                    <v-card-text>
                                        <div>111</div>
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
</template>
<script lang="ts">
import axios from 'axios'
export default {
    name: 'HomePageRight',
    data() {
        return {
            announce: [] as any,
            nortification: [] as any
        }
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