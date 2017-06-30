<template>
  <div class="footer">
    <div class="footer-wrapper">
      <ul class="nav">
        <li @click="addColor1"><router-link to="/home" class="index-home-active" replace>首页</router-link></li>
        <li @click="addColor"><router-link to="/person" class="index-person" replace>个人中心</router-link></li>
        <li @click="addColor2"><router-link to="/my_sell" class="index-sell" replace>我要卖</router-link></li>
        <li @click="addColor3"><router-link to="/server" class="index-server" replace>联系客服</router-link></li>
      </ul> 
    </div>
  </div>
</template>
<style>
.header{
  
}
.header-wrapper{
  
}
.logo{
  
}
.nav{
  overflow: hidden;
  width: 100%;
  border-top: 1px solid #dcdcdc;
  background: #fff;
}
.nav li{
  float:left;
  width: 25%;  
  height:4.5rem;
  line-height:4.5rem;
  overflow:hidden;
}
.nav li:last-child{
  margin-right:0;
}
.nav a{
  display:inline-block;
  width: 100%;
  padding-top: 1.2rem;
  text-align: center;
  font-size: 0.95rem;
}
.index-home-active {
    color: #00baff;
    background: url("../assets/images/index_active.png") center 15% no-repeat;
    background-size: 25% auto;
}
.index-person {
    background: url("../assets/images/person_1.png") center 15% no-repeat;
    background-size: 19% auto;
}
.index-sell {
    background: url("../assets/images/sell_1.png") center 15% no-repeat;
    background-size: 18% auto;
}
.index-server {
    background: url("../assets/images/server_1.png") center 15% no-repeat;
    background-size: 25% auto;
}
</style>
<script>
     export default {
        name: 'footer',
        data() {
            return{

            }
        },
        methods: {
            addColor1: function() {
                $(".index-home").addClass('.index-home-active').removeClass('.index-home');
            },
            addColor: function() {
                $(".index-person").addClass('index-person-active').removeClass('index-person');
                $('.index-home-active').removeClass('index-home-active').addClass('index-home');
            },
            addColor3: function() {
                $(".index-server").addClass('index-server-active').removeClass('index-server');
                $('.index-home-active').removeClass('index-home-active').addClass('index-home');
            },
            addColor2: function() {
                $(".index-sell").addClass('index-sell-active').removeClass('index-sell');
                $('.index-home-active').removeClass('index-home-active').addClass('index-home');
            }
        }
    }
</script>