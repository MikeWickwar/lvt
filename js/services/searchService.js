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
        $.ajax({
          method: "GET",
          url: "https://places.cit.api.here.com/places/v1/discover/search?at=36.170488,-115.142809&q=restaurant&size=100&app_id=ND93hRAGOUFcVdJvuaYK&app_code=ZrlSpjVlFF9GAcGwLUVXkA&pretty&tf=plain",
          dataType: "JSONP",
          success: function(results){
            // alert("success")
            onResult(results)}
        })
        function onResult(data) {
          //  alert("success")
           console.log(data);
           jsondata.restaurants.push(data)
           jsondata.dfdRResult.resolve()
           return data
        }
    },
    getBars: function() {
      $.ajax({
        method: "GET",
        url: "https://places.cit.api.here.com/places/v1/discover/search?at=36.170488,-115.142809&q=bars&size=100&app_id=ND93hRAGOUFcVdJvuaYK&app_code=ZrlSpjVlFF9GAcGwLUVXkA&pretty&tf=plain",
        dataType: "JSONP",
        success: function(results){
          // alert("success")
          onResult(results)}
      })
      function onResult(data) {
        //  alert("success")
         console.log(data);
         jsondata.bars.push(data)
         jsondata.dfdBResult.resolve()
         return data
      }
  },
  getCasinos: function() {
    $.ajax({
      method: "GET",
      url: "https://places.cit.api.here.com/places/v1/discover/search?at=36.1096532,-115.1742412&q=gambleing&size=100&app_id=ND93hRAGOUFcVdJvuaYK&app_code=ZrlSpjVlFF9GAcGwLUVXkA&pretty&tf=plain",
      dataType: "JSONP",
      success: function(sresults){
        // alert("success")
        console.log(sresults);
        jsondata.casinos.push(sresults)
        //no support for wider radius so hacking with 2 requests, might use 3 to get all hotes
        $.ajax({
          method: "GET",
          url: "https://places.cit.api.here.com/places/v1/discover/search?at=36.170488,-115.142809&q=gambleing&size=100&app_id=ND93hRAGOUFcVdJvuaYK&app_code=ZrlSpjVlFF9GAcGwLUVXkA&pretty&tf=plain",
          dataType: "JSONP",
          success: function(dresults){
            // alert("success")
            console.log(dresults);
            for (var i = 0; i < dresults.results.items.length; i++) {
              jsondata.casinos[0].results.items.push(dresults.results.items[i])
            }

            onResult()
          }
        })
    }
  })

    function onResult() {
      //  alert("success")
       console.log();
       jsondata.dfdCResult.resolve()
       return
    }
},
    getPlaceDetails: function(href){
      href = href + "&tf=plain"
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
