var wms_layers = [];


        var lyr_CartoLightNoLabels_0 = new ol.layer.Tile({
            'title': 'Carto Light No Labels',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_UADstickerlistSheet1_1 = new ol.format.GeoJSON();
var features_UADstickerlistSheet1_1 = format_UADstickerlistSheet1_1.readFeatures(json_UADstickerlistSheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UADstickerlistSheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UADstickerlistSheet1_1.addFeatures(features_UADstickerlistSheet1_1);
var lyr_UADstickerlistSheet1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UADstickerlistSheet1_1, 
                style: style_UADstickerlistSheet1_1,
                interactive: true,
    title: 'UAD sticker list - Sheet1<br />\
    <img src="styles/legend/UADstickerlistSheet1_1_0.png" /> Non participant<br />\
    <img src="styles/legend/UADstickerlistSheet1_1_1.png" /> UAD Participant<br />'
        });

lyr_CartoLightNoLabels_0.setVisible(true);lyr_UADstickerlistSheet1_1.setVisible(true);
var layersList = [lyr_CartoLightNoLabels_0,lyr_UADstickerlistSheet1_1];
lyr_UADstickerlistSheet1_1.set('fieldAliases', {'ID': 'ID', 'Business': 'Business', 'Filled out by': 'Filled out by', 'Verified': 'Verified', 'Address': 'Address', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Notes': 'Notes', });
lyr_UADstickerlistSheet1_1.set('fieldImages', {'ID': 'Range', 'Business': 'TextEdit', 'Filled out by': 'TextEdit', 'Verified': 'TextEdit', 'Address': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Notes': 'TextEdit', });
lyr_UADstickerlistSheet1_1.set('fieldLabels', {'ID': 'no label', 'Business': 'no label', 'Filled out by': 'no label', 'Verified': 'no label', 'Address': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Notes': 'no label', });
lyr_UADstickerlistSheet1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});