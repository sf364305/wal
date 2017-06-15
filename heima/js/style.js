/* 
* @Author: anchen
* @Date:   2017-04-11 10:18:13
* @Last Modified by:   anchen
* @Last Modified time: 2017-04-16 09:13:31
*/

$(document).ready(function(){
    // 商品祥情页商品信息与交易说明的切换
    $(".detail-nav span").click(function() {
        $(this).addClass("detail-show").siblings().removeClass("detail-show").parent().siblings().children().eq($(this).index()).css("display", "block").siblings().css("display", "none");
    })
    // 判断是哪类帐号，存入cookie
    $(".com-list li a").click(function() {
        var nam = $(this).find(".com-game").html().split("帐")[0];
        document.cookie = "classname=nam";
        if(window.localStorage) {
            var ls = window.localStorage;
            ls.setItem("name", "董志煌");
        }
    })
    //点击刷选
    $(".classification li").click(function() {
        $(".com-alert").css("display", "block");
        $(this).parent().siblings(".com-alert").children().eq($(this).index()).css("display", "block").siblings().css("display", "none");
    })
    
});