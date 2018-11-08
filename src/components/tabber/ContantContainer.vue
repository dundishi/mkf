<template>
    <div id="app-content">
        <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="mui-table-view-cell mui-media">
                        <router-link class="mui-navigate-right" to="/login">
                            <img class="mui-media-object mui-pull-left head-img" id="head-img" src="./avatar.jpg">
                            <div class="mui-media-body" v-text="uname">
                            </div>
                        </router-link>
                    </li>
                </ul>
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="mui-table-view-cell">
                        <a href="#account" class="mui-navigate-right">账号与安全</a>
                    </li>
                </ul>
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="mui-table-view-cell">
                        <a href="#notifications" class="mui-navigate-right">新消息通知</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="#privacy" class="mui-navigate-right">隐私</a>
                    </li>
                    <li class="mui-table-view-cell">
                        <a href="#general" class="mui-navigate-right">通用</a>
                    </li>
                </ul>
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="mui-table-view-cell">
                        <a href="#about" class="mui-navigate-right">关于MUI <i class="mui-pull-right update">V3.1.0</i></a>
                    </li>
                </ul>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" style="text-align: center;">
                        <a @click="signout()">退出登录</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                islogin:false,
                uname:'未登录'
            }
        },
        mounted(){
            var self = this;
            this.axios.get("http://127.0.0.1:3000/userlist/islogin").then(res=>{
                if(res.data.ok==1){
                    self.islogin = true
                    self.uname = res.data.uname
                }else{
                    self.islogin = false
                }
            })
        },
        methods: {
            signout() {
                this.axios.get('http://127.0.0.1:3000/userlist/signout').then(res=>{
                    this.$router.push('/')
                    //this.$router.go(0)
                })
            }
        }
    }
</script>
<style>
    #app-content .mui-scroll .mui-table-view:first-child {
        margin-top: 40px;
    }
    #app-content .mui-scroll .mui-table-view:last-child {
        margin-bottom: 30px;
    }
    #app-content .mui-table-view {
        margin-top: 20px;
    }
    #app-content .mui-table-view .mui-media-body{
        margin-top: 10px;
    }
</style>