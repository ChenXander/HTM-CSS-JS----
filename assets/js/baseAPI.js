// 每次调用get或post或ajax的时候会先调用ajaxPrefilter这个函数，
// 这个函数中我们可以拿到ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    // 在发起ajax请求之前统一拼接请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url;
})