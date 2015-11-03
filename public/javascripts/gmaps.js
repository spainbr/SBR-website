var map;

function initializeGmaps() {
  		var myLatLng = {lat: 36.517387, lng: -4.882169};
  		var styles = [{"featureType":"water","stylers":[{"color":"#19a0d8"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":6}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#e85113"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-40}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-20}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"road.highway","elementType":"labels.icon"},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"lightness":20},{"color":"#efe9e4"}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"hue":"#11ff00"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"hue":"#4cff00"},{"saturation":58}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#f0e4d3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-10}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]}];
        var styledMap = new google.maps.StyledMapType(styles,{name: "SBR"});
        var mapOptions = {
            zoom: 12,
            center: myLatLng,
            mapTypeControlOptions: {
      			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    			}
            //center: new google.maps.LatLng(36.517387, -4.882169)
            };
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        //Associate the styled map with the MapTypeId and set it to display.
  		map.mapTypes.set('map_style', styledMap);
  		map.setMapTypeId('map_style');

        var marker = new google.maps.Marker({
    	position: myLatLng,
    	map: map,
    	title: 'SBR Properties'
    	});

        // Include when GPS coordinates are available in the database
        /*
        if (jQuery.isEmptyObject(data) != true) {
    	var markers = [];
    	for (var i = 0; i < 1000; i++) {
		 	var latLng = new google.maps.LatLng(data[i].latitude,data[i].longitude);
  			var marker = new google.maps.Marker({'position': latLng});
  			markers.push(marker);
			}
		var markerCluster = new MarkerClusterer(map, markers);
		}
		*/
    }
    
//google.maps.event.addDomListener(window, 'load', initializeGmaps);


