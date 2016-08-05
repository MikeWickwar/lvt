var app = angular.module('LVT', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: "/",
        controller: "MainController",
        templateUrl: "js/partials/main_splash.html"
      })
      .state('dashboard', {
        url: "/home",
        controller: "VegasMapCtrl",
        templateUrl: "js/partials/dashboard.html",
        authenticate: true
      })
      .state('maptest', {
        url: "/maptest",
        controller: "MapCtrl",
        templateUrl: "js/partials/testmap.html",
        authenticate: true
      })

      $urlRouterProvider.otherwise("/")
      //place an otherwise in this for a 404 sitautation
});
