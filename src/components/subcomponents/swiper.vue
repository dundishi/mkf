<template>
    <div id="app-subcomp-swipt">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.md" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default{
        props:["list"],
        created() {  
        }

    }
</script>
<style>
   #app-subcomp-swipt .mint-swipe{
       height: 200px;
   } 
   #app-subcomp-swipt .mint-swipe .mint-swipt-item{
       text-align: center;
   }
   #app-subcomp-swipt .mint-swipe-item img{
        width: 100%;
    }
</style>