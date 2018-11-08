<template>
    <div id="app-news">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <router-link :to="'/newsdetail/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>{{item.ctime | dateFormat}}</span>
                            <span>点击:{{item.click}} 次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
        <mt-button type="primary" size="large" @click="getMore">加载更多...</mt-button>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                list:[],
                pageIndex: 1  //页码
            }
        },
        methods:{
            getMore(){
                this.pageIndex++;
                var url = "http://127.0.0.1:3000/newslist/list?pno="+this.pageIndex;
                this.axios.get(url).then(res=>{
                    //this.list = res.data.msg.data
                    this.list = this.list.concat(res.data.msg.data)
                })
            },
            getNewsList() {
                var url = "http://127.0.0.1:3000/newslist/list";
                this.axios.get(url).then(res => {
                    this.list = res.data.msg.data
                }).catch(function(error){
                    console.log(error)
                })
            }
        },
        created() {
            this.getNewsList();
        }
    }
</script>
<style>
    #app-news .mui-table-view h1{
        font-size: 14px;
    }
    #app-news .mui-table-view .mui-media-body h1{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 75%;
    }
    #app-news .mui-table-view .mui-ellipsis{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }
</style>