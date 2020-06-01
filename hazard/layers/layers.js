ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25832").setExtent([691990.528537, 6146885.500000, 709489.471463, 6156398.500000]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_100yearEventFloodHazardMap_1 = new ol.format.GeoJSON();
var features_100yearEventFloodHazardMap_1 = format_100yearEventFloodHazardMap_1.readFeatures(json_100yearEventFloodHazardMap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_100yearEventFloodHazardMap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100yearEventFloodHazardMap_1.addFeatures(features_100yearEventFloodHazardMap_1);
var lyr_100yearEventFloodHazardMap_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_100yearEventFloodHazardMap_1, 
                style: style_100yearEventFloodHazardMap_1,
                interactive: true,
    title: '100 year Event Flood Hazard Map<br />\
    <img src="styles/legend/100yearEventFloodHazardMap_1_0.png" /> Low Risk<br />\
    <img src="styles/legend/100yearEventFloodHazardMap_1_1.png" /> Medium Risk<br />\
    <img src="styles/legend/100yearEventFloodHazardMap_1_2.png" /> High Risk<br />'
        });
var format_50yearEventFloodHazardMap_2 = new ol.format.GeoJSON();
var features_50yearEventFloodHazardMap_2 = format_50yearEventFloodHazardMap_2.readFeatures(json_50yearEventFloodHazardMap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_50yearEventFloodHazardMap_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_50yearEventFloodHazardMap_2.addFeatures(features_50yearEventFloodHazardMap_2);
var lyr_50yearEventFloodHazardMap_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_50yearEventFloodHazardMap_2, 
                style: style_50yearEventFloodHazardMap_2,
                interactive: true,
    title: '50 year Event Flood Hazard Map <br />\
    <img src="styles/legend/50yearEventFloodHazardMap_2_0.png" /> Low Risk<br />\
    <img src="styles/legend/50yearEventFloodHazardMap_2_1.png" /> Medium Risk<br />\
    <img src="styles/legend/50yearEventFloodHazardMap_2_2.png" /> High Risk<br />'
        });
var format_2ndofJuly2011FloodHazardMap_3 = new ol.format.GeoJSON();
var features_2ndofJuly2011FloodHazardMap_3 = format_2ndofJuly2011FloodHazardMap_3.readFeatures(json_2ndofJuly2011FloodHazardMap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_2ndofJuly2011FloodHazardMap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2ndofJuly2011FloodHazardMap_3.addFeatures(features_2ndofJuly2011FloodHazardMap_3);
var lyr_2ndofJuly2011FloodHazardMap_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2ndofJuly2011FloodHazardMap_3, 
                style: style_2ndofJuly2011FloodHazardMap_3,
                interactive: true,
    title: '2nd of July 2011 Flood Hazard Map<br />\
    <img src="styles/legend/2ndofJuly2011FloodHazardMap_3_0.png" /> Low Risk<br />\
    <img src="styles/legend/2ndofJuly2011FloodHazardMap_3_1.png" /> Medium Risk<br />\
    <img src="styles/legend/2ndofJuly2011FloodHazardMap_3_2.png" /> High Risk<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_100yearEventFloodHazardMap_1.setVisible(false);lyr_50yearEventFloodHazardMap_2.setVisible(false);lyr_2ndofJuly2011FloodHazardMap_3.setVisible(false);
var layersList = [lyr_GoogleRoad_0,lyr_100yearEventFloodHazardMap_1,lyr_50yearEventFloodHazardMap_2,lyr_2ndofJuly2011FloodHazardMap_3];
lyr_100yearEventFloodHazardMap_1.set('fieldAliases', {'Hazard Lev': 'Hazard Lev', 'ID': 'ID', });
lyr_50yearEventFloodHazardMap_2.set('fieldAliases', {'Hazard Lev': 'Hazard Lev', 'ID': 'ID', });
lyr_2ndofJuly2011FloodHazardMap_3.set('fieldAliases', {'Hazard Lev': 'Hazard Lev', 'ID': 'ID', });
lyr_100yearEventFloodHazardMap_1.set('fieldImages', {'Hazard Lev': 'TextEdit', 'ID': 'TextEdit', });
lyr_50yearEventFloodHazardMap_2.set('fieldImages', {'Hazard Lev': 'TextEdit', 'ID': 'TextEdit', });
lyr_2ndofJuly2011FloodHazardMap_3.set('fieldImages', {'Hazard Lev': 'TextEdit', 'ID': 'TextEdit', });
lyr_100yearEventFloodHazardMap_1.set('fieldLabels', {'Hazard Lev': 'inline label', 'ID': 'no label', });
lyr_50yearEventFloodHazardMap_2.set('fieldLabels', {'Hazard Lev': 'inline label', 'ID': 'no label', });
lyr_2ndofJuly2011FloodHazardMap_3.set('fieldLabels', {'Hazard Lev': 'inline label', 'ID': 'no label', });
lyr_2ndofJuly2011FloodHazardMap_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});