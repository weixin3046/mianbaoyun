/**
 * Created by wyunfei on 2017/12/26.
 */
var register = angular.module('center');
register.directive('ngYan', function () {
    return {
        restrict: 'A',// 只能是大写；而且组合使用  E作为元素A属性C类名M注释  4种方法
        controller: function ($scope, $interval, jishiqi, fzPost, $state) {
            if($scope.num===true){
                $scope.temp=10216;
            }else {
                $scope.temp=10217;
            }
            $scope.yanZhan = function () {
                if ($scope.user.imod === "") {
                    $scope.tishi = "输出内容不能为空";
                    return;
                } else {
                    var zze = /^1[3|4|5|7|8][0-9]{9}$/;
                    if (!(zze.test($scope.user.imod))) {
                        $scope.tishi = "输出格式不对";
                        return;
                    }
                    $scope.tishi = "";
                     var url = 'user/checkUserName.htm';
                     var qwer = {userName: $scope.user.imod};
                        fzPost.getCode(url,qwer).then(function (agsss) {
                            console.log(agsss.data.body.isRegister);
                            if (agsss.data.body.isRegister === 'Y') {
                                //用户已注册   登陆和忘记页面不会显示提示
                                console.log($scope.loginaa);
                               if($scope.loginaa===1){
                                   console.log(321);
                                   $scope.tishi = "";
                                   return;
                               }else {
                                   //忘记页面
                                   if($scope.num===false){
                                       $scope.tishi = "";
                                   }
                                   //注册页面
                                   if($scope.num===true ){
                                       console.log("注册");
                                       $scope.tishi = "用户已注册";
                                       return;
                                   }
                               }
                            }
                            //用户未注册
                            if($scope.num===false&&agsss.data.body.isRegister === 'N'){
                                console.log(321);
                                $scope.tishi = "用户未注册";
                                return;
                            }else {
                                if($scope.loginaa===1){
                                    console.log(123);
                                    $scope.tishi = "用户未注册";
                                    return;
                                }
                            }
                            $scope.xian = true;
                            $scope.k = " http://www.mianbaoyun.cn/mobile/app/message/picCode.htm?mobile=" + $scope.user.imod + "&templateNo="+ $scope.temp;
                            $scope.tu = function () {
                                $scope.k = " http://www.mianbaoyun.cn/mobile/app/message/picCode.htm?mobile=" + $scope.user.imod + "&templateNo=" + $scope.temp+"&"+ Math.random();
                                return;
                            };
                        });
                    $scope.huo = function () {
                        if($scope.num===true){
                            $scope.temp=10216;
                        }else {
                            $scope.temp=10217;
                        }
                                var url = 'message/sendMsg.htm';
                                var asdf = {mobile: $scope.user.imod, picCode: $scope.user.tua, templateNo:$scope.temp};
                                fzPost.getCode(url, asdf).then(function (res) {
                                    if (res.data.header.errorCode !== '200') {
                                        $scope.tishi = "图像验证码错误";
                                        return;
                                    } else {
                                        $scope.tishi = "";
                                        jishiqi.get();
                                    }
                                });
                    };
                }
            };
        },
    };
});