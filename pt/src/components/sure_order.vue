<template>
    <div class="sure-order">
        <header class="commodity-head">
            确认订单
            <span class="return-back"></span>
        </header>
        <div class="tobuy-tit">商品信息</div>
        <ul class="sure-inf">
            <li class="clearfix">
                <span>商品名称：</span>
                <em>厉害了我的哥</em>
            </li>
            <li class="clearfix">
                <span>所属平台：</span>
                <em>花椒</em>
            </li>
            <li class="clearfix">
                <span>商品类型：</span>
                <em>直播账号</em>
            </li>
            
        </ul>
        <ul class="sure-stock">
            <li class="clearfix">
                <span>当前库存：</span>
                <em>1个</em>
            </li>
            <li class="clearfix">
                <span>单价：</span>
                <em>12540元</em>
            </li>
        </ul>
        <div class="tobuy-inf">交易信息</div>
        <section class="sure-contact">
            <form id="form" action="" method="post">
                <input type="text" name="merchantid" style="display: none" value="${goods.userinfo.id }"/>
                <div class="telephone clearfix">
                    <label for=""><em>*</em>手机号码：</label>
                    <input type="number" name="phone" value="" pattern="[0-9]{11}" placeholder="请输入手机号码" maxlength="11" />
                </div>
                <div class="qq-number clearfix">
                    <label for=""><em>*</em>联系Q&nbsp;Q：</label>
                    <input type="text" name="userqq" value="" placeholder="请输入联系QQ"/>
                </div>
            </form>
        </section>
        <ul class="sure-price">
            <li class="clearfix">
                <span>购买数：</span>
                <!-- <input type="number" value="1" class="sure-num"/> -->
                <em>1</em>
            </li>
            <li class="clearfix">
                <span>原价格：</span>
                <em>12540元</em>
            </li>
            <li class="clearfix">
                <span>实付价：</span>
                <em>12540元</em>
            </li>
        </ul>
        <div class="tobuy-outer">
            <div class="tobuy-prompt">*请确认您的信息准确无误，确保您的交易安全！</div>
            <div class="protocol">
                <span class="pro-check"></span>
                <a href="">《六六交易平台服务协议》</a>
            </div>
            <div class="wallet-submit">
                <router-link to="/buy" class="detail-pay">确认购买</router-link>
            </div>
        </div>
    </div>
</template>