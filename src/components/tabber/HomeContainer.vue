<template>
    <div id="app-homecontainer">
        <div class="mui-input-row mui-search">
            <input type="search" class="mui-input-clear" placeholder="搜索">
        </div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url" />
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodlist">
                    <img src="./menu1.png"/>
                    <div class="mui-media-body">聚划算</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/news">
                    <img src="./menu3.png"/>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/shopcart">
                    <img src="./menu2.png"/>
                    <div class="mui-media-body">购物车</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="./menu4.png"/>
                <div class="mui-media-body">充值中心</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/srarch">
                    <img src="./menu5.png"/>
                    <div class="mui-media-body">搜索</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="./menu6.png"/>
                <div class="mui-media-body">分类</div></a>
            </li>
        </ul> 
    </div>
</template>
<script>
    import swiper from '../subcomponents/swiper.vue';
    export default{
        data() {
            return {
                list:[]
            } 
        },
        methods:{
            getImageList(){
                //获取图片轮播数据
                var url = "http://127.0.0.1:3000/imagelist/list";
                this.axios.get(url).then(res => {
                    this.list = res.data.msg;
                }).catch(function(error){
                    console.log(error)
                })
            }
        },
        created() {
            this.getImageList();
        },
        components: {
            "swiper-box":swiper
        }
    }
</script>
<style>
    #app-homecontainer .mui-search{
        background:#ccc; 
    }
    #app-homecontainer .mui-search .mui-input-clear{
        margin: 0;
        background: white;
    }
    #app-homecontainer .mint-swipe{
       height: 200px; 
    }
    #app-homecontainer .mint-swipe-item img{
        width: 100%;
    }
    #app-homecontainer .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }
    #app-homecontainer .mui-grid-view.mui-grid-9 img{
        width: 60px;
        height: 60px;
    }
</style>