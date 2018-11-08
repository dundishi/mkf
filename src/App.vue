<template>
  <div id="app">
    <!--1.顶部导航栏-->
    <mt-header fixed title="迈克风商城">
      <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--2.显示子组件-->
    <router-view/>
    <!--3.底部导航栏-->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/news">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>
  export default{
  }
<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.mint-tabbar .mint-tab-item .mint-tab-item-label{
  color: #333;
}
</style>
