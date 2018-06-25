<template>
    <div id="home">
        <div>
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,index) in lobData" :key='index'>
                    <img :src="item.url" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div>
            <div class="demo-avatar cmd">
                <router-link to="/weather">
                    <img class="img" src="./../../assets/天气.png" alt="">
                    <p>天气</p>
                </router-link>
            </div>
            <div class="demo-avatar cmd">
                <router-link to="/story">
                    <img class="img" src="./../../assets/图标1_书、小说.png" alt="">
                    <p>小说</p>
                </router-link>
            </div>
            <div class="demo-avatar cmd">
                <router-link to="/goodphoto">
                    <img class="img" src="./../../assets/美图-01.png" alt="">
                    <p>美图</p>
                </router-link>
            </div>
            <div class="demo-avatar cmd">
                <router-link to="/video">
                    <img class="img" src="./../../assets/美图-01.png" alt="">
                    <p>视频</p>
                </router-link>
            </div>
            <div class="demo-avatar cmd">
                <router-link to="">
                    <img class="img" src="./../../assets/评论.png" alt="">
                    <p>评论</p>
                </router-link>
            </div>
            <div class="demo-avatar cmd">
                <router-link to="">
                    <img class="img" src="./../../assets/开心 笑脸 表情.png" alt="">
                    <p>开心一笑</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import common from './../../common/common.js'
export default {
    data () {
        return {
            lobData: [],
        }
    },
    created () {
        this.getdata();
    },
    methods: {
        getdata () {
            const url = common.apihttp + "/meituApi?page=1";
            this.$http.get(url).then((res) => {
                this.lobData = res.body.data.slice(5, 10);
            })
        }
    }
}
</script>
<style>
.mint-swipe {
    height: 250px;
    width: 100%;
}

.cmd {
    display: inline-block;
    width: 25%;
    margin: 10px;
}

.img {
    width: 50px;
    height: 50px;
}
</style>
