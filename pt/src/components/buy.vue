<template>
    <div class="buy">
        <header class="commodity-head">
            选择支付
            <span class="return-back" @click="ruturnBack"></span>
        </header>
        <div class="buy-inf">商品信息</div>
        <ul class="pay-inf">
            <li class="clearfix">
                <span>商品名称</span>
                <em>厉害的哥</em>
            </li>
            <li class="clearfix">
                <span>手机号码</span>
                <em>15260623877</em>
            </li>
            <li class="clearfix">
                <span>QQ号码</span>
                <em>1839085395</em>
            </li>
            <li class="clearfix">
                <span>应付总价</span>
                <em>12000元</em>
            </li>
            <li class="clearfix">
                <span>实付总价</span>
                <em>12000元</em>
            </li>
            <input type="text"  id="amount" style="display: none" value=""/>
            <input type="text"  id="orderid" style="display: none" value=""/>
        </ul>
        <div class="pay-time">*订单支付有效时间30分钟</div>
        <div class="buy-inf-method">支付方式</div>
        <a href="javascript:void(0);" class="pay-method">微信支付</a>
    </div>
</template>
<script>
     export default {
        name: 'buy',
        data() {
            return {
            
            }
        },
        methods: {
            ruturnBack: function() {
                this.$router.go(-1);
            }
        }
    }
</script>