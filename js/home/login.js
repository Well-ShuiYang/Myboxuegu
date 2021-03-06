define(['jquery_form','jquery','jquery_cookie'],function(ud,$,ud){

  /*
  * 检测登录状态:
  *1.使用$.cookie插件来判断 使用存在PHPSESSID 这Cookie
  *2.如果已存在;直接登录 跳转到首页
  * */
    if($.cookie('PHPSESSID')){
        location.href = '/';
    }



/*
 * 对于jquery的方法，
 * 操作DOM的都是实例方法，不操作DOM的都是静态方法。
 * 实例方法必须通过jq实例来调，静态方法直接通过$来调
  */

    //表单转ajax提交,成功后跳转到首页
    $('.login-wrap form').ajaxForm({
        success:function(data){
            // 把用户信息使用cookie持久化存储起来，因为存储的cookie值必须是字符串，
            // 所以要进行stringfy字符串转换。
            // 为了让其他页面能够读取该cookie，所以配置path为根，
            // 默认请求下存储的cookie在浏览器关闭后就会失效，为了延长有效期可以配置epires或者max-age
            $.cookie('userInfo',JSON.stringify(data.result),{
                path: '/',
                'max-age':24*60*60
            });

            location.href = '/';
        },

        error:function(){
            alert('登录失败');
        }
    })


});