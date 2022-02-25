$(function () {
    // 点击去注册账号
    $('#link_reg').on('click', function () {
        $('.login-box').hide();
        $('.reg-box').show();
    })
    // 点击去登录
    $('#link_login').on('click', function () {
        $('.login-box').show();
        $('.reg-box').hide();
    })

    // 从layui获取form对象
    var form = layui.form;
    var layer = layui.layer;

    // 通过form.verify()自定义表单校验规则
    form.verify({
        // 自定义一个pwd校验规则
        pwd: [/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'],
        // 校验两次密码是否一致
        repwd: function (value) {
            // 判断与密码框中是否相等
            var pwd = $('.reg-box [name = password]').val();
            if (pwd !== value) {
                return '两次密码不一致！';
            }
        }
    })

    // 监听注册表单的事件
    $('#form_reg').on('submit', function(e) {
        e.preventDefault();
        // 发起Ajax的post请求
        var data = {username:$('#form_reg [name=username]').val(), password: $('#form_reg [name=password]').val()};
        $.post('http://www.liulongbin.top:3007/api/reguser', data, function(res) {
            if(res.status !== 0) {
                return layer.msg(res.message);
            }
            layer.msg('注册成功，请登录！');
            // 模拟人的点击行为
            $('#link_login').click();
        })
    })
})