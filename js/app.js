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
      .state('hotels', {
        url: "/hoteleditor",
        controller: "HotelEditorCtrl",
        templateUrl: "js/partials/hoteleditor.html",
        authenticate: true
      })

      $urlRouterProvider.otherwise("/")
      //place an otherwise in this for a 404 sitautation
});
