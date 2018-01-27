/**
 * Created by wyunfei on 2017/12/28.
 */
var register = angular.module('center');
register.controller('Register', function ($scope, $interval, jishiqi,fzPost,$state) {
    $scope.user = {
        imod: "",
        k: "",
        tua: "",
        yan: "",
        mima:""
    };
    $scope.tishi = "";
    $scope.xian = false;
    $scope.num=true;
    $scope.cha=false;
    $scope.chaw=false;
    jishiqi.animation();
    $scope.inpq=function () {
        $scope.cha=true;
    };
    $scope.inpw=function () {
        $scope.chaw=true;
    };
    $scope.weixin=function () {
        jishiqi.qing();
    };
    $scope.weixina=function () {
        jishiqi.qinga();
    };
    // var pswa = document.getElementsByClassName("psw")[2];
    jishiqi.qie();
    $scope.fun=function () {
        jishiqi.yuong($scope.user.imod,$scope.user.mima,$scope.user.tua,$scope.user.yan);
        var tishia = document.getElementsByClassName("tishi")[0];
        if(tishia.innerHTML===""){
            var dataaa={isSubmitCommitment:"true",passWord:$scope.user.mima,smsCode:$scope.user.yan,userName:$scope.user.imod};
            var uer="user/doRegister.htm";
            fzPost.getCode(uer,dataaa).then(function (res) {
                if(res.data.header.errorCode==="200"){
                    $state.go("login");
                }else{
                    alert("注册失败");
                }
            });
        }
    };
});

