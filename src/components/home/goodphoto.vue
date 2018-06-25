<template>
    <div id="photo">
        <div class="tupin">
            <Scroll class="vio" :on-reach-bottom="handleReachBottom1">
                <h1>美女图</h1>
                <Col id="dd" v-for="(item,index) in imgs" :key='index' span="7">
                <img height="200px" width="100%" :src="item.url" alt="">
                </Col>
            </Scroll>
        </div>
        <Spin size="large" fix v-if="spinShow">加载中</Spin>
    </div>
</template>
<script>
import common from './../../common/common.js'
export default {
    data () {
        return {
            imgs: [],
            page: 1,
            spinShow: true
        }
    },
    created () {
        this.getphotodata();
    },
    mounted () {

    },
    methods: {
        getphotodata () {
            const url = common.apihttp + "/meituApi?page=" + this.page;
            this.$http.get(url).then((res) => {
                setTimeout(() => {
                    this.spinShow = false;
                }, 2000)
                this.imgs = res.body.data;
            })
        },
        handleReachBottom1 () {
            this.spinShow = true;
            this.page += 1;
            console.log(this.page)
            this.getphotodata();
        }
    }

}
</script>
<style>
.tupin {
    max-height: 500px;
    width: 100%;
    overflow: auto;
}

#dd {
    margin-left: 3%;
}

.ivu-scroll-container {
    height: 500px !important;
    overflow: auto;
}
</style>