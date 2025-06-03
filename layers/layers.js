var wms_layers = [];

var lyr_Ortofotocolor2024provisional_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_provisional",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofoto color 2024 (provisional)',
                            popuplayertitle: 'Ortofoto color 2024 (provisional)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofotocolor2024provisional_0, 0]);
var format_GML_ParcelasCadastralParcel_1 = new ol.format.GeoJSON();
var features_GML_ParcelasCadastralParcel_1 = format_GML_ParcelasCadastralParcel_1.readFeatures(json_GML_ParcelasCadastralParcel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GML_ParcelasCadastralParcel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GML_ParcelasCadastralParcel_1.addFeatures(features_GML_ParcelasCadastralParcel_1);
var lyr_GML_ParcelasCadastralParcel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GML_ParcelasCadastralParcel_1, 
                style: style_GML_ParcelasCadastralParcel_1,
                popuplayertitle: 'GML_Parcelas — CadastralParcel',
                interactive: false,
                title: '<img src="styles/legend/GML_ParcelasCadastralParcel_1.png" /> GML_Parcelas — CadastralParcel'
            });
var format_EmpresespolgondEntrevies_2 = new ol.format.GeoJSON();
var features_EmpresespolgondEntrevies_2 = format_EmpresespolgondEntrevies_2.readFeatures(json_EmpresespolgondEntrevies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpresespolgondEntrevies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpresespolgondEntrevies_2.addFeatures(features_EmpresespolgondEntrevies_2);
var lyr_EmpresespolgondEntrevies_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpresespolgondEntrevies_2, 
                style: style_EmpresespolgondEntrevies_2,
                popuplayertitle: 'Empreses polígon d\'Entrevies',
                interactive: true,
                title: '<img src="styles/legend/EmpresespolgondEntrevies_2.png" /> Empreses polígon d\'Entrevies'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_Ortofotocolor2024provisional_0,],
                                fold: 'open',
                                title: 'Mapas de fondo'});

lyr_Ortofotocolor2024provisional_0.setVisible(true);lyr_GML_ParcelasCadastralParcel_1.setVisible(true);lyr_EmpresespolgondEntrevies_2.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_GML_ParcelasCadastralParcel_1,lyr_EmpresespolgondEntrevies_2];
lyr_GML_ParcelasCadastralParcel_1.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_uom': 'areaValue_uom', 'beginLifespanVersion': 'beginLifespanVersion', 'endLifespanVersion': 'endLifespanVersion', 'localId': 'localId', 'namespace': 'namespace', 'label': 'label', 'nationalCadastralReference': 'nationalCadastralReference', 'pos': 'pos', });
lyr_EmpresespolgondEntrevies_2.set('fieldAliases', {'id': 'id', '._NOM SABI': '._NOM SABI', '._NOM COMERCIAL': '._NOM COMERCIAL', '._NIF': '._NIF', '._IAE': '._IAE', '._ADREÇA': '._ADREÇA', '._TELÈFON': '._TELÈFON', '._TREBALLADORS': '._TREBALLADORS', '._INGRESSOS EXPLOTACIÓ €': '._INGRESSOS EXPLOTACIÓ €', '._GEOLOCALITZACIÓ': '._GEOLOCALITZACIÓ', '._WEB': '._WEB', });
lyr_GML_ParcelasCadastralParcel_1.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'Range', 'areaValue_uom': 'TextEdit', 'beginLifespanVersion': 'TextEdit', 'endLifespanVersion': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'label': 'TextEdit', 'nationalCadastralReference': 'TextEdit', 'pos': 'TextEdit', });
lyr_EmpresespolgondEntrevies_2.set('fieldImages', {'id': 'TextEdit', '._NOM SABI': 'TextEdit', '._NOM COMERCIAL': 'TextEdit', '._NIF': 'TextEdit', '._IAE': 'TextEdit', '._ADREÇA': 'TextEdit', '._TELÈFON': 'TextEdit', '._TREBALLADORS': 'TextEdit', '._INGRESSOS EXPLOTACIÓ €': 'TextEdit', '._GEOLOCALITZACIÓ': 'TextEdit', '._WEB': 'TextEdit', });
lyr_GML_ParcelasCadastralParcel_1.set('fieldLabels', {'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_uom': 'no label', 'beginLifespanVersion': 'no label', 'endLifespanVersion': 'no label', 'localId': 'no label', 'namespace': 'no label', 'label': 'no label', 'nationalCadastralReference': 'no label', 'pos': 'no label', });
lyr_EmpresespolgondEntrevies_2.set('fieldLabels', {'id': 'hidden field', '._NOM SABI': 'header label - always visible', '._NOM COMERCIAL': 'header label - always visible', '._NIF': 'header label - always visible', '._IAE': 'header label - always visible', '._ADREÇA': 'header label - always visible', '._TELÈFON': 'header label - always visible', '._TREBALLADORS': 'header label - always visible', '._INGRESSOS EXPLOTACIÓ €': 'header label - always visible', '._GEOLOCALITZACIÓ': 'header label - always visible', '._WEB': 'header label - always visible', });
lyr_EmpresespolgondEntrevies_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});