<template>
    <div class="my-sell">
        <header class="commodity-head">
            我要卖
        </header>
        <form action="" method="" name="" class="sell-form">
            <div class="sell-diff">1.选择类型</div>
            <div class="sell-content clearfix">
                <label>
                    <input type="radio" checked="checked" name="sex" value="1"/>
                    <i class="choice-sho-sell choiced-show-sell"  @click="changeSell"></i>
                    <em class="choice-text-sell">出售</em>
                </label>
                <label>
                    <input type="radio" name="sex" value="2"/>
                    <i class="choice-sho-sell"  @click="changeSell"></i>
                    <em class="choice-text-sell">出租</em>
                </label>
            </div>
            <div class="sell-diff">2.选择平台</div>
            <div class="sell-platform clearfix">
                <label>
                    <input type="radio" checked="checked" name="sell" value="1"/>
                    <i class="choice-sho-platform choiced-ying-platform"  @click="changePlat"><span class="plat-show"></span></i>
                    <em class="choice-text-platform">映客账号</em>
                </label>
                <label>
                    <input type="radio" name="sell" value="2"/>
                    <i class="choice-hua-platform"  @click="changePlat"><span></span></i>
                    <em class="choice-text-platform">花椒账号</em>
                </label>
                <label>
                    <input type="radio" name="sell" value="2"/>
                    <i class="choice-mo-platform"  @click="changePlat"><span></span></i>
                    <em class="choice-text-platform">陌陌账号</em>
                </label>
                <label>
                    <input type="radio" name="sell" value="2"/>
                    <i class="choice-hand-platform"  @click="changePlat"><span></span></i>
                    <em class="choice-text-platform">快手账号</em>
                </label>
                <label>
                    <input type="radio" name="sell" value="2"/>
                    <i class="choice-else-platform"  @click="changePlat"><span></span></i>
                    <em class="choice-text-platform">其他账号</em>
                </label>
            </div>
            <div class="sell-next-in">
                <router-link to="/lease_information" class="sell-in-next">下一步</router-link>
            </div>
        </form>
    </div>
</template>
<style>
    .intro{
        font-size:20px;
        color:#000;
        margin:20px auto;
    }
    
</style>
<script>
    export default {
      data () {
        return {
          
        }
      },
      created () {
        
      },
      
      methods: {
          changeSell: function(e) {
              $(e.target).addClass('choiced-show-sell').parent().siblings().find('i').removeClass('choiced-show-sell');
          },
          changePlat: function(e) {
            $(e.target).addClass('plat-show').parent().parent().siblings().find('span').removeClass('plat-show');
          }
      }
    }
</script>
