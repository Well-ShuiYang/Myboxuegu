define(['jquery_cookie','jquery'], function(ud,$) {
    //�����е� �û���Ϣչʾ

    /**
     * �����ϲ��û���Ϣչʾ:
     * 1��ʹ�ò����ȡ����cookie�洢���û���Ϣ��
     * 2����������û���Ϣ������JSON�ַ�����������Ҫ��ʹ��JSON.parse�����ɶ�����ʹ��
     * 3������û���Ϣ�д���ͷ����ô����img��src�滻�������ùܣ���Ϊ�ڲ���ʱ����Ĭ��ͷ��
     * 4�����û���Ϣ�д����û��������滻������ʹ�ò���ʱ��Ĭ��ֵ��
     * */
    var userInfo =  JSON.parse($.cookie('userInfo') || '{}');
    userInfo.tc_avatar &&  $('.aside .avatar img').attr('src', userInfo.tc_avatar);
    userInfo.tc_name   &&  $('.aside h4').text(userInfo.tc_name);


});
