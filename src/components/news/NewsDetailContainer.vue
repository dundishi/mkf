<template>
    <div id="app-newsDetail">
        <h1 class="title">{{list.title}}</h1>
        <p class="subtitle">
            <span>发表时间:{{list.ctime | dateFormat}}</span>
            <span>点击: {{list.click}} 次</span>
        </p>
        <div class="container" v-show="list.content">{{list.content}}</div>
        <div class="picture" v-show="list.img_url"><img :src="list.img_url"></div>
        <div class="container" v-show="list.content1">{{list.content1}}</div>
        <div class="picture" v-show="list.img_url1"><img :src="list.img_url1"></div>
        <div class="container" v-show="list.content2">{{list.content2}}</div>
        <div class="container" v-show="list.content3">{{list.content3}}</div>
        <div class="picture" v-show="list.img_url2"><img :src="list.img_url2"></div>
        <div class="container" v-show="list.content4">{{list.content4}}</div>
        <div class="container" v-show="list.content5">{{list.content5}}</div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
    import comment from '../subcomponents/comment';
    export default{
        data() {
            return {
                list: [],
                id: this.$route.params.id
            }
        },
        methods:{
            getNewsDetail(){
                var url = "http://127.0.0.1:3000/newslist/find?id=" + this.id;
                this.axios.get(url).then(res=>{
                    this.list = res.data.msg[0]
                }) 
            }
        },
        created() {
            this.getNewsDetail();
        },
        components: {
            'comment-box':comment
        }
    }
</script>
<style>
    #app-newsDetail{
        padding: 0 4px;
        font-family: '仿宋',Arial,'宋体';
    }
    #app-newsDetail .title{
        font-size: 16px;
        margin: 15px 0;
        padding: 2px 12px;
    }
    #app-newsDetail .subtitle{
        display: flex;
        font-size: 13px;
        justify-content: space-between;
        padding: 2px 12px;
    }
    #app-newsDetail .container{
        padding: 10px;
        font-size: 14px;
        text-indent: 2em;
        line-height: 30px;
    }
    #app-newsDetail .picture img{
        width: 100%;
        padding: 20px;
    }
</style>