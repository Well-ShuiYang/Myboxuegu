define(['jquery','bootstrap'], function($,ud) {
	//退出页面.让其挑战到登录页面
    $('#logout').on('click',function(){
        $.ajax({
            type:'post',
            url:'v6/logout',
            success:function(){
                location.href = '/html/home/login.html';
            },
            error:function(){
                alert('退出失败,稍后再试');
            }

        })
    })
});
