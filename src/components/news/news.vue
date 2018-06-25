<template>
    <div id="news">
        <Table height='510' border stripe :columns="columns1" :data="data1"></Table>
    </div>
</template>
<script>
import common from './../../common/common.js'
export default {
    data () {
        return {
            columns1: [
                {
                    title:'Name',
                    key: 'name'
                },
                {
                    title: 'Created_at',
                    key: 'created_at'
                },
                {
                    title: 'Text',
                    key: 'text'
                },
                {
                    title: 'Playcount',
                    key: 'playcount'
                },
                {
                    title: 'User_id',
                    key: 'user_id'
                }
            ],
            data1: []
        }
    },
    mounted () {
        this.getnews();
    },
    methods: {
        getnews () {
            var url = common.apihttp + "/satinApi?type=1&page=1";
            this.$http.get(url).then((res) => {
                this.data1 = res.body.data;

            })
        },
    }
}
</script>
<style>

</style>