define(['jquery_cookie','jquery'],function(ud,$){


    return{
        /*
         * 检测登录状态:
         *1.使用$.cookie插件来判断 使用存在PHPSESSID 这Cookie
         *2.如果不存在,说明没有登录;直接跳转到登录页面
         * */
        checkLoginStatus:function(){
            if(!$.cookie('PHPSESSID')){
                location.href = '/html/home/login.html';
            }
            return this;
        },

        fn2:function(){
            console.log('util fn2');
            return this;
        },

        fn3:function(){
            console.log('util fn3');
            return this;
        },

    }

});