<template>
    <div class="commodity">
        <header class="commodity-head">
            账号搜索
            <span class="return-back"></span>
        </header>
        <ul class="com-choice clearfix">
            <li class="com-text" @click="change1">商品类型</li>
            <li class="com-text2" @click="change2">筛选</li>
            <li class="com-text3" @click="change3">默认排序</li>
        </ul>
        <div class="alert-com-outer" @click="closeA"></div>
        <ul class="alert-com">
            <li class="alert-com-diff">
                <h2>>全部</h2>
                <div>
                    <span>买卖</span>
                    <span>租赁</span>
                </div>
            </li>
            <li class="alert-com-inf alert-com-show">
                <form action="" method="post">
                    <div class="clearfix">
                        <label for="">关键词：</label>
                        <input type="text" value="" name="" class="key-word" placeholder="请输入想查找的关键信息">
                    </div>
                    <div class="clearfix">
                        <label for="">价格范围：</label>
                        <input type="text" value="" name="" class="key-word" placeholder="0 - 20000000">
                    </div>
                    <div class="clearfix">
                        <label for="">等级：</label>
                        <input type="text" value="" name="" class="key-word" placeholder="0 - 999">
                    </div>
                    <div class="sex-com clearfix">
                        <span>性别：</span>
                        <label>
                            <input type="radio" checked="checked" name="sex" value="1"/>
                            <i class="choice-sho choiced-show"  @click="changeSex"></i>
                            <em class="choice-text">男</em>
                        </label>
                        <label>
                            <input type="radio" name="sex" value="2"/>
                            <i class="choice-sho"  @click="changeSex"></i>
                            <em class="choice-text">女</em>
                        </label>
                    </div>
                    <div class="bind-com clearfix">
                        <span>绑定情况：</span>
                        <label>
                            <input type="radio" checked="checked" name="bind" value="1"/>
                            <i class="choice-sho choiced-show"  @click="changeSex"></i>
                            <em class="choice-text">手机</em>
                        </label>
                        <label>
                            <input type="radio" name="bind" value="2"/>
                            <i class="choice-sho"  @click="changeSex"></i>
                            <em class="choice-text">邮箱</em>
                        </label>
                    </div>
                    <div class="certification-com clearfix">
                        <span>身份认证：</span>
                        <label>
                            <input type="radio" checked="checked" name="bind" value="1"/>
                            <i class="choice-sho choiced-show"  @click="changeSex"></i>
                            <em class="choice-text">已认证</em>
                        </label>
                        <label>
                            <input type="radio" name="bind" value="2"/>
                            <i class="choice-sho"  @click="changeSex"></i>
                            <em class="choice-text">未认证</em>
                        </label>
                    </div>
                    <div class="com-sub">
                        <input type="reset" name="" value="重置" class="com-reset"/>
                        <input type="button" name="" value="确定" class="com-submit"/>
                    </div>
                </form>
            </li>
            <li class="alert-com-time">
                <h2>>默认排序<em>（按时间倒序）</em></h2>
                <div>
                    <span>价格↓<em>（按价格从高到低）</em></span>
                    <span>价格↑<em>（按价格从低到高）</em></span>
                </div>
            </li>
        </ul>
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
</template>
<style>
</style>
<script>
     export default {
        name: 'detail',
        data() {
            return {
                
                msg: '6666'
            }
        },
        methods: {
            change1: function() {
                $(".alert-com, .alert-com-outer").css("display", "block");
                $(".alert-com-diff").css("display", "block").siblings().css("display", "none");
            },
            change2: function() {
                $(".alert-com, .alert-com-outer").css("display", "block");
                $(".alert-com-inf").css("display", "block").siblings().css("display", "none");
            },
            change3: function() {
                $(".alert-com, .alert-com-outer").css("display", "block");
                $(".alert-com-time").css("display", "block").siblings().css("display", "none");
            },
            closeA: function() {
                $(".alert-com, .alert-com-outer").css("display", "none");
            },
            changeSex: function(e) {   
                $(e.target).addClass('choiced-show').parent().siblings().find('i').removeClass('choiced-show');
            }
        }
    }
</script>