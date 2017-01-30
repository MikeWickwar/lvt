
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
          console.log(favCookie, "FAV COOOKIE");
        return favCookie
      }
      return favorites
    },
    getMobile: function () {
      console.log('getting mobile favorites');
      alert('mobile isworking ')
      return favorites

    },
    post: function (newFavotie) {
      console.log(newFavotie, "adding to favorites")

      //this will obvs have to change when deployed to the deployed url
      var strfavorites = {id: newFavotie.id,
                          title: newFavotie.title,
                          href: newFavotie.href
                          };

      favorites.push(strfavorites)
      if(localStorage.gvgfavorites){
        var favs = localStorage.gvgfavorites
        favs = JSON.parse(favs)
      }else{
        var favs = []
      }
      favs.push(strfavorites)
      localStorage.setItem("gvgfavorites", JSON.stringify(favs))
      console.log(favs, favs.includes(strfavorites.title), "fav is new, added");

    },
    delete: function(delFavorite){
      var favs = localStorage.gvgfavorites
      favs = JSON.parse(favs)
      for (var i = 0; i < favs.length; i++) {
        if(favs[i].id == delFavorite.id){
          console.log(favs[i].id, delFavorite.id, "favs match");
          favs.splice(i, 1)
        }
      }
      localStorage.setItem("gvgfavorites", JSON.stringify(favs))

    }
  }
  return jsondata
})
