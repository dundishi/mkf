<template>
    <div id="app-shop">
        <div class="mui-card">
            <div class="mui-card-header">购物车
                <span><input type="checkbox" class="selectAll" v-model="selectAll" @change="isAllSelect">全选</span></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-for="item in list" :key="item.id">
                    <input type="checkbox" class="select" v-model="item.checked" @change="isChecked"> 
                    <p>{{item.title}}</p>
                    <p>¥{{item.price}}</p>
                    <div class="mui-numbox">
                        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub(item.id)">-</button>
                        <input class="mui-input-numbox" type="number" :value="item.count" />
                        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goAdd(item.id)">+</button>
                    </div>
                </div>
            </div>
            <div class="mui-card-footer">
                <span>
                    小计:共 {{getsubtotal}} 元
                </span>
                <span><button>立即购买</button></span>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                list:[],
                selectAll: false
            }
        },
        methods:{
             goSub(id) {
                for(var item of this.list){
                    if(item.id == id){
                        item.count--;
                        if(item.count<1){
                            return item.count = 1;
                        }
                    }
                } 
            },
            goAdd(id) {
                for(var item of this.list){
                    if(item.id == id){
                        item.count++;
                        if(item.count>99){
                            return item.count = 99;
                        }
                    }
                }
            },
            getCartInfo() {
                var url = 'http://127.0.0.1:3000/cartlist/list';
                this.axios.get(url).then(res=>{
                    this.list = res.data.msg;
                    for(var item of this.list){
                    item.checked = false
                }
                })
            },         
            isAllSelect() {
                for(var item of this.list){
                    item.checked = this.selectAll;
                }

            },
            isChecked() {
                var mid = true;
                for(var item of this.list){
                    mid = mid&&item.checked
                }
                this.selectAll = mid;
            }
        },
        created() {
            this.getCartInfo();

        },
        computed: {
            getsubtotal:function() {
                var sum = 0;
                for(var item of this.list){
                    sum += item.price * item.count; 
                }
                return sum;
            }
        }
    }
</script>
<style>
    #app-shop .mui-card-content .mui-card-content-inner{
        display: flex;
        justify-content: space-between;
    }
    #app-shop .mui-card-content .mui-card-content-inner .select{
        margin-top: 10px;
    }
    #app-shop .mui-card-content .mui-card-content-inner p{
        margin-top: 5px;
        font-size: 16px;
    }
    .mui-card-footer button{
        background: red;
        color: white;
        border-radius: 5px;
    }
    .mui-card-header .selectAll{
        margin: 5px 5px 0 0;
    }
</style>