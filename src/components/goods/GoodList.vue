<template>
    <div id="app-goodslist">
        <div class="app-goods-item" v-for="item in list" :key="item.id"  @click="getDetail(item.id)">
            <img :src="item.img_url"/>
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥{{item.nowPrice}}</span>
                    <span class="old">¥{{item.oldPrice}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.sold_count}}件</span>
                </p>
            </div>
        </div>
        <mt-button type="primary" size="large" @click="getMore">加载更多...</mt-button>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                list:[],
                pageIndex: 1
            }
        },
        methods:{ 
            getDetail(id) {
                this.$router.push({path:"/home/goodinfo/"+id})
            },
            getMore(){
                this.pageIndex++;
                var url = "http://127.0.0.1:3000/goodlist/list?pno="+this.pageIndex;
                this.axios.get(url).then(res=>{
                    this.list = this.list.concat(res.data.msg);
                })
            },
            getGoodList() {
                var url = "http://127.0.0.1:3000/goodlist/list"
                this.axios.get(url).then(result=>{
                    this.list = result.data.msg;
                })
            }           
        },
        created() {
            this.getGoodList();
        }
    }
</script>
<style>
    #app-goodslist{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        border: 1px solid red;
    }
    #app-goodslist .app-goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow:0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
    }
    #app-goodslist .app-goods-item img{
        width: 100%;
        padding: 5px;
    }
    #app-goodslist .app-goods-item .title{
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 80%;
    }
    #app-goodslist .app-goods-item .info p{
        margin: 0;
        padding: 5px;
    }
    #app-goodslist .app-goods-item .info .price .now{
        color: red;
        font-weight: bold;
        font-size: 16px;
    }
    #app-goodslist .app-goods-item .info .price .old{
        font-size: 12px;
        text-decoration:line-through;
    }
    #app-goodslist .app-goods-item .info .sell{
        display: flex;
        font-size: 12px;
        justify-content: space-between;
    }
</style>