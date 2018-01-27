/**
 * Created by wyunfei on 2017/12/28.
 */
var login = angular.module('center');

login.controller('loGin', function ($scope, fzPost, jishiqi) {
    $scope.user = {
        imod: "",
        k: "",
        tua: "",
        yan: "",
        mima: ""
    };
    $scope.tishi = "";
    $scope.loginaa = 1;
    $scope.chaq=false;
    // jishiqi.animation();
    jishiqi.byuan();
    $scope.inpq=function () {
        $scope.chaq=true;
    };
    $scope.num = true;
    $scope.wan=function () {
        jishiqi.ya();
    };
    $scope.weixin=function () {
        jishiqi.qing();
    };
    $scope.login = function () {
        jishiqi.yuong($scope.user.imod,$scope.user.mima);
        var tishia = document.getElementsByClassName("tishi")[0];
            if(tishia.innerHTML===""){
                var url = "user/dologin.htm";
                var data = {userName: "$scope.user.imod", passWord: "$scope.user.mima"};
                fzPost.getCode(url, data).then(function (res) {
                    console.log(res);
                    alert("登陆成功");
                });
            }
    };
});

