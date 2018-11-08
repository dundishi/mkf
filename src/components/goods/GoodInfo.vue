<template>
    <div id="app-shop">
        <!--商品轮播区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item v-for="item in list" :key="item.id">
                            <img :src="item.md" />
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
            </div>
        </div>
        <!--商品购买区域-->
        <div class="mui-card" v-for="items in info" :key="items.id+'-lable'">
            <div class="mui-card-header">{{items.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        <span class="now">热卖价: ¥{{items.nowPrice}}</span>
                        <span class="old">市场价: ¥<del>{{items.oldPrice}}</del></span>
                    </p>
                    <p>
                        已售: {{items.sold_count}}件
                    </p>
                    <p>
                        运费: {{items.freight}}元
                    </p>
                    购买数量:
                    <div class="mui-numbox">
                        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub">-</button>
                        <input class="mui-input-numbox" type="number" value="1" v-model="num"/>
                        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goAdd">+</button>
                    </div>
                </div>
                <div class="mui-card-footer"> 
                    <p>
                        <mt-button type="danger" size="small">立即购买</mt-button>
                        <mt-button type="primary" size="small">加入购物</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <!--商品参数区域-->
        <div class="mui-card" v-for="item in info" :key="item.id">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>品牌: {{item.brand}}</p>
                    <p v-show="item.product_code">商家货号: {{item.product_code}}</p>
                    <p>类型: {{item.category}}</p>
                    <p v-show="item.scope">适用范围: {{item.scope}}</p>
                    <p>产地: {{item.place}}</p>
                    <p>毛重: {{item.product_weight}}kg</p>
                </div>
            </div>
            <div class="mui-card-footer"></div>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                id: this.$route.params.id,
                list: [],
                info:[],
                num: 1
            }
        },
        methods: {
            goSub() {
                this.num--;
                if(this.num<1){
                    return this.num = 1;
                }
            },
            goAdd() {
                this.num++;
                if(this.num>99){
                    return this.num = 99;
                }
            },
            getPicture(){
                var url="http://127.0.0.1:3000/goodlist/pic?gid="+this.id;
                this.axios.get(url).then(result=>{
                    this.list = result.data.msg;
                })
            } ,
            getGoodInfo() {
                var url = "http://127.0.0.1:3000/goodlist/info?id="+this.id;
                this.axios.get(url).then(result=>{
                    this.info = result.data.msg;
                })
            }
        },
        created() {
            this.getPicture();
            this.getGoodInfo();
        }
    }
</script>
<style>
    #app-shop .mint-swipe{
        height: 200px;
    } 
    #app-shop .mint-swipe .mint-swipt-item{
        text-align: center;
    }
    #app-shop .mint-swipe-item img{
        width: 100%;
    }
    #app-shop .mui-card .mui-card-content .price .now{
        font-size: 18px;
        color: red;
        margin-right: 20px;
    }
    #app-shop .mui-card-content .mui-card-content-inner{
        flex-direction: column
    }
</style>