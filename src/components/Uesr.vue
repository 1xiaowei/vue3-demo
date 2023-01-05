<template>
    <div>
        <v-dialog transition="dialog-top-transition">
            <template v-slot:activator="{ props }">
                <!-- プレーンテーブルでコンテンツを表示する -->
                <v-table class="text-center">
                    <thead>
                        <tr color="#00529F">
                            <th class="text-left" style="width:15%">ユーザーNo</th>
                            <th class="text-left" style="width:15%">名前</th>
                            <th class="text-left" style="width:20%">読み仮名</th>
                            <th class="text-left" style="width:20%">所属</th>
                            <th class="text-left" style="width:10%">役職</th>
                            <th class="text-left" style="width:20%">権限</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in user">
                            <td class="text-left" style="width:15%">{{ item.user_id }}</td>
                            <td class="text-left" style="width:15%">{{ item.user_name }}</td>
                            <td class="text-left" style="width:20%">{{ item.user_name_kana }}</td>
                            <td class="text-left" style="width:20%">{{ item.user_department }}</td>
                            <td class="text-left" style="width:10%">{{ item.user_position }}</td>
                            <td class="text-left" style="width:20%">{{ item.user_permissions }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </template>
        </v-dialog>
        <div class="d-flex align-center justify-end text-center pt-2">
            <div class="d-flex">
                <span class="page_num_text">每页</span>
                <v-select class="search_itemsPerPage mx-1" v-model="itemsPerPage" :items="numbers" outlined @change="">
                    <template class="search_item" #item="{ item }">
                        <p>{{ item }}</p>
                    </template>
                </v-select>
                <span class="page_num_text">条记录</span>
            </div>
            <div class="text-center">
                <v-pagination v-if="Math.ceil(totalPage / itemsPerPage) > 1" class="pagination"  @next="right" @prev="left"
                    :length="Math.ceil(totalPage / itemsPerPage)" total-visible="7" :model-value="curPage"></v-pagination>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios'
export default {
    name: 'User',
    data() {
        return {
            user: [] as any,
            curPage: 1,
            totalPage: 0,
            list: [],
            itemsPerPage: 10,
            numbers: [10, 25, 50, 100],
        };
    },
    created() {
        this.getUsers();
    },
    methods: {
        right(){
            this.curPage++
            this.getUsers()
        },
        left(){
            this.curPage--
            this.getUsers()
        },
        update(val: any){
             this.curPage=val
             this.getUsers()
        },
        getUsers: function () {
            const vm = this;
            axios.get("/data/user.json")
                .then((response) => {
                    // console.log(response.data);
                    let results = response.data || [];
                    if (results && results.length > 0) {
                        this.totalPage = results.length;
                        vm.user = results.slice((this.curPage - 1) * this.itemsPerPage, this.curPage * this.itemsPerPage);
                        console.log(vm.user)
                    }
                }).catch(function (error) {
                    console.log(error);
                    vm.user = [];
                })
        },
        next: function (curPage: any) {
            this.curPage = curPage
            this.getUsers
        }
    }
}

</script>