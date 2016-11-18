var app = angular.module('LVT', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: "/",
        controller: "MainController",
        templateUrl: "js/partials/main_splash.html"
      })
      .state('dashboard', {
        controller: "DashCtrl",
        templateUrl: "js/partials/Dashboard.html",
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
