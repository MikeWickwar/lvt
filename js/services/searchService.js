app.factory('searchService', function($http) {
  var platform = new H.service.Platform({
  'app_id': 'ND93hRAGOUFcVdJvuaYK',
  'app_code': 'ZrlSpjVlFF9GAcGwLUVXkA'
});
    var jsondata = {
        places: [],
        dfdResult: $.Deferred(),
        get: function() {

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
            'at': '36.170488,-115.142809'
          };

          // Define a callback function to handle data on success:
          function onResult(data) {
             alert("success")
             console.log(data);
             jsondata.places.push(data)
             jsondata.dfdResult.resolve()
             return data
          }

          // Define a callback function to handle errors:
          function onError(data) {
            error = data;
          }

          // Run a search request with parameters, headers (empty), and
          // callback functions:
          return search.request(params, {}, onResult, onError);

      }
    }
      return jsondata;
});
