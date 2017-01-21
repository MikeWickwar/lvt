app.factory('searchService', function($http) {
  var platform = new H.service.Platform({
  'app_id': 'ND93hRAGOUFcVdJvuaYK',
  'app_code': 'ZrlSpjVlFF9GAcGwLUVXkA'
  });

  var jsondata = {
      restaurants: [],
      bars: [],
      casinos: [],
      dfdRResult: $.Deferred(),
      dfdBResult: $.Deferred(),
      dfdCResult: $.Deferred(),
      getRestaurants: function() {

        // Obtain an Explore object through which to submit search
        // requests:
        var search = new H.places.Search(platform.getPlacesService()),
          searchResult, error;

        // Define search parameters:
        var params = {
          // Plain text search for places with the word "hotel"
          // associated with them:
          'q': 'restaurants',
          //  Search in the Chinatown district in San Francisco:
          'at': '36.170488,-115.142809',
          'size': 100,
          'callback': 'onResult'
        };

        // Define a callback function to handle data on success:
        function onResult(data) {
          //  alert("success")
           console.log(data);
           jsondata.restaurants.push(data)
           jsondata.dfdRResult.resolve()
           return data
        }

        // Define a callback function to handle errors:
        function onError(data) {
          error = data;
          console.log(error)
        }

        $.ajax({
          method: "GET",
          url: "https://places.cit.api.here.com/places/v1/discover/search?at=36.170488,-115.142809&q=restaurant&app_id=ND93hRAGOUFcVdJvuaYK&app_code=ZrlSpjVlFF9GAcGwLUVXkA&pretty",
          dataType: "JSONP",
          success: function(results){alert("success")
                                      onResult(results)}
        })




    },
    getBars: function() {

      // Obtain an Explore object through which to submit search
      // requests:
      var search = new H.places.Search(platform.getPlacesService()),
        searchResult, error;

      // Define search parameters:
      var params = {
        // Plain text search for places with the word "hotel"
        // associated with them:
        'q': 'bars',
        //  Search in the Chinatown district in San Francisco:
        'at': '36.170488,-115.142809',
        'size': 100
      };

      // Define a callback function to handle data on success:
      function onResult(data) {
        //  alert("success")
         console.log(data);
         jsondata.bars.push(data)
         jsondata.dfdBResult.resolve()
         return data
      }

      // Define a callback function to handle errors:
      function onError(data) {
        error = data;
        console.log(error)
      }

      $.ajax({
        method: "GET",
        url: "https://places.cit.api.here.com/places/v1/discover/search?at=36.170488,-115.142809&q=bars&app_id=ND93hRAGOUFcVdJvuaYK&app_code=ZrlSpjVlFF9GAcGwLUVXkA&pretty",
        dataType: "JSONP",
        success: function(){alert("success")},
        onResult: function() {alert("success from result")}
      })
      // Run a search request with parameters, headers (empty), and
      // callback functions:
      return search.request(params, {}, onResult, onError);

  },
  getCasinos: function() {

    // Obtain an Explore object through which to submit search
    // requests:
    var search = new H.places.Search(platform.getPlacesService()),
      searchResult, error;

    // Define search parameters:
    var params = {
      // Plain text search for places with the word "hotel"
      // associated with them:
      'q': 'gambleing',
      //  Search in the Chinatown district in San Francisco:
      'at': '36.170488,-115.142809',
      'size': 100,
      'callback': onResult
    };

    // Define a callback function to handle data on success:
    function onResult(data) {
      //  alert("success")
       console.log(data);
       jsondata.casinos.push(data)
       jsondata.dfdCResult.resolve()
       return data
    }

    // Define a callback function to handle errors:
    function onError(data) {
      error = data;
      console.log(error)
    }

    // Run a search request with parameters, headers (empty), and
    // callback functions:
    return search.request(params, {}, onResult, onError);

},
    getPlaceDetails: function(href){
      if ( !promise ) {
                var promise =  $http.get(href).success(function(response) {
                    return response.data;
                });
                return promise;
            }

    }
  }
    return jsondata;
});
