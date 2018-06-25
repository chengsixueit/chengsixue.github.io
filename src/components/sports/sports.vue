<template>
    <div class='spd'>
        <div class="demo-avatar dsp" v-for="(item,index) in gifData" :key='index'>
            <Avatar :src="item.gif" />
            <p>用户：{{item.username}}</p>
            <p>评论：{{item.text}}</p>
            <p>time：{{item.passtime}}</p>
        </div>
    </div>
</template>
<script>
import common from './../../common/common.js'
export default {
    data () {
        return {
            gifData: []
        }
    },
    created () {
        this.getspData();
    },
    methods: {
        getspData () {
            const url = common.apihttp + "/satinGodApi?type=4&page=1";
            this.$http.get(url).then((res) => {
                this.gifData = res.body.data;
                console

            })
        }
    }
}
</script>
<style>
.dsp {
    display: inline-block;
    width: 25%;
    margin: 10px;
    border: 1px solid cornflowerblue;
}

.spd {
    max-height: 400px;
    overflow: auto;
}
</style>