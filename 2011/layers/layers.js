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
var format_2ndofJuly2011FlowDepthm_1 = new ol.format.GeoJSON();
var features_2ndofJuly2011FlowDepthm_1 = format_2ndofJuly2011FlowDepthm_1.readFeatures(json_2ndofJuly2011FlowDepthm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_2ndofJuly2011FlowDepthm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2ndofJuly2011FlowDepthm_1.addFeatures(features_2ndofJuly2011FlowDepthm_1);
var lyr_2ndofJuly2011FlowDepthm_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2ndofJuly2011FlowDepthm_1, 
                style: style_2ndofJuly2011FlowDepthm_1,
                interactive: true,
    title: '2nd of July 2011 Flow Depth (m)<br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_0.png" />  0.0 - 0.2 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_1.png" />  0.2 - 0.3 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_2.png" />  0.3 - 0.5 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_3.png" />  0.5 - 0.7 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_4.png" />  0.7 - 0.8 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_5.png" />  0.8 - 1.0 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_6.png" />  1.0 - 1.2 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_7.png" />  1.2 - 1.3 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_8.png" />  1.3 - 1.5 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_9.png" />  1.5 - 1.7 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_10.png" />  1.7 - 1.8 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_11.png" />  1.8 - 2.0 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_12.png" />  2.0 - 2.2 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_13.png" />  2.2 - 2.3 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_14.png" />  2.3 - 2.5 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_15.png" />  2.5 - 2.6 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_16.png" />  2.6 - 2.8 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_17.png" />  2.8 - 3.0 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_18.png" />  3.0 - 3.1 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_1_19.png" />  3.1 - 3.3 <br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_2ndofJuly2011FlowDepthm_1.setVisible(false);
var layersList = [lyr_GoogleRoad_0,lyr_2ndofJuly2011FlowDepthm_1];
lyr_2ndofJuly2011FlowDepthm_1.set('fieldAliases', {'Flow Depth': 'Flow Depth', 'ID': 'ID', });
lyr_2ndofJuly2011FlowDepthm_1.set('fieldImages', {'Flow Depth': 'TextEdit', 'ID': 'TextEdit', });
lyr_2ndofJuly2011FlowDepthm_1.set('fieldLabels', {'Flow Depth': 'inline label', 'ID': 'no label', });
lyr_2ndofJuly2011FlowDepthm_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});