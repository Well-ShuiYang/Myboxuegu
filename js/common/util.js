define(['jquery_cookie','jquery'],function(ud,$){


    return{
        /*
         * ����¼״̬:
         *1.ʹ��$.cookie������ж� ʹ�ô���PHPSESSID ��Cookie
         *2.���������,˵��û�е�¼;ֱ����ת����¼ҳ��
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