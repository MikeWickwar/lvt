var stripmarkers = [];
var dmarkers = [];
var places = [];
var dfdVegas = $.Deferred();
console.log("markers reset", dmarkers, stripmarkers);
app.factory('mapService', function($http, hotelService) {
    var jsondata = {

        initStripMap: function() {
          console.log('map service init strip map fired: strip makers length has been resset');

          var lasVegas = new google.maps.LatLng(36.1096532, -115.1742412);
          console.log(lasVegas);
          var vegasLtLng = {lat: lasVegas.lat().toString().replace(",", "."), lng: parseFloat(lasVegas.lng())};
          var map, places, infoWindow;
          var autocomplete;
          var countryRestrict = {'country': 'us'};
          var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
          var hostnameRegexp = new RegExp('^https?://.+?/');


          map = new google.maps.Map(document.getElementById('vegasStripMap'), {
             zoom: 13,
             center: lasVegas,
             mapTypeControl: false,
             panControl: false,
             zoomControl: false,
             streetViewControl: false
           });

           infoWindow = new google.maps.InfoWindow({
              content: document.getElementById('info-content')
            });

            search(lasVegas)
               // Search for hotels in the selected city, within the viewport of the map.
        function search(lasVegas) {


        console.log("Vegas here is the vegas", lasVegas);
        var dsearch = {
         location: lasVegas,
         bounds: map.getBounds(),
         radius: '0',
         types: ['lodging']
        }
        console.log(dsearch  , "seach mo", map);
        places = new google.maps.places.PlacesService(map);

        places.radarSearch(dsearch, function(results, status) {
         if (status === google.maps.places.PlacesServiceStatus.OK) {
           console.log('success', results);
           clearMarkers();
           // Create a marker for each hotel found, and
           // assign a letter of the alphabetic to each marker icon.
           for (var i = 0; i < results.length; i++) {
             var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
             var markerIcon = MARKER_PATH + markerLetter + '.png';
             // Use marker animation to drop the icons incrementally on the map.
             dmarkers[i] = new google.maps.Marker({
               position: results[i].geometry.location,
               animation: google.maps.Animation.DROP,
               icon: markerIcon
             });

             // If the user clicks a hotel marker, show the details of that hotel
             // in an info window.
             dmarkers[i].placeResult = results[i];
             google.maps.event.addListener(dmarkers[i], 'click', showInfoWindow);
             setTimeout(dropMarker(i), i * 100);
           }
         }
        });
        }

        function clearMarkers() {
        for (var i = 0; i < dmarkers.length; i++) {
          if (dmarkers[i]) {
            dmarkers[i].setMap(null);
          }
        }
        dmarkers = [];
        }


        function dropMarker(i) {
            return function() {
            dmarkers[i].setMap(map);
          };
        }

        // Get the place details for a hotel. Show the information in an info window,
        // anchored on the marker for the hotel that the user selected.
        function showInfoWindow() {
          var dmarker = this;
          places.getDetails({placeId: dmarker.placeResult.place_id},
              function(place, status) {
                if (status !== google.maps.places.PlacesServiceStatus.OK) {
                  return;
                }
                infoWindow.open(map, dmarker);
                buildIWContent(place);
              });
        }

        // Load the place information into the HTML elements used by the info window.
        function buildIWContent(place) {
          document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
              'src="' + place.icon + '"/>';
          document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
              '">' + place.name + '</a></b>';
          document.getElementById('iw-address').textContent = place.vicinity;

          if (place.formatted_phone_number) {
            document.getElementById('iw-phone-row').style.display = '';
            document.getElementById('iw-phone').textContent =
                place.formatted_phone_number;
          } else {
            document.getElementById('iw-phone-row').style.display = 'none';
            }


          // Assign a five-star rating to the hotel, using a black star ('&#10029;')
          // to indicate the rating the hotel has earned, and a white star ('&#10025;')
          // for the rating points not achieved.
          if (place.rating) {
            var ratingHtml = '';
            for (var i = 0; i < 5; i++) {
              if (place.rating < (i + 0.5)) {
                ratingHtml += '&#10025;';
              } else {
                ratingHtml += '&#10029;';
              }
            document.getElementById('iw-rating-row').style.display = '';
            document.getElementById('iw-rating').innerHTML = ratingHtml;
            }
          } else {
            document.getElementById('iw-rating-row').style.display = 'none';
          }

          // The regexp isolates the first part of the URL (domain plus subdomain)
          // to give a short URL for displaying in the info window.
          if (place.website) {
            var fullUrl = place.website;
            var website = hostnameRegexp.exec(place.website);
            if (website === null) {
              website = 'http://' + place.website + '/';
              fullUrl = website;
            }
            document.getElementById('iw-website-row').style.display = '';
            document.getElementById('iw-website').textContent = website;
          } else {
            document.getElementById('iw-website-row').style.display = 'none';
          }
        }



        },
        initVegasMap: function(){
          var lasVegas = new google.maps.LatLng(36.170488, -115.142809);
          console.log(lasVegas);
          var vegasLtLng = {lat: lasVegas.lat().toString().replace(",", "."), lng: parseFloat(lasVegas.lng())};
          var map, places, infoWindow;
          var autocomplete;
          var countryRestrict = {'country': 'us'};
          var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
          var hostnameRegexp = new RegExp('^https?://.+?/');


          map = new google.maps.Map(document.getElementById('vegasMap'), {
             zoom: 14,
             center: lasVegas,
             mapTypeControl: false,
             panControl: false,
             zoomControl: false,
             streetViewControl: false
           });

           infoWindow = new google.maps.InfoWindow({
              content: document.getElementById('info-content')
            });

            search(lasVegas)
               // Search for hotels in the selected city, within the viewport of the map.
     function search(lasVegas) {


       console.log("Vegas here is the vegas", lasVegas);
       var search = {
         location: lasVegas,
         bounds: map.getBounds(),
         radius: '500',
         types: ['lodging']
       }
  console.log(search  , "seach mo", map);
      places = new google.maps.places.PlacesService(map);

       places.radarSearch(search, function(results, status) {
         if (status === google.maps.places.PlacesServiceStatus.OK) {
           console.log('success', results);
           clearMarkers();
           // Create a marker for each hotel found, and
           // assign a letter of the alphabetic to each marker icon.
           for (var i = 0; i < results.length; i++) {
             var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
             var markerIcon = MARKER_PATH + markerLetter + '.png';
             // Use marker animation to drop the icons incrementally on the map.
             stripmarkers[i] = new google.maps.Marker({
               position: results[i].geometry.location,
               animation: google.maps.Animation.DROP,
               icon: markerIcon
             });
             // If the user clicks a hotel marker, show the details of that hotel
             // in an info window.
             var added=false;
             $.map(stripmarkers, function(elementOfArray, indexInArray) {
              if (elementOfArray == results[i].place_id) {
                alert("double prevented")
                added = true;
              }
            })
             if (!added) {
               stripmarkers[i].placeResult = results[i];
               google.maps.event.addListener(stripmarkers[i], 'click', showInfoWindow);
               setTimeout(dropMarker(i), i * 100);
             }
           }
         }
       });
     }

     function clearMarkers() {
        for (var i = 0; i < stripmarkers.length; i++) {
          if (stripmarkers[i]) {
            stripmarkers[i].setMap(null);
          }
        }
        dmarkers = [];
      }


      function dropMarker(i) {
            return function() {
            stripmarkers[i].setMap(map);
          };
        }

        // Get the place details for a hotel. Show the information in an info window,
        // anchored on the marker for the hotel that the user selected.
        function showInfoWindow() {
          var stripmarkers = this;
          places.getDetails({placeId: stripmarkers.placeResult.place_id},
              function(place, status) {
                if (status !== google.maps.places.PlacesServiceStatus.OK) {
                  return;
                }
                infoWindow.open(map, stripmarkers);
                buildIWContent(place);


              });
        }

        // Load the place information into the HTML elements used by the info window.
        function buildIWContent(place) {
          document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
              'src="' + place.icon + '"/>';
          document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
              '">' + place.name + '</a></b>';
          document.getElementById('iw-address').textContent = place.vicinity;

          if (place.formatted_phone_number) {
            document.getElementById('iw-phone-row').style.display = '';
            document.getElementById('iw-phone').textContent =
                place.formatted_phone_number;
          } else {
            document.getElementById('iw-phone-row').style.display = 'none';
            }


          // Assign a five-star rating to the hotel, using a black star ('&#10029;')
          // to indicate the rating the hotel has earned, and a white star ('&#10025;')
          // for the rating points not achieved.
          if (place.rating) {
            var ratingHtml = '';
            for (var i = 0; i < 5; i++) {
              if (place.rating < (i + 0.5)) {
                ratingHtml += '&#10025;';
              } else {
                ratingHtml += '&#10029;';
              }
            document.getElementById('iw-rating-row').style.display = '';
            document.getElementById('iw-rating').innerHTML = ratingHtml;
            }
          } else {
            document.getElementById('iw-rating-row').style.display = 'none';
          }

          // The regexp isolates the first part of the URL (domain plus subdomain)
          // to give a short URL for displaying in the info window.
          if (place.website) {
            var fullUrl = place.website;
            var website = hostnameRegexp.exec(place.website);
            if (website === null) {
              website = 'http://' + place.website + '/';
              fullUrl = website;
            }
            document.getElementById('iw-website-row').style.display = '';
            document.getElementById('iw-website').textContent = website;
          } else {
            document.getElementById('iw-website-row').style.display = 'none';
          }
        }

        }
      }
    return jsondata;
});

/////geolocation
app.factory('userMapService', function () {
  var jsondata = {
    initUserLocationMap : function(){
  console.log('user map controller fired');
  // var lasVegas = new google.maps.LatLng(36.170488, -115.142809);

  var map = new google.maps.Map(document.getElementById('UserMap'), {
            center: {lat: 36.170488, lng: -115.142809},
            zoom: 16
          });
          var infoWindow = new google.maps.InfoWindow({map: map});

          // Try HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              infoWindow.setPosition(pos);
              infoWindow.setContent('What\'s up Mikey!? This is your Location!');

              map.setCenter(pos);
            }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        },
        handleLocationError : function(browserHasGeolocation, infoWindow, pos) {
          infoWindow.setPosition(pos);
          infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');
                              }
      }
      return jsondata;
});
