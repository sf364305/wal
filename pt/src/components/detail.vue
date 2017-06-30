<template>
    <div class="detail">
        <header class="commodity-head">
            商品信息
            <span class="return-back" @click="ruturnBack"></span>
        </header>
        <div class="detail-inner clearfix">
            <p class="detail-pic-left">
                点<br/>击<br/>图<br/>片<br/>查<br/>看<br/>大<br/>图
            </p>
            <div class="detail-pic-center" img-data="0">
                <img src="../assets/images/comm1.jpg" alt="" />
            </div>
            <div class="detail-pic-right">
                <div class="detail-right-inner">
                    <div><img src="../assets/images/comm1.jpg" alt="" /></div>
                    <div><img src="../assets/images/comm2.jpg" alt="" /></div>
                    <div><img src="../assets/images/comm1.jpg" alt="" /></div>
                    <div><img src="../assets/images/comm2.jpg" alt="" /></div>
                </div>
                <div class="pic-top" @click="moveT(false, imgNu)"></div>
                <div class="pic-bottom" @click="moveT(true, imgNu)"></div>
            </div>
        </div>           
        <div class="alert-big">
            <div class="big-show" id="icons">
                <img src="../assets/images/comm1.jpg" alt="" />
                <img src="../assets/images/comm2.jpg" alt="" />
                <img src="../assets/images/comm1.jpg" alt="" />
                <img src="../assets/images/comm2.jpg" alt="" />
            </div>
            <div class="pic-left-alert"></div>
            <div class="pic-right-alert"></div>
        </div>
        <div class="over-detail">        
            <div class="detail-inf clearfix">
                <div class="detail-in-left">
                <span class="detail-in-name">
                    <img src="../assets/images/little1.png" alt=""/>
                    <em>60级超级帅号</em>
                </span>
                    <span class="detail-in-price">￥12000</span>
                </div>
                <div class="detail-in-position">
                    <div class="sell-first1 clearfix">
                        <span>
                            <em>首次出售</em>
                         </span>
                         <em>商品属性：</em>
                     </div>
                    <div class="sell-credit clearfix">
                         <span></span>
                         <span></span>
                         <span></span>
                         <span></span>
                         <em>卖家信用：</em>
                     </div>
                     <div class="sell-deal clearfix">
                        <span>5笔（成交率：100%）</span>
                        <em>最近成交：</em>
                    </div>
                </div>
            </div>
            <div class="detail-information">
                <div class="detail-nav clearfix">
                    <span class="detail-show" @click="changeCom">商品信息</span>
                    <span @click="changeCom2">交易说明</span>
                </div>
                <div class="detail-else">            
                    <ul class="detail-content">
                        <li>
                            <span>所属平台</span>
                            <em>映客</em>
                        </li>
                        <li>
                            <span>客户端</span>
                            <em>
                                电脑端
                            </em>
                        </li>
                        <li>
                            <span>操作系统</span>
                            <em>
                                IOS
                            </em>
                        </li>
                        <li>
                            <span>账号绑定</span>
                            <em>
                                手机
                            </em>
                        </li>
                        <li>
                            <span>第三方授权</span>
                            <em>
                                无援权
                            </em>
                        </li>
                        <li>
                            <span>身份认证</span>
                            <em>
                                未认证
                            </em>
                        </li>
                        <li>
                            <span>帐号等级</span>
                            <em>60级</em>
                        </li>
                        <li>
                            <span>性别</span>
                            <em>
                                男
                            </em>
                        </li>
                        <li>
                            <span>绑定情况</span>
                            <em>
                                手机
                            </em>
                        </li>
                        <li>
                            <span>描述</span>
                            <em>卖号卖号啦卖号卖号啦卖号卖号啦卖号卖号啦卖号卖号啦</em>
                        </li>
                    </ul>
                    <ul class="descripe">
                        <li>
                            <h2>1.下单支付</h2>
                            <p>选择满意的账号下单并支付</p>
                        </li>
                        <li>
                            <h2>2.联系客服</h2>
                            <p>在个人中心-买家-待发货订单中联系客服，等候发货</p>
                        </li>
                        <li>
                            <h2>3.等待发货</h2>
                            <p>客服开始验号，截图给买家确认是否继续购买，客服进行换绑</p>
                        </li>
                        <li>
                            <h2>4.买家验收</h2>
                            <p>买家换绑成功后，登录账号进行验收及密码修改</p>
                        </li>
                        <li>
                            <h2>5.确认收货</h2>
                            <p>待买家确认收货，或者自动确认收货：48小时。</p>
                        </li>
                        <li>
                            <h2>6.卖家收款</h2>
                            <p>买家确认收货，交易完成，66闲号通过微信转账给卖家，货款直接到微信钱包。</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="detail-love">
                <h2>猜你喜欢</h2>
                <ul class="com-list">
                    <li>     
                        <router-link to="/detail" class="game-name" replace>
                            <span class="name-title clearfix">
                                <img src="../assets/images/little2.png" alt="">
                                <em>【55级男神】求围观</em>
                            </span>
                            <span class="sever">
                                <em class="com-game">绑定情况：</em>
                                <i class="game-sever">手机绑定</i>
                            </span>
                            <span class="price">￥2000</span>
                            <div class="sell-credit clearfix">
                                <em>卖家信用：</em>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="sell-inf clearfix">
                                <em>最近成交：</em>
                                <span>暂无</span>
                            </div>
                        </router-link>
                        <div class="sell-status1"></div>
                    </li>
                    <li>     
                        <router-link to="/detail" class="game-lease" replace>
                            <span class="name-title clearfix">
                                <img src="../assets/images/little1.png" alt="">
                                <em>【55级男神】求围观</em>
                            </span>
                            <span class="sever">
                                <em class="com-game">绑定情况：</em>
                                <i class="game-sever">手机绑定</i>
                            </span>
                            <span class="price">￥2000</span>
                            <div class="lease-credit clearfix">
                                <em>租赁等级：</em>
                                <span>22级</span>
                            </div>
                            <div class="lease-inf clearfix">
                                <em>租赁天数：</em>
                                <span>33</span>
                            </div>
                        </router-link>
                        <div class="sell-status"></div>
                    </li>
                    <li>     
                        <router-link to="/detail" class="game-lease" replace>
                            <span class="name-title clearfix">
                                <img src="../assets/images/little1.png" alt="">
                                <em>【55级男神】求围观</em>
                            </span>
                            <span class="sever">
                                <em class="com-game">绑定情况：</em>
                                <i class="game-sever">手机绑定</i>
                            </span>
                            <span class="price">￥2000</span>
                            <div class="lease-credit clearfix">
                                <em>租赁等级：</em>
                                <span>22级</span>
                            </div>
                            <div class="lease-inf clearfix">
                                <em>租赁天数：</em>
                                <span>33</span>
                            </div>
                        </router-link>
                        <div class="sell-status"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="detail-buy clearfix">
            <span class="detail-collect" @click="changeCollect">收藏</span>
            <router-link to="/sure_order" class="detail-btn" replace>立即购买</router-link>
        </div>
    </div>
</template>
<script> 
     export default {
        name: 'detail',
        data() {
            return {
                
                msg: '6666'
            }
        },
        methods: {
            moveT: function(bool, deNum) {
                var divH = $(".detail-right-inner div").height();
                var divL = $(".detail-right-inner div").length;
                if(bool) {
                    deNum++;
                    if(deNum > 0) {
                        deNum = 0;
                    }
                } else {
                    deNum--;
                    if(deNum <= -divL+1) {
                        deNum = -divL+1;
                    }
                }
                var imgS = $(".detail-right-inner div").eq(deNum).children("img").attr("src");
                $(".detail-pic-center img").attr("src", imgS);
                $(".detail-pic-center").attr("img-data", deNum);
                var leg = deNum * divH;
                $(".detail-right-inner").animate({
                    "marginTop": leg
                },500)
            },
            changeCom: function(e) {
                $(e.target).addClass('detail-show').siblings().removeClass('detail-show');
                $(".detail-content").css("display", "block").siblings().css("display", "none");
            },
            changeCom2: function(e) {
                $(e.target).addClass('detail-show').siblings().removeClass('detail-show');
                $(".descripe").css("display", "block").siblings().css("display", "none");
            },
            changeCollect: function() {
                var col = $(".detail-buy span").html();
                if(col == "收藏") {
                    $(".detail-buy span").addClass('collect-active');
                    $(".detail-buy span").html("已收藏");
                } else {
                    $(".detail-buy span").removeClass('collect-active');
                    $(".detail-buy span").html("收藏");
                }
            },
            ruturnBack: function() {
                this.$router.go(-1);
            }
        }
    }
</script>