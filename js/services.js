// app.factory('jsonService', function($http) {
//     var promise;
//     var jsondata = {
//         get: function() {
//             if ( !promise ) {
//                 var promise =  $http.get('../json/teas.json').success(function(response) {
//                     return response.data;
//                 });
//                 return promise;
//             }
//         }
//     };
//     return jsondata;
// });
// app.factory('catsService', function () {
//   var categories = []
//   var jsondata = {
//       get: function (data) {
//         data.forEach(function (item) {
//            item.categories.forEach(function (cat) {
//              if (($.inArray(cat, categories)) >= 0) {
//              }else {
//                categories.push(cat)
//              }
//            })
//          })
//       return categories
//     }
//   }
//   return jsondata
// })
// app.factory('cartService', function () {
//   var cart = []
//   var jsondata = {
//     get: function () {
//       return cart
//     },
//     post: function (item) {
//       cart.forEach(function (thingInCart) {
//         if (item.item === thingInCart.item) {
//           console.log('Iam already in here');
//           item.quantity = parseInt(item.quantity) + parseInt(thingInCart.quantity);
//           item = {item:item.item, quantity:item.quantity, price:item.price};
//           cart.splice(cart.indexOf(thingInCart), 1)
//           console.log(thingInCart);
//         }
//
//       })
//       return cart.push(item)
//     }
//   }
//   return jsondata
// })
