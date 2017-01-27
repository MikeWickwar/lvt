
app.factory('favoritesService', function ($http) {

  var favorites =  []

  function bake_cookie(cookieName,cookieValue,nDays) {
    var today = new Date();
    var expire = new Date();
    if (nDays==null || nDays==0) nDays=1;
    expire.setTime(today.getTime() + 3600000*24*nDays);
    document.cookie = cookieName+"="+ cookieValue
                    + ";expires="+expire.toGMTString();
    }

   function read_cookie(cookieName) {
     var re = new RegExp('[; ]'+cookieName+'=([^\\s;]*)');
     var sMatch = (' '+document.cookie).match(re);
     if (cookieName && sMatch)
      return unescape(sMatch[1]);
     return '';
    }

  var jsondata = {
    get: function () {
      console.log('getting favorites');
      var favCookie = localStorage.gvgfavorites
      if (favCookie != ''){
        alert('found')
          console.log(favCookie, "FAV COOOKIE");
        return favCookie
      }
      return favorites

    },
    post: function (newFavotie) {
      console.log(newFavotie, "adding to favorites");
      //this will obvs have to change when deployed to the deployed url
      var strfavorites = {id: newFavotie.id,
                          title: newFavotie.title
                          };

      favorites.push(strfavorites)
      console.log(favorites);
      localStorage.setItem("gvgfavorites", JSON.stringify(favorites))
    }
  }
  return jsondata
})
