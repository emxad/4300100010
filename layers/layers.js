var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_loc4300100010_1 = new ol.format.GeoJSON();
var features_loc4300100010_1 = format_loc4300100010_1.readFeatures(json_loc4300100010_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_loc4300100010_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_loc4300100010_1.addFeatures(features_loc4300100010_1);
var lyr_loc4300100010_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_loc4300100010_1, 
                style: style_loc4300100010_1,
                popuplayertitle: 'loc-4300100010',
                interactive: true,
                title: '<img src="styles/legend/loc4300100010_1.png" /> loc-4300100010'
            });
var format_to4300100010_2 = new ol.format.GeoJSON();
var features_to4300100010_2 = format_to4300100010_2.readFeatures(json_to4300100010_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_to4300100010_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_to4300100010_2.addFeatures(features_to4300100010_2);
var lyr_to4300100010_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_to4300100010_2, 
                style: style_to4300100010_2,
                popuplayertitle: 'to4300100010',
                interactive: true,
                title: '<img src="styles/legend/to4300100010_2.png" /> to4300100010'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_loc4300100010_1.setVisible(true);lyr_to4300100010_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_loc4300100010_1,lyr_to4300100010_2];
lyr_loc4300100010_1.set('fieldAliases', {'id': 'id', });
lyr_to4300100010_2.set('fieldAliases', {'id': 'id', });
lyr_loc4300100010_1.set('fieldImages', {'id': 'TextEdit', });
lyr_to4300100010_2.set('fieldImages', {'id': 'TextEdit', });
lyr_loc4300100010_1.set('fieldLabels', {'id': 'no label', });
lyr_to4300100010_2.set('fieldLabels', {'id': 'no label', });
lyr_to4300100010_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});