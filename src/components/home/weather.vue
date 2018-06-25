<template>
    <div id="weather">
        <p class="city">
            <span>当前城市天气:</span>
            <span id="cityname">{{cityname}}</span>
            <Select @on-change="change()" filterable v-model="model8" clearable size="small" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </p>
        <Table border="" :row-class-name="rowClassName" :columns="columns1" :data="data1"></Table>
        <Spin size="large" fix v-if="spinShow">加载中</Spin>
    </div>
</template>
<script>
import common from './../../common/common.js'
export default {
    data () {
        return {
            cityname: "深圳",
            columns1: [
                {
                    title: '日期',
                    key: 'date',
                    className: 'demo-table-info-column'
                },
                {
                    title: '最高温度',
                    key: 'high',
                    className: 'demo-table-info-column1'
                },
                {
                    title: '最低温度',
                    key: 'high',
                    className: 'demo-table-info-column2'
                },
                {
                    title: '风力',
                    key: 'fengli',
                    className: 'demo-table-info-column3'
                },
                {
                    title: '风向',
                    key: 'fengxiang',
                    className: 'demo-table-info-column4'
                }
            ],
            data1: [],
            cityList: [
                {
                    value: '深圳',
                    label: '深圳'
                },
                {
                    value: '北京',
                    label: '北京'
                },
                {
                    value: '上海',
                    label: '上海'
                },
                {
                    value: '广州',
                    label: '广州'
                }
            ],
            model8: "",
            spinShow: true
        }
    },
    methods: {
        getweather () {
            const url = common.apihttp + "/weatherApi?city=" + this.cityname;
            this.$http.get(url).then((res) => {
                this.data1 = res.body.data.forecast;
                setTimeout(() => {
                    this.spinShow = false;
                }, 1000)
            })
        },
        rowClassName (row, index) {
            // if (index === 0) {
            //     return 'demo-table-info-row';
            // } else if (index === 3) {
            //     return 'demo-table-error-row';
            // }
            // return '';
        },
        change () {
            this.cityname = this.model8;
            this.getweather();
        }

    },
    created () {
        this.getweather()
    },
    mounted () {
        this.$nextTick(function() {//组件挂载完之后
            document.getElementsByTagName("thead")[0].style.color = "#fff";
            var tha = document.getElementsByTagName("th");
            for (var i = 0; i < tha.length; i++) {
                tha[i].style.backgroundColor = "#2db7f5";
            };

        })
    }
}
</script>
<style>
.ivu-table .demo-table-info-row td {
    background-color: #2db7f5;
    color: #fff;
}

.ivu-table .demo-table-error-row td {
    background-color: #ff6600;
    color: #fff;
}

.ivu-table td.demo-table-info-column {
    background-color: #2db7f5;
    color: #fff;
}

.ivu-table td.demo-table-info-column1 {
    background-color: skyblue;
    color: #fff;
}

.ivu-table td.demo-table-info-column2 {
    background-color: #ff6600;
    color: #fff;
}

.ivu-table td.demo-table-info-column3 {
    background-color: green;
    color: #fff;
}

.ivu-table td.demo-table-info-column4 {
    background-color: darkcyan;
    color: #fff;
}

#weather .city {
    padding-top: 10px;
    height: 50px;
}
</style>
