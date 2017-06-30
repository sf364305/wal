<template>
    <div class="home">
        <header class="index-logo" id="index-logo">
            <router-link to="/commodity" class="search-index" replace></router-link>
        </header>
        <div>
           <app-banner :listImg="listImg"></app-banner>
        </div>
        <div class="announcement">
            <ul class="announ">
                <li>公告1：本网站出售，出租多平台直播账号</li>
                <li>公告2：出售流程为>我要卖>上传图片>填写账号信息>提交审核</li>
                <li>公告3：欢迎联系在线客服了解最新信息</li>
            </ul>
        </div>
        <section class="new-content">
            <ul class="clearfix">
               <li><router-link to="/sell_buy" class="index-sell-buy" replace>买卖账号</router-link></li>
               <li><router-link to="/lease" class="index-lease" replace>租赁账号</router-link></li>
               <li><router-link to="/popularity" class="index-popularity" replace>提高人气</router-link></li>
            </ul>
        </section>
        <ul class="project clearfix">
           <li><router-link to="/commodity" class="index-ying" replace><img src="../assets/images/ying.png" alt="">映客账号</router-link></li>
           <li><router-link to="/commodity" class="index-hua" replace><img src="../assets/images/hua.png" alt="">花椒账号</router-link></li>
           <li><router-link to="/commodity" class="index-mo" replace><img src="../assets/images/mo.png" alt="">陌陌账号</router-link></li>
           <li><router-link to="/commodity" class="index-hand" replace><img src="../assets/images/hand.png" alt="">快手账号</router-link></li>
           <li><router-link to="/commodity" class="index-else" replace><img src="../assets/images/esle.png" alt="">其它账号</router-link></li>
        </ul>
        <div class="index-news">
            <h2>最新寄售信息</h2>
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
            </ul>
        </div>
    </div>
</template>
<style>
    .index-logo{
        position: relative;
        width: 100%;
        height: 5rem;
        background: url("../assets/images/logo_index.png") center center no-repeat;
        background-size: 28.4% auto;
    }
    .search-index {
        position: absolute;
        right: 6%;
        top: 0rem;
        width: 2.2rem;
        height: 5rem;
        background: url("../assets/images/search.png") center center no-repeat;
        background-size: 100% auto;
    }
    .announcement {
        overflow: hidden;
        width: 85%;
        height: 3rem;
        padding-left: 10%;
        color: #333;
        background: url("../assets/images/advert.png") 20px center no-repeat;
        background-size: 4% auto;
    }
    .announcement-alert {
        position: fixed;
        display: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 100;
    }
    .announ-alert {
        overflow-x: hidden;
        width: 92%;
        height: 20rem;
        padding-top: 8rem;
        margin: 0 auto;
        color: #fff;
    }
    .announ-close {
        position: absolute;
        top: auto;
        left: 0;
        right: 0;
        bottom: 5rem;
        margin: auto;
        width: 2rem;
        height: 2rem;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 1px solid #dcdcdc;
        color: #fff;
        line-height: 2rem;
        text-align: center;
    }
    .announ-alert li {
        margin: 0.5rem 0;
        
    }
    .announ li {
        overflow: hidden;
        height: 3rem;
        padding-left: 2%;
        background-color: #fff;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 3rem;
    }
    .new-content {
        padding: 0.63rem;
        background: #e9e9e9;
    }
    .new-content ul li {
        float: left;
        width: 33%;
        height: 3rem;
        border-right: 1px solid #999;
        line-height: 3rem;
    }
    .new-content ul li:last-child {
        border-right: none;
    }
    .new-content ul li a {
        display: block;
        padding-left: 45%;
        font-size: 1.08rem;
    }
    .index-sell-buy {
        background: url("../assets/images/sell_buy.png") 15% 0 no-repeat;
        background-size: 31% auto;
    }
    .index-lease {
        background: url("../assets/images/lease.png") 15% 0 no-repeat;
        background-size: 31% auto;
    }
    .new-content .index-popularity {
        background: url("../assets/images/papulity.png") 15% 0 no-repeat;
        background-size: 31% auto;
    }
</style>

<script>
     import Vue from 'vue'
     //引入组件和图片
     import Banner from '../templates/Banner.vue'
     import a from '../assets/images/banner1.png'
     import b from '../assets/images/banner2.png'
     export default {
        name: 'home',
        data() {
            return {
                listImg: [{
                    url: a
                }, {
                    url: b
                }],
                msg: '6666'
            }
        },
        components: {
            'app-banner': Banner
        }
    }
</script>