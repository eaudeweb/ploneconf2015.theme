var map;
var geocoder;

function initialize() {
	var mapContainer = $('#map-canvas');
  if(!mapContainer.length){
    return;
  }
	var address = mapContainer.data('address');
	var icon = '../img/map-marker.png';

	map = new google.maps.Map(mapContainer[0], {
		zoom: 16,
		scrollwheel: false,
		center: codeAddress(address),
		styles: [
      {
        "featureType":"water",
        "elementType":"geometry",
        "stylers": [{
          "color":"#3F2045"}]
      },
      {
        "featureType":"landscape",
        "elementType":"geometry",
        "stylers": [{
          "color":"#3F2045"}]
      },
      {
        "featureType":"poi",
        "stylers": [{
          "visibility": "off"}]
      },
      {
        "featureType":"road.highway",
        "elementType":"geometry",
        "stylers": [{
          "color":"#FFC06E"}]
      },
      {
        "featureType":"road.arterial",
        "elementType":"geometry",
        "stylers": [{
          "color":"#AF1E59"}]
      },
      {
        "featureType":"road.local",
        "elementType":"geometry",
        "stylers": [{
          "color":"#F76A52"}]

      },
      {
        "elementType":"labels.text.fill",
        "stylers": [{
          "color":"#ffffff"}]
      },
      {
        "elementType":"labels.text.stroke",
        "stylers": [{
          "visibility":"off"}]
      },
      {
        "featureType":"transit",
        "elementType":"geometry",
        "stylers": [{
          "visibility":"off"}]
      },
      {
        "featureType":"administrative",
        "elementType":"geometry",
        "stylers": [{
          "color":"#333739"}]
      },
      {
        "featureType":"poi.park",
        "stylers": [{
          "color":"#2ecc71"}]
      },
      {
        "featureType":"road",
        "elementType":"geometry.stroke",
        "stylers": [{
          "color":"#F15A24"}, {
          "lightness":-25}]
        }]
	});

	var marker = new google.maps.Marker({
    position: map.getCenter(),
    icon: icon,
    map: map
  });
}
function codeAddress(address) {
  geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

$(document).ready(function() {
  initialize();
});
