console.log("Maps js has been loaded");

/* Data points defined as an array of LatLng objects */
var heatmapDataStrip = [
  //The stratosphere
  {location: new google.maps.LatLng(36.146129,-115.160683), weight: 100020},
  // circus circus
  {location: new google.maps.LatLng(36.1374415, -115.1647961), weight: 50000},
  //The Wynn
  {location: new google.maps.LatLng(36.1264898, -115.165739), weight: 21221},
  //trump
  {location: new google.maps.LatLng(36.1295451, -115.1728213), weight: 1},
  //tthe mirage
  {location: new google.maps.LatLng(36.1211957, -115.1740735), weight: 12222},
  //piazzo
  {location: new google.maps.LatLng(36.1239675, -115.167916), weight: 1222},
  //Vinitian
  {location: new google.maps.LatLng(36.121174, -115.1696526), weight: 12222},
  //Ceasers Palace
  {location: new google.maps.LatLng(36.1720691, -115.1411417), weight: 1222},
  //flamingo
  {location: new google.maps.LatLng(36.1162217, -115.1718162), weight: 12222},
  //Bally's
  {location: new google.maps.LatLng(36.114029, -115.171323), weight: 12222},
  //bellagio
  {location: new google.maps.LatLng(36.1114633, -115.175486), weight: 1222},
  //Monte Carlo
  {location: new google.maps.LatLng(36.104598, -115.1787748), weight: 122222}
];

var dealLocationsStrip = [
    {
        casino : 'The Stratosphere',
        desc : 'This thing is gigantic!',
        lat : "36.146129",
        long : "-115.160683"
    },
    {
        casino : 'Circus Circus',
        desc : 'Is that Hunter S. Thompson?!',
        lat : 36.1374415,
        long : -115.1647961
    },
    {
        casino : 'The Wynn',
        desc : 'Where you can Wynn!!',
        lat : 36.1264898,
        long : -115.165739
    },
    {
        casino : 'Trump Tower',
        desc : 'Don\'t do it',
        lat : 36.1295451,
        long : -115.1728213
    },
    {
        casino : 'The Mirage',
        desc : 'Gotta see the volcano! classic!',
        lat : 36.1211957,
        long : -115.1740735
    },
    {
        casino : 'Piazzo',
        desc : '2 for 1 \'you call it\'s\' all night long!',
        lat : 36.1239675,
        long : -115.167916
    },
    {
        casino : 'Venetian',
        desc : '$10 match play on all dope ass bets!!',
        lat : 36.121174,
        long : -115.1696526
    },
    {
        casino : 'Ceasers Palace',
        desc : 'Hail Ceaser! ',
        lat : 36.116169,
        long : -115.1745003
    },
    {
        casino : 'Flamingo',
        desc : 'super dope flamingos!!',
        lat : 36.1162563,
        long : -115.1716874
    },
    {
        casino : 'Bally\'s',
        desc : 'Fancy Shit! Good Waffles',
        lat : 36.114029,
        long : -115.171323
    },
    {
        casino : 'bellagio',
        desc : 'Fancy Shit! Good Waffles!',
        lat : 36.1114633,
        long : -115.175486
    },
    {
        casino : 'Monte Carol',
        desc : 'The full Monte!!',
        lat : 36.104598,
        long : -115.1787748
    }
];

/* Data points defined as an array of LatLng objects */
var heatmapData = [
  //The D
  {location: new google.maps.LatLng(36.16949,-115.143077), weight: 100020},
  //freemont exp.
  {location: new google.maps.LatLng(36.170488, -115.142809), weight: 50000},
  //four queens
  {location: new google.maps.LatLng(36.1697672,-115.1437154), weight: 21221},
  //golden nugget
  {location: new google.maps.LatLng(36.1703267,-115.1457436), weight: 122222},
  //the plaza
  {location: new google.maps.LatLng(36.1713467,-115.1470735), weight: 12222},
  //golden gate
  {location: new google.maps.LatLng(36.1711016,-115.1462776), weight: 12222},
  //california
  {location: new google.maps.LatLng(36.1729785,-115.1448324), weight: 12222},
  //downtown grand
  {location: new google.maps.LatLng(36.1720691,-115.1411417), weight: 12222},
  //gold spike
  {location: new google.maps.LatLng(36.1711121,-115.140793), weight: 12222},
  //el cortez
  {location: new google.maps.LatLng(36.1688819,-115.1391032), weight: 122222}
];

var dealLocations = [
    {
        casino : 'The D',
        desc : 'This is the best casino in the world!',
        lat : 36.16949,
        long : -115.143077
    },
    {
        casino : 'freemont hotel and casino',
        desc : 'This casino is aiiiiite!',
        lat : 36.170539,
        long : -115.142809
    },
    {
        casino : 'four queens',
        desc : 'This is the second best casino in the world!',
        lat : 36.1697672,
        long : -115.1437154
    },
    {
        casino : 'Golden Nugget',
        desc : 'If you\'re looking for you\'re golden nugget, you might find it here',
        lat : 36.1703267,
        long : -115.1457436
    },
    {
        casino : 'The Plaza',
        desc : 'Go to the plaza and ask for the Mikey D Special $$$',
        lat : 36.1713467,
        long : -115.1470735
    },
    {
        casino : 'Golden Gate',
        desc : '2 for 1 \'you call it\'s\' all night long!',
        lat : 36.1711016,
        long : -115.1462776
    },
    {
        casino : 'California',
        desc : '$10 match play on all dope ass bets!!',
        lat : 36.1729785,
        long : -115.1448324
    },
    {
        casino : 'Downtown Grand',
        desc : 'This is the downtown ain\'t it grand! $5 poker hands',
        lat : 36.1720691,
        long : -115.1411417
    },
    {
        casino : 'Gold Spike',
        desc : 'Spike your Gold!',
        lat : 36.1711121,
        long : -115.140793
    },
    {
        casino : 'El Cortez',
        desc : 'Go to the back nock 3 times and kick the door. password is "boobs". you\'re welcome',
        lat : 36.1688819,
        long : -115.1391032
    }
];
