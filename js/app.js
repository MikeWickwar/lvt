
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
      .state('guru', {
        url: "/guru",
        controller: "GuruCtrl",
        templateUrl: "js/partials/guru.html",
        authenticate: true
      })
      .state('favs', {
        url: "/favs",
        controller: "FavsCtrl",
        templateUrl: "js/partials/favs.html",
        authenticate: true
      })
      .state('eats', {
        url: "/eats",
        controller: "EatsCtrl",
        templateUrl: "js/partials/eats.html",
        authenticate: true
      })
      .state('drink', {
        url: "/drink",
        controller: "DrinkCtrl",
        templateUrl: "js/partials/drink.html",
        authenticate: true
      })
      .state('play', {
        url: "/play",
        controller: "PlayCtrl",
        templateUrl: "js/partials/play.html",
        authenticate: true
      })

      $urlRouterProvider.otherwise("/")
      //place an otherwise in this for a 404 sitautation
});
