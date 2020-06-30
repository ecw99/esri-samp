require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function(Map, MapView, FeatureLayer) {


var map = new Map({
  basemap: "topo-vector"
});

var view = new MapView({
  container: "viewDiv",
  map: map,
  center: [  -73.935242, 40.730610], // longitude, latitude
  zoom: 10
});
floods = new FeatureLayer({
  url: "https://services1.arcgis.com/0Lw2m57KEotYYFaA/arcgis/rest/services/survey123_b9b1d621d16543378b6d3a6b3e02b424/FeatureServer"
});

map.add(floods);
});