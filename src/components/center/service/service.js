/**
 * Created by wyunfei on 2017/12/27.
 */
var demoApi = angular.module('center');
//   封装post请求
demoApi.service('fzPost', function ($http) {  //service服务要以this.函数开头
    this.getCode = function (url,data) {
        function jsonStr(data) {
            var  arr=[];
            for(var name in data){
                arr.push(name+'='+data[name]);
            }
            return arr.join('&');
        }
        var args = 'http://www.mianbaoyun.cn/mobile/app/'+url+'?'+jsonStr(data);   // 请求的API
        console.log(args);
        return $http.post(args);
    };
});