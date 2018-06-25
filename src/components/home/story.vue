<template>
    <div id="story">
        <Row v-for="(item,index) in stroydata" :key='index'>
            <Col span="8">
            <img height="120" width="95%" :src="item.book_cover" alt="">
            </Col>
            <Col span="16">
            <p>小说类型: {{item.first_cate_name}}</p>
            <p>小说名字: {{item.bookname}}</p>
            <p>作者: {{item.author_name}}</p>
            <p>观看人数:{{item.recommend_num}}</p>
            </Col>
        </Row>
        <Spin size="large" fix v-if="spinShow">加载中</Spin>
    </div>
</template>
<script>
import common from './../../common/common.js'
export default {
    data () {
        return {
            stroydata: [],
            spinShow: true
        }
    },
    created () {
        this.getstoryData();
    },
    mounted () {

    },
    methods: {
        getstoryData () {
            const url = common.apihttp + "/novelApi";
            this.$http.get(url).then((res) => {
                this.stroydata = res.body.data;
                setTimeout(() => {
                    this.spinShow = false;
                }, 2000)
            })
        }
    }
}
</script>
<style>
#story {
    max-height: 600px;
    overflow: auto;
}

#story p {
    height: 30px;
    text-align: left;
    overflow: hidden;
}
</style>
