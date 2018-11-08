<template>
    <div id="app-search">
        <div class="search">
            <input type="text" value="" placeholder="请输入要搜索的内容" />
            <button @click="search">搜索</button>
        </div>
        <div class="mui-card-search">
            <div class="mui-card-header">搜索结果</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {}
        },
        methods:{
            search: function(){}
        },
        created() {

        }
    }
</script>
<style>
    #app-search .search{
        display: flex;
        justify-content: space-between;
    }
    #app-search .search input{
        margin-bottom: 0;
    }
    #app-search .mui-card-search{
        font-size: 14px;
        position: relative;
        overflow: hidden;
        border-radius: 2px;
        background-color: white;
        background-clip: padding-box;
        -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
        box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
    }
</style>
