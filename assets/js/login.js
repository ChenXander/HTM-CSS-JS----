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
    var form = layui.form
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
})