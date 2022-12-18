var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_hotel_SemarangSelatan_1 = new ol.format.GeoJSON();
var features_building_hotel_SemarangSelatan_1 = format_building_hotel_SemarangSelatan_1.readFeatures(json_building_hotel_SemarangSelatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_hotel_SemarangSelatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_hotel_SemarangSelatan_1.addFeatures(features_building_hotel_SemarangSelatan_1);
var lyr_building_hotel_SemarangSelatan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_hotel_SemarangSelatan_1, 
                style: style_building_hotel_SemarangSelatan_1,
                interactive: true,
                title: '<img src="styles/legend/building_hotel_SemarangSelatan_1.png" /> building_hotel_Semarang Selatan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_hotel_SemarangSelatan_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_hotel_SemarangSelatan_1];
lyr_building_hotel_SemarangSelatan_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tourism': 'tourism', 'name': 'name', });
lyr_building_hotel_SemarangSelatan_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'tourism': '', 'name': '', });
lyr_building_hotel_SemarangSelatan_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'tourism': 'no label', 'name': 'no label', });
lyr_building_hotel_SemarangSelatan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});