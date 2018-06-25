<template>
    <div id="video">
        <Scroll class="vio" :on-reach-bottom="handleReachBottom">
            <h2>短视频</h2>
            <Col class="mg" span="11" v-for="(item,index) in videoData" :key='index'>
            <video width="100%" height="200" controls :src="item.video">
            </video>
            <span>创建时间：{{item.passtime}}</span>
            </Col>
        </Scroll>
        <Spin size="large" fix v-if="spinShow">加载中</Spin>
    </div>
</template>
<script>
import common from './../../common/common.js'
export default {
    data () {
        return {
            videoData: [],
            list1: [1],
            page: 1,
            spinShow: true
        }
    },
    created () {
        this.getvideo()
    },
    mounted () {

    },
    methods: {
        getvideo () {
            const url = common.apihttp + "/satinGodApi?type=5&page=" + this.page;
            this.$http.get(url).then((res) => {
                this.videoData = res.body.data;
                setTimeout(() => {
                    this.spinShow = false;
                }, 2000)
            })
        },
        handleReachBottom () {
            this.page += 1;
            console.log(this.page)
            this.getvideo();
        }
    }
}
</script>
<style>
#video {
    max-height: 600px;
    overflow: auto;
}

.mg {
    margin-left: 3%;
}

.ivu-scroll-container {
    height: 500px !important;
    overflow: auto;
}
</style>