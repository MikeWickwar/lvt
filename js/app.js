var app = angular.module('LVT', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: "MainController",
        templateUrl: "js/partials/main_splash.html"
      })
      // .when('/checkout', {
      //   controller: "BagController",
      //   templateUrl: "js/partials/checkout.html"
      // })
      .otherwise({
        template: '<div><h1>No Page Located Here</h1></div>'
      })
});
