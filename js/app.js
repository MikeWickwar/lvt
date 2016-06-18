var app = angular.module('meantea', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: "MainController",
        templateUrl: "js/partials/main_shopping.html"
      })
      // .when('/checkout', {
      //   controller: "BagController",
      //   templateUrl: "js/partials/checkout.html"
      // })
      .otherwise({
        template: '<div><h1>No Page Located Here</h1></div>'
      })
});
