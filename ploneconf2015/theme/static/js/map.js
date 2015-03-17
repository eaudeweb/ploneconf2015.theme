var map;
var geocoder;

function initialize() {
	var mapContainer = $('#map-canvas');
  if(!mapContainer.length){
    return;
  }
	var address = mapContainer.data('address');

	map = new google.maps.Map(mapContainer[0], {
		zoom: 17,
		scrollwheel: false,
		center: codeAddress(address),
		styles: [
      {
        "featureType":"water",
        "elementType":"geometry",
        "stylers": [{
          "color":"#75B6CA"}]
      },
      {
        "featureType":"landscape",
        "elementType":"geometry",
        "stylers": [{
          "color":"#38133f"}]
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
          "color":"#f76a52"}]
      },
      {
        "featureType":"road.local",
        "elementType":"geometry",
        "stylers": [{
          "color":"#4F3D59"}]

      },
      {
        "elementType":"labels.text.fill",
        "stylers": [{
          "color":"#ffffff"}]
      },
      {
        "elementType":"labels.text.stroke",
        "stylers": [{
          "color":"#3F2045",
          "opacity": ".2" }]
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
          "visibility": "off"}]
      }]
	});

}
function codeAddress(address) {
  geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          icon: '../img/map-marker.png',
          position: results[0].geometry.location,
          title: 'Intercontinental'
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

$(document).ready(function() {
  initialize();
});
