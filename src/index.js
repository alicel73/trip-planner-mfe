const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiamFjb2JyaWNvbnljIiwiYSI6ImNqZG1kbmlzYzBsOXAyd285OHplMzEwMGgifQ.T-crKdQoSyEJKUndYjSIFA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12, 
  style: "mapbox://styles/mapbox/streets-v10" 
});

const domMarker = document.createElement('div');
domMarker.style.width = '32px';
domMarker.style.height = '39px';
domMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(domMarker).setLngLat([-74.009151, 40.705086]).addTo(map);