ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25832").setExtent([695692.582569, 6146885.500000, 705787.417431, 6156398.500000]);
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

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_50yearEvent20112040m_2 = new ol.format.GeoJSON();
var features_50yearEvent20112040m_2 = format_50yearEvent20112040m_2.readFeatures(json_50yearEvent20112040m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_50yearEvent20112040m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_50yearEvent20112040m_2.addFeatures(features_50yearEvent20112040m_2);
var lyr_50yearEvent20112040m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_50yearEvent20112040m_2, 
                style: style_50yearEvent20112040m_2,
                interactive: true,
    title: '50 year Event 2011-2040 (m)<br />\
    <img src="styles/legend/50yearEvent20112040m_2_0.png" />  0.0 - 0.2 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_1.png" />  0.2 - 0.3 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_2.png" />  0.3 - 0.5 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_3.png" />  0.5 - 0.7 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_4.png" />  0.7 - 0.8 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_5.png" />  0.8 - 1.0 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_6.png" />  1.0 - 1.1 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_7.png" />  1.1 - 1.3 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_8.png" />  1.3 - 1.5 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_9.png" />  1.5 - 1.6 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_10.png" />  1.6 - 1.8 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_11.png" />  1.8 - 1.9 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_12.png" />  1.9 - 2.1 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_13.png" />  2.1 - 2.3 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_14.png" />  2.3 - 2.4 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_15.png" />  2.4 - 2.6 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_16.png" />  2.6 - 2.7 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_17.png" />  2.7 - 2.9 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_18.png" />  2.9 - 3.1 <br />\
    <img src="styles/legend/50yearEvent20112040m_2_19.png" />  3.1 - 3.2 <br />'
        });
var format_50yearEvent20412070m_3 = new ol.format.GeoJSON();
var features_50yearEvent20412070m_3 = format_50yearEvent20412070m_3.readFeatures(json_50yearEvent20412070m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_50yearEvent20412070m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_50yearEvent20412070m_3.addFeatures(features_50yearEvent20412070m_3);
var lyr_50yearEvent20412070m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_50yearEvent20412070m_3, 
                style: style_50yearEvent20412070m_3,
                interactive: true,
    title: '50 year Event 2041-2070 (m)<br />\
    <img src="styles/legend/50yearEvent20412070m_3_0.png" />  0.0 - 0.2 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_1.png" />  0.2 - 0.3 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_2.png" />  0.3 - 0.5 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_3.png" />  0.5 - 0.7 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_4.png" />  0.7 - 0.9 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_5.png" />  0.9 - 1.0 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_6.png" />  1.0 - 1.2 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_7.png" />  1.2 - 1.4 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_8.png" />  1.4 - 1.5 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_9.png" />  1.5 - 1.7 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_10.png" />  1.7 - 1.9 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_11.png" />  1.9 - 2.0 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_12.png" />  2.0 - 2.2 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_13.png" />  2.2 - 2.4 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_14.png" />  2.4 - 2.5 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_15.png" />  2.5 - 2.7 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_16.png" />  2.7 - 2.9 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_17.png" />  2.9 - 3.1 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_18.png" />  3.1 - 3.2 <br />\
    <img src="styles/legend/50yearEvent20412070m_3_19.png" />  3.2 - 3.4 <br />'
        });
var format_50yearEvent20712100m_4 = new ol.format.GeoJSON();
var features_50yearEvent20712100m_4 = format_50yearEvent20712100m_4.readFeatures(json_50yearEvent20712100m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_50yearEvent20712100m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_50yearEvent20712100m_4.addFeatures(features_50yearEvent20712100m_4);
var lyr_50yearEvent20712100m_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_50yearEvent20712100m_4, 
                style: style_50yearEvent20712100m_4,
                interactive: true,
    title: '50 year Event 2071-2100 (m)<br />\
    <img src="styles/legend/50yearEvent20712100m_4_0.png" />  0.0 - 0.2 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_1.png" />  0.2 - 0.4 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_2.png" />  0.4 - 0.6 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_3.png" />  0.6 - 0.8 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_4.png" />  0.8 - 1.0 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_5.png" />  1.0 - 1.3 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_6.png" />  1.3 - 1.5 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_7.png" />  1.5 - 1.7 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_8.png" />  1.7 - 1.9 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_9.png" />  1.9 - 2.1 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_10.png" />  2.1 - 2.3 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_11.png" />  2.3 - 2.5 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_12.png" />  2.5 - 2.7 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_13.png" />  2.7 - 2.9 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_14.png" />  2.9 - 3.1 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_15.png" />  3.1 - 3.3 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_16.png" />  3.3 - 3.5 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_17.png" />  3.5 - 3.7 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_18.png" />  3.7 - 3.9 <br />\
    <img src="styles/legend/50yearEvent20712100m_4_19.png" />  3.9 - 4.2 <br />'
        });
var format_100yearEvent20112040m_5 = new ol.format.GeoJSON();
var features_100yearEvent20112040m_5 = format_100yearEvent20112040m_5.readFeatures(json_100yearEvent20112040m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_100yearEvent20112040m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100yearEvent20112040m_5.addFeatures(features_100yearEvent20112040m_5);
var lyr_100yearEvent20112040m_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_100yearEvent20112040m_5, 
                style: style_100yearEvent20112040m_5,
                interactive: true,
    title: '100 year Event 2011-2040 (m)<br />\
    <img src="styles/legend/100yearEvent20112040m_5_0.png" />  0.0 - 0.2 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_1.png" />  0.2 - 0.4 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_2.png" />  0.4 - 0.6 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_3.png" />  0.6 - 0.8 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_4.png" />  0.8 - 1.0 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_5.png" />  1.0 - 1.1 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_6.png" />  1.1 - 1.3 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_7.png" />  1.3 - 1.5 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_8.png" />  1.5 - 1.7 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_9.png" />  1.7 - 1.9 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_10.png" />  1.9 - 2.1 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_11.png" />  2.1 - 2.3 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_12.png" />  2.3 - 2.5 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_13.png" />  2.5 - 2.7 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_14.png" />  2.7 - 2.8 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_15.png" />  2.8 - 3.0 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_16.png" />  3.0 - 3.2 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_17.png" />  3.2 - 3.4 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_18.png" />  3.4 - 3.6 <br />\
    <img src="styles/legend/100yearEvent20112040m_5_19.png" />  3.6 - 3.8 <br />'
        });
var format_100yearEvent20412070m_6 = new ol.format.GeoJSON();
var features_100yearEvent20412070m_6 = format_100yearEvent20412070m_6.readFeatures(json_100yearEvent20412070m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_100yearEvent20412070m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100yearEvent20412070m_6.addFeatures(features_100yearEvent20412070m_6);
var lyr_100yearEvent20412070m_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_100yearEvent20412070m_6, 
                style: style_100yearEvent20412070m_6,
                interactive: true,
    title: '100 year Event 2041-2070 (m)<br />\
    <img src="styles/legend/100yearEvent20412070m_6_0.png" />  0.0 - 0.2 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_1.png" />  0.2 - 0.4 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_2.png" />  0.4 - 0.6 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_3.png" />  0.6 - 0.8 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_4.png" />  0.8 - 1.0 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_5.png" />  1.0 - 1.2 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_6.png" />  1.2 - 1.4 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_7.png" />  1.4 - 1.6 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_8.png" />  1.6 - 1.8 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_9.png" />  1.8 - 2.0 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_10.png" />  2.0 - 2.2 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_11.png" />  2.2 - 2.4 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_12.png" />  2.4 - 2.6 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_13.png" />  2.6 - 2.8 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_14.png" />  2.8 - 3.0 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_15.png" />  3.0 - 3.2 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_16.png" />  3.2 - 3.4 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_17.png" />  3.4 - 3.6 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_18.png" />  3.6 - 3.8 <br />\
    <img src="styles/legend/100yearEvent20412070m_6_19.png" />  3.8 - 4.0 <br />'
        });
var format_100yearEvent20712100m_7 = new ol.format.GeoJSON();
var features_100yearEvent20712100m_7 = format_100yearEvent20712100m_7.readFeatures(json_100yearEvent20712100m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_100yearEvent20712100m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100yearEvent20712100m_7.addFeatures(features_100yearEvent20712100m_7);
var lyr_100yearEvent20712100m_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_100yearEvent20712100m_7, 
                style: style_100yearEvent20712100m_7,
                interactive: true,
    title: '100 year Event 2071-2100 (m)<br />\
    <img src="styles/legend/100yearEvent20712100m_7_0.png" />  0.0 - 0.2 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_1.png" />  0.2 - 0.5 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_2.png" />  0.5 - 0.7 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_3.png" />  0.7 - 0.9 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_4.png" />  0.9 - 1.2 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_5.png" />  1.2 - 1.4 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_6.png" />  1.4 - 1.6 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_7.png" />  1.6 - 1.8 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_8.png" />  1.8 - 2.1 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_9.png" />  2.1 - 2.3 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_10.png" />  2.3 - 2.5 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_11.png" />  2.5 - 2.8 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_12.png" />  2.8 - 3.0 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_13.png" />  3.0 - 3.2 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_14.png" />  3.2 - 3.4 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_15.png" />  3.4 - 3.7 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_16.png" />  3.7 - 3.9 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_17.png" />  3.9 - 4.1 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_18.png" />  4.1 - 4.4 <br />\
    <img src="styles/legend/100yearEvent20712100m_7_19.png" />  4.4 - 4.6 <br />'
        });
var format_2ndofJuly2011FlowDepthm_8 = new ol.format.GeoJSON();
var features_2ndofJuly2011FlowDepthm_8 = format_2ndofJuly2011FlowDepthm_8.readFeatures(json_2ndofJuly2011FlowDepthm_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_2ndofJuly2011FlowDepthm_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2ndofJuly2011FlowDepthm_8.addFeatures(features_2ndofJuly2011FlowDepthm_8);
var lyr_2ndofJuly2011FlowDepthm_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2ndofJuly2011FlowDepthm_8, 
                style: style_2ndofJuly2011FlowDepthm_8,
                interactive: true,
    title: '2nd of July 2011 Flow Depth (m)<br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_0.png" />  0.0 - 0.2 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_1.png" />  0.2 - 0.3 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_2.png" />  0.3 - 0.5 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_3.png" />  0.5 - 0.7 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_4.png" />  0.7 - 0.8 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_5.png" />  0.8 - 1.0 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_6.png" />  1.0 - 1.2 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_7.png" />  1.2 - 1.3 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_8.png" />  1.3 - 1.5 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_9.png" />  1.5 - 1.7 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_10.png" />  1.7 - 1.8 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_11.png" />  1.8 - 2.0 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_12.png" />  2.0 - 2.2 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_13.png" />  2.2 - 2.3 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_14.png" />  2.3 - 2.5 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_15.png" />  2.5 - 2.6 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_16.png" />  2.6 - 2.8 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_17.png" />  2.8 - 3.0 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_18.png" />  3.0 - 3.1 <br />\
    <img src="styles/legend/2ndofJuly2011FlowDepthm_8_19.png" />  3.1 - 3.3 <br />'
        });
var format_100yearEventHazardMap_9 = new ol.format.GeoJSON();
var features_100yearEventHazardMap_9 = format_100yearEventHazardMap_9.readFeatures(json_100yearEventHazardMap_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_100yearEventHazardMap_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100yearEventHazardMap_9.addFeatures(features_100yearEventHazardMap_9);
var lyr_100yearEventHazardMap_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_100yearEventHazardMap_9, 
                style: style_100yearEventHazardMap_9,
                interactive: true,
    title: '100 year Event Hazard Map<br />\
    <img src="styles/legend/100yearEventHazardMap_9_0.png" /> Low<br />\
    <img src="styles/legend/100yearEventHazardMap_9_1.png" /> Medium<br />\
    <img src="styles/legend/100yearEventHazardMap_9_2.png" /> High<br />'
        });
var format_50yearEventHazardMap_10 = new ol.format.GeoJSON();
var features_50yearEventHazardMap_10 = format_50yearEventHazardMap_10.readFeatures(json_50yearEventHazardMap_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_50yearEventHazardMap_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_50yearEventHazardMap_10.addFeatures(features_50yearEventHazardMap_10);
var lyr_50yearEventHazardMap_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_50yearEventHazardMap_10, 
                style: style_50yearEventHazardMap_10,
                interactive: true,
    title: '50 year Event Hazard Map <br />\
    <img src="styles/legend/50yearEventHazardMap_10_0.png" /> Low <br />\
    <img src="styles/legend/50yearEventHazardMap_10_1.png" /> Medium <br />\
    <img src="styles/legend/50yearEventHazardMap_10_2.png" /> High<br />'
        });
var format_2ndofJuly2011HazardMap_11 = new ol.format.GeoJSON();
var features_2ndofJuly2011HazardMap_11 = format_2ndofJuly2011HazardMap_11.readFeatures(json_2ndofJuly2011HazardMap_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25832'});
var jsonSource_2ndofJuly2011HazardMap_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2ndofJuly2011HazardMap_11.addFeatures(features_2ndofJuly2011HazardMap_11);
var lyr_2ndofJuly2011HazardMap_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2ndofJuly2011HazardMap_11, 
                style: style_2ndofJuly2011HazardMap_11,
                interactive: true,
    title: '2nd of July 2011 Hazard Map<br />\
    <img src="styles/legend/2ndofJuly2011HazardMap_11_0.png" /> Low<br />\
    <img src="styles/legend/2ndofJuly2011HazardMap_11_1.png" /> Medium<br />\
    <img src="styles/legend/2ndofJuly2011HazardMap_11_2.png" /> High<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(false);lyr_50yearEvent20112040m_2.setVisible(false);lyr_50yearEvent20412070m_3.setVisible(false);lyr_50yearEvent20712100m_4.setVisible(false);lyr_100yearEvent20112040m_5.setVisible(false);lyr_100yearEvent20412070m_6.setVisible(false);lyr_100yearEvent20712100m_7.setVisible(false);lyr_2ndofJuly2011FlowDepthm_8.setVisible(false);lyr_100yearEventHazardMap_9.setVisible(false);lyr_50yearEventHazardMap_10.setVisible(false);lyr_2ndofJuly2011HazardMap_11.setVisible(false);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleHybrid_1,lyr_50yearEvent20112040m_2,lyr_50yearEvent20412070m_3,lyr_50yearEvent20712100m_4,lyr_100yearEvent20112040m_5,lyr_100yearEvent20412070m_6,lyr_100yearEvent20712100m_7,lyr_2ndofJuly2011FlowDepthm_8,lyr_100yearEventHazardMap_9,lyr_50yearEventHazardMap_10,lyr_2ndofJuly2011HazardMap_11];
lyr_50yearEvent20112040m_2.set('fieldAliases', {'Flow Depth': 'Flow Depth', 'ID': 'ID', });
lyr_50yearEvent20412070m_3.set('fieldAliases', {'Flow Depth': 'Flow Depth', 'ID': 'ID', });
lyr_50yearEvent20712100m_4.set('fieldAliases', {'Flow Depth': 'Flow Depth', 'ID': 'ID', });
lyr_100yearEvent20112040m_5.set('fieldAliases', {'Flow Depth': 'Flow Depth', 'ID': 'ID', });
lyr_100yearEvent20412070m_6.set('fieldAliases', {'Flow Depth': 'Flow Depth', 'ID': 'ID', });
lyr_100yearEvent20712100m_7.set('fieldAliases', {'Flow Depth': 'Flow Depth', 'ID': 'ID', });
lyr_2ndofJuly2011FlowDepthm_8.set('fieldAliases', {'Flow Depth': 'Flow Depth', 'ID': 'ID', });
lyr_100yearEventHazardMap_9.set('fieldAliases', {'Hazard Lev': 'Hazard Lev', 'ID': 'ID', });
lyr_50yearEventHazardMap_10.set('fieldAliases', {'Hazard Lev': 'Hazard Lev', 'ID': 'ID', });
lyr_2ndofJuly2011HazardMap_11.set('fieldAliases', {'Hazard Lev': 'Hazard Lev', 'ID': 'ID', });
lyr_50yearEvent20112040m_2.set('fieldImages', {'Flow Depth': 'TextEdit', 'ID': 'TextEdit', });
lyr_50yearEvent20412070m_3.set('fieldImages', {'Flow Depth': 'TextEdit', 'ID': 'TextEdit', });
lyr_50yearEvent20712100m_4.set('fieldImages', {'Flow Depth': 'TextEdit', 'ID': 'TextEdit', });
lyr_100yearEvent20112040m_5.set('fieldImages', {'Flow Depth': 'TextEdit', 'ID': 'TextEdit', });
lyr_100yearEvent20412070m_6.set('fieldImages', {'Flow Depth': 'TextEdit', 'ID': 'TextEdit', });
lyr_100yearEvent20712100m_7.set('fieldImages', {'Flow Depth': 'TextEdit', 'ID': 'TextEdit', });
lyr_2ndofJuly2011FlowDepthm_8.set('fieldImages', {'Flow Depth': 'TextEdit', 'ID': 'TextEdit', });
lyr_100yearEventHazardMap_9.set('fieldImages', {'Hazard Lev': 'TextEdit', 'ID': 'TextEdit', });
lyr_50yearEventHazardMap_10.set('fieldImages', {'Hazard Lev': 'TextEdit', 'ID': 'TextEdit', });
lyr_2ndofJuly2011HazardMap_11.set('fieldImages', {'Hazard Lev': 'TextEdit', 'ID': 'TextEdit', });
lyr_50yearEvent20112040m_2.set('fieldLabels', {'Flow Depth': 'inline label', 'ID': 'no label', });
lyr_50yearEvent20412070m_3.set('fieldLabels', {'Flow Depth': 'inline label', 'ID': 'no label', });
lyr_50yearEvent20712100m_4.set('fieldLabels', {'Flow Depth': 'inline label', 'ID': 'no label', });
lyr_100yearEvent20112040m_5.set('fieldLabels', {'Flow Depth': 'inline label', 'ID': 'no label', });
lyr_100yearEvent20412070m_6.set('fieldLabels', {'Flow Depth': 'inline label', 'ID': 'no label', });
lyr_100yearEvent20712100m_7.set('fieldLabels', {'Flow Depth': 'inline label', 'ID': 'no label', });
lyr_2ndofJuly2011FlowDepthm_8.set('fieldLabels', {'Flow Depth': 'inline label', 'ID': 'no label', });
lyr_100yearEventHazardMap_9.set('fieldLabels', {'Hazard Lev': 'inline label', 'ID': 'no label', });
lyr_50yearEventHazardMap_10.set('fieldLabels', {'Hazard Lev': 'inline label', 'ID': 'no label', });
lyr_2ndofJuly2011HazardMap_11.set('fieldLabels', {'Hazard Lev': 'inline label', 'ID': 'no label', });
lyr_2ndofJuly2011HazardMap_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});