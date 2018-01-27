/**
 * Created by wyunfei on 2017/12/26.
 *
 */
(function () {
    'use strict';

    var app = angular.module('myApp', [
        'ui.router',
        'center',
    ]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '../components/center/templates/login.html'
            })
            .state('register', {
            url: '/register',
            templateUrl: '../components/center/templates/register.html',
           })
             .state('forget', {
            url: '/forget',
            templateUrl: '../components/center/templates/forget.html'
           });


            // 如果找不到，走这里
            $urlRouterProvider.otherwise('/login');
    });
})();
