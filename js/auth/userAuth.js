app.factory('AuthService', function () {
  return {
    isAuthenticated: function () {
      //this should really check whatever
      var user = $("#user").val()
      var password = $("#password").val()
     console.log(user, password, "checking...");
     return user === "Mikey" && password === "MoFo";
   }
  }
})
