<template>
    <div id="app-login">
        <div class="login-img">
            <img class="login_img" src="./avatar.jpg">
        </div>
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>用户名</label>
            <input type="text" class="mui-input-clear" v-model="uname" placeholder="请输入用户名">
            </div>
            <div class="mui-input-row">
                <label>密码</label>
                <input type="password" class="mui-input-password" v-model="upwd" placeholder="请输入密码">
            </div>
            <div class="mui-button-row">
                <button type="button" class="mui-btn mui-btn-primary" @click="login()">确认</button>
                <button type="button" class="mui-btn mui-btn-danger" @click="quick()" >取消</button>
            </div>
        </form>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    import qs from 'qs'
    export default{
        name: 'login',
        data(){
            return {
                uname:'',
                upwd:''
            }
        },
        methods: {
            login(){
                var that = this;
                var url = "http://127.0.0.1:3000/userlist/signin"
                this.axios.post(url,qs.stringify({uname:that.uname,upwd:that.upwd})).then(res=>{
                    if(res.data.ok==1){
                        Toast("登录成功,返回首页");
                        this.$router.push('/')
                    }else{
                        Toast("用户名或密码错误");
                    }
                })
            },
            quick(){
                this.uname="";
                this.upwd="";
            }
        }
    }
</script>
<style>
    #app-login .login-img{
        height: 150px;
        position:relative;
    }
    #app-login .login-img .login_img{
        height: 100px;
        position: absolute;
        top: 25px;
        left: 110px;
        border-radius:50%;
    }
</style>