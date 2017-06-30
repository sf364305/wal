<template>
    <div class="person">
        <div class="person-infor">
            <dl>
                <dt><img src="../assets/images/papulity.png" alt=""></dt>
                <dd>帅到没朋友</dd>
            </dl>
            <span class="my-mon">￥0</span>
        </div>
        <div class="person-dif clearfix">
            <span class="person-buyer buy-show" @click="showStatus">买家管理</span>
            <span class="person-seller" @click="showSta">卖家管理</span>
        </div>
        <ul class="person-dif-con">
            <li class="person-buyer-con person-con-show clearfix">
                <router-link to="/unpaid" class="person-unpaid" replace>未支付</router-link>
                <router-link to="/wait_send" class="person-send" replace>待发货</router-link>
                <router-link to="/wait_sure" class="person-sure" replace>待确认</router-link>
                <router-link to="/arbitration" class="person-arbitration" replace>仲裁中</router-link>
                <router-link to="/all_order" class="person-all" replace>全部订单</router-link>
            </li>
            <li class="person-seller-con clearfix">
                <router-link to="/unpaid" class="person-sended" replace>已发货</router-link>
                <router-link to="/wait_send" class="person-transaction" replace>交易中</router-link>
                <router-link to="/wait_sure" class="person-shelves" replace>已上架</router-link>
                <router-link to="/arbitration" class="person-review" replace>审核中</router-link>
                <router-link to="/arbitration" class="person-seccess" replace>交易成功</router-link>
                <router-link to="/arbitration" class="person-defeat" replace>交易失败</router-link>
                <router-link to="/all_order" class="person-all" replace>全部订单</router-link>
            </li>
        </ul>
        <div class="person-income-con clearfix">
            <router-link to="/my_code" class="person-code" replace>我的二维码</router-link>
            <router-link to="/my_promotion" class="person-promotion" replace>我的推广</router-link>
            <router-link to="/income_con" class="person-income" replace>收益祥情</router-link>
        </div>
        
    </div>
</template>
<style>

</style>
<script>
      export default {
         name: 'perosn',
         data() {
             return{

             }
         },
         methods: {
             showSta: function() {
                 $(".person-seller").addClass('buy-show');
                 $(".person-buyer").removeClass('buy-show');
                 $(".person-seller-con").addClass('person-con-show');
                 $(".person-buyer-con").removeClass('person-con-show');
             },
             showStatus: function() {
                 $(".person-buyer").addClass('buy-show');
                 $(".person-seller").removeClass('buy-show');
                 $(".person-buyer-con").addClass('person-con-show');
                 $(".person-seller-con").removeClass('person-con-show');
             }
         }
     }
</script>