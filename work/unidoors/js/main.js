// main js
function initMap() {
  var coord = {
    lat: 53.926,
    lng: 27.482
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: coord
  });
  var image = 'img/map-icon.png';
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
    icon: image
  });

  var contentString = '<div id="map-info">'+
      '<div class="info-wrap">'+
      '<h2 class="info-title">Магазин №12</h2>'+
      '<p class="info-content">г. Минск, 3й Радиаторный переулок, 4</p>'+
      '<p class="info-content2">+375 (17) 258-96-96, +375 (29) 258-96-96</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
