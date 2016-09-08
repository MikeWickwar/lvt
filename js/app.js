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
        controller: "hotelMapsPanelCtrl",
        templateUrl: "js/partials/heatmaps.html",
        authenticate: true
      })
      .state('stripmap', {
        url: "/stripmap",
        controller: "UserMapCtrl",
        templateUrl: "js/partials/stripmap.html",
        authenticate: true
      })

      $urlRouterProvider.otherwise("/")
      //place an otherwise in this for a 404 sitautation
});
