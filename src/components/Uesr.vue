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
        <div class="text-center">
            <v-pagination v-if="Math.ceil(totalPage / limit) > 1" class="pagination" v-model="curPage"
                :length="Math.ceil(totalPage / limit)" total-visible="7" @input="next(curPage)"></v-pagination>
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
            limit: 10,
            totalPage: 0,
            list: []
            // headers: [
            //     {
            //         text: 'ユーザーNo',
            //         align: 'start',
            //         sortable: false,
            //         value: 'user_id',
            //     },
            //     { text: '名前', value: 'user_name' },
            //     { text: '読み仮名', value: 'user_name_kana' },
            //     { text: '所属', value: 'user_department' },
            //     { text: '役職', value: 'user_position' },
            //     { text: '権限', value: 'user_permissions' },
            // ],
            // desserts: []
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
                .then((response) => {
                    // console.log(response.data);
                    let results = response.data || [];
                    if (results && results.length > 0) {
                        this.totalPage = results.length;
                        vm.user = results.slice((this.curPage-1)*this.limit,this.curPage*this.limit);
                        console.log(vm.user)
                    }
                }).catch(function (error) {
                    console.log(error);
                    vm.user = [];
                })
        },
        next : function(curPage:any){
            this.curPage=curPage
        }
        // getData: function () {
        //     const vm = this;
        //     axios.get("/data/user.json").then(
        //         response => {
        //             console.log(response.data);
        //             vm.desserts = response.data;
        //         },
        //         error => {
        //             console.log(error);
        //         }
        //     );
    }
}

</script>