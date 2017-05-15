define(['jquery'],function(){

   //点击退出按钮,跳转到"登录首页"
    $('.logout').on('click',function(){
        $.ajax({
            url:'/v6/logout',
            type:'post',
            success:function(){
                location.href = '/html/home/login.html';
            }
        })
    })



});