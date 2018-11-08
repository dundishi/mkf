<template>
    <div id="app_comment">
        <div class="title">
            <h1>评论内容</h1>
            <span @click="getCommentList" v-show="pageCount>pageIndex">查看更多</span>
        </div>
        <hr />
        <ul class="cmt-list">
            <li v-for="item in list">
                <img :src="item.avatar" class="avatar">
                <div class="info">
                    <div class="cmt-list-item">
                        <span class="name">{{item.username}}</span>
                        <span class="click"><i></i>{{item.click}}</span>
                    </div>
                    <div class="cmt-body">
                        {{item.content}}
                    </div>
                    <div class="time">
                        {{item.ctime | dateFormat}}
                    </div>
                </div>
            </li>
        </ul>
        <textarea placeholder="请输入评论的内容(最多吐槽250字)" maxlength="250" v-model="msg"></textarea>
        <mt-button size="large" type="primary" @click="postComment">发表评论</mt-button>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default{
        data() {
            return {
                list:[],
                msg:"",
                pageIndex:0,
                pageCount:0
            }
        },
        methods: {
            getCommentList() {
                this.pageIndex++;
                var url="http://127.0.0.1:3000/newslist/commentlist?nid="+this.id+"&pno="+this.pageIndex;
                this.axios.get(url).then(res=>{
                    this.list = this.list.concat(res.data.data);
                    this.pageCount = res.data.pageCount;
                })
            },
            postComment() {
                var username = "译者";
                var nid = this.id;
                var content = this.msg;
                var url = "http://127.0.0.1:3000/newslist/saveComment";
                var obj = this.qs.stringify({nid:nid,content:content,username:username});
                this.axios.post(url,obj)
                .then(result=>{
                    if(result.data.code == 1){
                        this.msg = "";
                        Toast(result.data.msg);
                        this.pageIndex = 0;
                        this.list = [];
                        this.getCommentList();  
                    }else{
                        Toast(result.data.msg);
                    }
                })
            }
        },
        created() {
            this.getCommentList();
        },
        props:["id"]   //接收父组件传递的参数
    }
</script>
<style>
    #app_comment .title{
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0 5px;
    }
    #app_comment .title h1{
        margin-top: 30px;
        padding-left: 10px;
        font-size: 15px;
    }
    #app_comment .title span{
        margin-top: 30px;
    }
    #app_comment .cmt-list{
        list-style:none;
        padding-left: 10px;
    }
    #app_comment .cmt-list li{
        position: relative;
        padding-top: 5px;
        margin-bottom: 15px;
    }
    #app_comment .cmt-list .avatar{
        width: 30px;
        height: 30px;
        position:absolute;
        left: 10px;
        top:5px;
    }
    #app_comment .cmt-list .info{
        padding-left: 50px;
        padding-right: 20px;
    }
    #app_comment .cmt-list .info .cmt-list-item{
        line-height: 14px;
        height: 14px;
        font-size:12px;
        display: flex;
        justify-content: space-between;
    }
    #app_comment .cmt-list .info .time{
        font-size: 12px;
        color: #aaa;
    }
    #app_comment .cmt-list .info .cmt-body{
        font-size: 14px;
        margin: 8px;
    }
    #app_comment textarea{
        height: 150px;
    }
</style>