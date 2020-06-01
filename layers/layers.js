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
var format_100yearEvent20112040m_1 = new ol.format.GeoJSON();
var features_100yearEvent20112040m_1 = format_100yearEvent20112040m_1.readFeatures(json_100yearEvent20112040m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_100yearEvent20112040m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100yearEvent20112040m_1.addFeatures(features_100yearEvent20112040m_1);
var lyr_100yearEvent20112040m_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_100yearEvent20112040m_1, 
                style: style_100yearEvent20112040m_1,
                interactive: true,
    title: '100 year Event 2011-2040 (m)<br />\
    <img src="styles/legend/100yearEvent20112040m_1_0.png" />  0.0 - 0.2 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_1.png" />  0.2 - 0.4 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_2.png" />  0.4 - 0.6 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_3.png" />  0.6 - 0.8 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_4.png" />  0.8 - 1.0 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_5.png" />  1.0 - 1.1 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_6.png" />  1.1 - 1.3 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_7.png" />  1.3 - 1.5 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_8.png" />  1.5 - 1.7 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_9.png" />  1.7 - 1.9 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_10.png" />  1.9 - 2.1 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_11.png" />  2.1 - 2.3 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_12.png" />  2.3 - 2.5 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_13.png" />  2.5 - 2.7 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_14.png" />  2.7 - 2.8 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_15.png" />  2.8 - 3.0 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_16.png" />  3.0 - 3.2 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_17.png" />  3.2 - 3.4 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_18.png" />  3.4 - 3.6 <br />\
    <img src="styles/legend/100yearEvent20112040m_1_19.png" />  3.6 - 3.8 <br />'
        });
var format_100yearEvent20412070m_2 = new ol.format.GeoJSON();
var features_100yearEvent20412070m_2 = format_100yearEvent20412070m_2.readFeatures(json_100yearEvent20412070m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_100yearEvent20412070m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100yearEvent20412070m_2.addFeatures(features_100yearEvent20412070m_2);
var lyr_100yearEvent20412070m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_100yearEvent20412070m_2, 
                style: style_100yearEvent20412070m_2,
                interactive: true,
    title: '100 year Event 2041-2070 (m)<br />\
    <img src="styles/legend/100yearEvent20412070m_2_0.png" />  0.0 - 0.2 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_1.png" />  0.2 - 0.4 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_2.png" />  0.4 - 0.6 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_3.png" />  0.6 - 0.8 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_4.png" />  0.8 - 1.0 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_5.png" />  1.0 - 1.2 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_6.png" />  1.2 - 1.4 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_7.png" />  1.4 - 1.6 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_8.png" />  1.6 - 1.8 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_9.png" />  1.8 - 2.0 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_10.png" />  2.0 - 2.2 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_11.png" />  2.2 - 2.4 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_12.png" />  2.4 - 2.6 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_13.png" />  2.6 - 2.8 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_14.png" />  2.8 - 3.0 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_15.png" />  3.0 - 3.2 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_16.png" />  3.2 - 3.4 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_17.png" />  3.4 - 3.6 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_18.png" />  3.6 - 3.8 <br />\
    <img src="styles/legend/100yearEvent20412070m_2_19.png" />  3.8 - 4.0 <br />'
        });
var format_100yearEvent20712100m_3 = new ol.format.GeoJSON();
var features_100yearEvent20712100m_3 = format_100yearEvent20712100m_3.readFeatures(json_100yearEvent20712100m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_100yearEvent20712100m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100yearEvent20712100m_3.addFeatures(features_100yearEvent20712100m_3);
var lyr_100yearEvent20712100m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_100yearEvent20712100m_3, 
                style: style_100yearEvent20712100m_3,
                interactive: true,
    title: '100 year Event 2071-2100 (m)<br />\
    <img src="styles/legend/100yearEvent20712100m_3_0.png" />  0.0 - 0.2 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_1.png" />  0.2 - 0.5 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_2.png" />  0.5 - 0.7 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_3.png" />  0.7 - 0.9 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_4.png" />  0.9 - 1.2 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_5.png" />  1.2 - 1.4 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_6.png" />  1.4 - 1.6 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_7.png" />  1.6 - 1.8 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_8.png" />  1.8 - 2.1 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_9.png" />  2.1 - 2.3 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_10.png" />  2.3 - 2.5 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_11.png" />  2.5 - 2.8 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_12.png" />  2.8 - 3.0 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_13.png" />  3.0 - 3.2 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_14.png" />  3.2 - 3.4 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_15.png" />  3.4 - 3.7 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_16.png" />  3.7 - 3.9 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_17.png" />  3.9 - 4.1 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_18.png" />  4.1 - 4.4 <br />\
    <img src="styles/legend/100yearEvent20712100m_3_19.png" />  4.4 - 4.6 <br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_100yearEvent20112040m_1.setVisible(false);lyr_100yearEvent20412070m_2.setVisible(false);lyr_100yearEvent20712100m_3.setVisible(false);
var layersList = [lyr_GoogleRoad_0,lyr_100yearEvent20112040m_1,lyr_100yearEvent20412070m_2,lyr_100yearEvent20712100m_3];
lyr_100yearEvent20112040m_1.set('fieldAliases', {'Flow Depth': 'Flow Depth', 'ID': 'ID', });
lyr_100yearEvent20412070m_2.set('fieldAliases', {'Flow Depth': 'Flow Depth', 'ID': 'ID', });
lyr_100yearEvent20712100m_3.set('fieldAliases', {'Flow Depth': 'Flow Depth', 'ID': 'ID', });
lyr_100yearEvent20112040m_1.set('fieldImages', {'Flow Depth': 'TextEdit', 'ID': 'TextEdit', });
lyr_100yearEvent20412070m_2.set('fieldImages', {'Flow Depth': 'TextEdit', 'ID': 'TextEdit', });
lyr_100yearEvent20712100m_3.set('fieldImages', {'Flow Depth': 'TextEdit', 'ID': 'TextEdit', });
lyr_100yearEvent20112040m_1.set('fieldLabels', {'Flow Depth': 'inline label', 'ID': 'no label', });
lyr_100yearEvent20412070m_2.set('fieldLabels', {'Flow Depth': 'inline label', 'ID': 'no label', });
lyr_100yearEvent20712100m_3.set('fieldLabels', {'Flow Depth': 'inline label', 'ID': 'no label', });
lyr_100yearEvent20712100m_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});