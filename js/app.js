
var env = {};

// Import variables if present (from env.js)
if(window){
  Object.assign(env, window.__env);
}

// Register environment in AngularJS as constant
var app = angular.module('LVT', ['ui.router', 'ngAnimate']);

app.constant('__env', env);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: "/",
        controller: "MainController",
        templateUrl: "js/partials/main_splash.html"
      })
      .state('dashboard', {
        url:"/dashboard",
        controller: "DashCtrl",
        templateUrl: "js/partials/Dashboard.html",
        authenticate: true
      })
      .state('maps', {
        url:"/maps",
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
