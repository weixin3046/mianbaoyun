/**
 * Created by wyunfei on 2017/12/28.
 */
var forget = angular.module('center');
forget.controller('Forget', function ($scope,fzPost,jishiqi,$state) {
    $scope.user = {
        imod: "",
        k: "",
        tua: "",
        yan: "",
        mima: ""
    };
    $scope.tishi = "";
    $scope.num=false;
    $scope.cha=false;
    $scope.chaw=false;
    jishiqi.animation();
    $scope.inpq=function () {
        $scope.cha=true;
    };
    jishiqi.qie();
    $scope.inpw=function () {
        $scope.chaw=true;
    };
    $scope.weixin=function () {
        jishiqi.qing();
    };
    $scope.weixina=function () {
        jishiqi.qinga();
    };
    jishiqi.animation();
    $scope.forget = function () {
        jishiqi.yuong($scope.user.imod,$scope.user.mima,$scope.user.tua,$scope.user.yan);
        var tishia = document.getElementsByClassName("tishi")[0];
        if(tishia.innerHTML===""){
            var url = "user/forgetPSW.htm";
            var data = {
                userName: $scope.user.imod,
                smsCode:$scope.user.yan,
                passWord: $scope.user.mima
            };
            fzPost.getCode(url, data).then(function (res) {
                console.log(res.data.header.errorCode);
                if((res.data.header.errorCode)==="200"){
                    $state.go("login");
                }else{
                    alert("验证码错误");
                    return;
                }

            });
        }
    };
});

