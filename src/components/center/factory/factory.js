/**
 * Created by wyunfei on 2017/12/27.
 */
var register = angular.module('center');
register.factory('jishiqi', function ($http, $interval) {
    return {
        get: function () {
            var icka = document.getElementById("ick");
            var second = 60;
            icka.innerHTML = second + '秒后重发';
            icka.style.background = "#cccccc";
            icka.disabled = true;//禁用
            var timer = $interval(function () {
                if (second <= 0) {
                    $interval.cancel(timer);
                    icka.innerHTML = '重发验证码';
                    icka.disabled = false;
                    icka.style.background = "red";
                    second = 59;
                } else {
                    second--;
                    icka.innerHTML = second + '秒后重发';
                }
            }, 1000);
        },
        animation: function () {
            var dtiao = document.getElementsByClassName("tiao");
            var inp = document.getElementsByTagName("input");
            var add = 0;
            for (var i = 0; i < inp.length; i++) {
                inp[i].index = i;
                inp[i].onfocus = function () {
                    add++;
                    if (add % 2 === 0) {
                        dtiao[this.index].setAttribute('style', 'width:100%;right: 0');
                        console.log(this.index)
                    } else {
                        dtiao[this.index].setAttribute('style', 'width:100%;left:0');
                    }
                };
                inp[i].onblur = function () {
                    dtiao[this.index].setAttribute('style', 'width: 0px');
                };
            }
        },
        yuong: function (inpq,inpw,inpe,inpr) {
            var tishia = document.getElementsByClassName("tishi");
            if (inpq === "") {
                tishia[0].innerHTML = "手机号不能为空";
                return;
            }
            tishia[0].innerHTML = "";
            if (inpw === "") {
                tishia[0].innerHTML = "密码不能为空";
                return;
            }
            tishia[0].innerHTML = "";
            if (inpe === "") {
                tishia[0].innerHTML = "验证码不能为空";
                return;
            }
            tishia[0].innerHTML = "";
            if (inpr=== "") {
                tishia[0].innerHTML = "图形码不能为空";
                return;
            }
            tishia[0].innerHTML = "";
        },
        yuongq:function (inpq,inpw) {
            var tishia = document.getElementsByClassName("tishi");
            if (inpq === "") {
                tishia[0].innerHTML = "手机号不能为空";
                return;
            }
            tishia[0].innerHTML = "";
            if (inpw === "") {
                tishia[0].innerHTML = "密码不能为空";
                return;
            }
        },

        qing: function () {
            var sjha = document.getElementsByClassName("sjh");
            sjha[0].value = "";
        },
        qinga: function () {
            var pswa = document.getElementsByClassName("psw");
            pswa[0].value = "";
        },
        qie: function () {
            var yanjing = document.getElementsByClassName("yanjing")[0];
            var pswa = document.getElementsByClassName("psw")[0];
            var jizxc = 0;
            yanjing.onclick=function(){
                jizxc++;
                if (jizxc%2===0) {
                    pswa.type="password";
                    yanjing.setAttribute('style', 'background:url(\'../../imgs/img@2x/personCenter/icon_eyes_close.png\');background-size: 100%;');
                } else {
                    pswa.type="text";
                       yanjing.setAttribute('style', 'background:url(\'../../imgs/img@2x/personCenter/icon_eyes_open.png\');background-size: 100%;');
                }
            };
        },
        byuan:function () {
            var inp = document.getElementsByTagName("input");
            var boxa = document.getElementsByClassName("tiao");
            var asd = document.getElementsByTagName("p")[0];
            var zxc = true;
            for(var i = 0; i < inp.length; i++) {
                inp[i].index = i;
                console.log(inp[i].index)
                // inp[i].index = i;
                inp[i].onfocus = function() {
                    if(zxc === true) {
                        boxa[this.index].setAttribute('style', 'left: 0;width: 100%;');
                        zxc = false;
                        return;
                    }
                    if(this.index === 1) {
                        var bbb = this;
                        asd.setAttribute('class', 'hezit');
                        setTimeout(function() {
                            asd.setAttribute('class', 'heziby');
                            boxa[bbb.index].setAttribute('style', 'right: 0;width: 100%;');
                        }, 200);
                        setTimeout(function() {
                            asd.setAttribute('class', 'heziat');
                        }, 400);
                    }
                    if(this.index === 0) {
                        console.log(this.index);
                        var aaa = this;
                        asd.setAttribute('class', 'hezibt');
                        setTimeout(function() {
                            asd.setAttribute('class', 'heziy');
                            boxa[aaa.index].setAttribute('style', 'right: 0;width: 100%;');
                        }, 200);
                        setTimeout(function() {
                            asd.setAttribute('class', 'heziat');
                        }, 300);
                    }
                };
                //失去焦点
                inp[i].onblur = function() {
                    boxa[this.index].setAttribute('style', 'right: 0;width: 0px');
                };
            }
        }
    };
});
