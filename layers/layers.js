var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Campus_boundary_1 = new ol.format.GeoJSON();
var features_Campus_boundary_1 = format_Campus_boundary_1.readFeatures(json_Campus_boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campus_boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campus_boundary_1.addFeatures(features_Campus_boundary_1);
var lyr_Campus_boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Campus_boundary_1, 
                style: style_Campus_boundary_1,
                popuplayertitle: 'Campus_boundary',
                interactive: false,
                title: '<img src="styles/legend/Campus_boundary_1.png" /> Campus_boundary'
            });
var format_Building_2 = new ol.format.GeoJSON();
var features_Building_2 = format_Building_2.readFeatures(json_Building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_2.addFeatures(features_Building_2);
var lyr_Building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_2, 
                style: style_Building_2,
                popuplayertitle: 'Building',
                interactive: true,
                title: '<img src="styles/legend/Building_2.png" /> Building'
            });
var format_Building2_3 = new ol.format.GeoJSON();
var features_Building2_3 = format_Building2_3.readFeatures(json_Building2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building2_3.addFeatures(features_Building2_3);
var lyr_Building2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building2_3, 
                style: style_Building2_3,
                popuplayertitle: 'Building2',
                interactive: true,
                title: '<img src="styles/legend/Building2_3.png" /> Building2'
            });
var format_Building3_4 = new ol.format.GeoJSON();
var features_Building3_4 = format_Building3_4.readFeatures(json_Building3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building3_4.addFeatures(features_Building3_4);
var lyr_Building3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building3_4, 
                style: style_Building3_4,
                popuplayertitle: 'Building3',
                interactive: true,
                title: '<img src="styles/legend/Building3_4.png" /> Building3'
            });
var format_Building4_5 = new ol.format.GeoJSON();
var features_Building4_5 = format_Building4_5.readFeatures(json_Building4_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building4_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building4_5.addFeatures(features_Building4_5);
var lyr_Building4_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building4_5, 
                style: style_Building4_5,
                popuplayertitle: 'Building4',
                interactive: true,
                title: '<img src="styles/legend/Building4_5.png" /> Building4'
            });
var format_building5_6 = new ol.format.GeoJSON();
var features_building5_6 = format_building5_6.readFeatures(json_building5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building5_6.addFeatures(features_building5_6);
var lyr_building5_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building5_6, 
                style: style_building5_6,
                popuplayertitle: 'building5',
                interactive: true,
                title: '<img src="styles/legend/building5_6.png" /> building5'
            });
var format_building6_7 = new ol.format.GeoJSON();
var features_building6_7 = format_building6_7.readFeatures(json_building6_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building6_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building6_7.addFeatures(features_building6_7);
var lyr_building6_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building6_7, 
                style: style_building6_7,
                popuplayertitle: 'building6',
                interactive: true,
                title: '<img src="styles/legend/building6_7.png" /> building6'
            });
var format_building7_8 = new ol.format.GeoJSON();
var features_building7_8 = format_building7_8.readFeatures(json_building7_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building7_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building7_8.addFeatures(features_building7_8);
var lyr_building7_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building7_8, 
                style: style_building7_8,
                popuplayertitle: 'building7',
                interactive: true,
                title: '<img src="styles/legend/building7_8.png" /> building7'
            });
var format_building8_9 = new ol.format.GeoJSON();
var features_building8_9 = format_building8_9.readFeatures(json_building8_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building8_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building8_9.addFeatures(features_building8_9);
var lyr_building8_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building8_9, 
                style: style_building8_9,
                popuplayertitle: 'building8',
                interactive: true,
                title: '<img src="styles/legend/building8_9.png" /> building8'
            });
var format_building9_10 = new ol.format.GeoJSON();
var features_building9_10 = format_building9_10.readFeatures(json_building9_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building9_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building9_10.addFeatures(features_building9_10);
var lyr_building9_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building9_10, 
                style: style_building9_10,
                popuplayertitle: 'building9',
                interactive: true,
                title: '<img src="styles/legend/building9_10.png" /> building9'
            });
var format_building10_11 = new ol.format.GeoJSON();
var features_building10_11 = format_building10_11.readFeatures(json_building10_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building10_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building10_11.addFeatures(features_building10_11);
var lyr_building10_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building10_11, 
                style: style_building10_11,
                popuplayertitle: 'building10',
                interactive: true,
                title: '<img src="styles/legend/building10_11.png" /> building10'
            });
var format_building11_12 = new ol.format.GeoJSON();
var features_building11_12 = format_building11_12.readFeatures(json_building11_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building11_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building11_12.addFeatures(features_building11_12);
var lyr_building11_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building11_12, 
                style: style_building11_12,
                popuplayertitle: 'building11',
                interactive: true,
                title: '<img src="styles/legend/building11_12.png" /> building11'
            });
var format_building12_13 = new ol.format.GeoJSON();
var features_building12_13 = format_building12_13.readFeatures(json_building12_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building12_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building12_13.addFeatures(features_building12_13);
var lyr_building12_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building12_13, 
                style: style_building12_13,
                popuplayertitle: 'building12',
                interactive: true,
                title: '<img src="styles/legend/building12_13.png" /> building12'
            });
var format_building13_14 = new ol.format.GeoJSON();
var features_building13_14 = format_building13_14.readFeatures(json_building13_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building13_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building13_14.addFeatures(features_building13_14);
var lyr_building13_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building13_14, 
                style: style_building13_14,
                popuplayertitle: 'building13',
                interactive: true,
                title: '<img src="styles/legend/building13_14.png" /> building13'
            });
var format_building14_15 = new ol.format.GeoJSON();
var features_building14_15 = format_building14_15.readFeatures(json_building14_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building14_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building14_15.addFeatures(features_building14_15);
var lyr_building14_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building14_15, 
                style: style_building14_15,
                popuplayertitle: 'building14',
                interactive: true,
                title: '<img src="styles/legend/building14_15.png" /> building14'
            });
var format_Pitch_16 = new ol.format.GeoJSON();
var features_Pitch_16 = format_Pitch_16.readFeatures(json_Pitch_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pitch_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pitch_16.addFeatures(features_Pitch_16);
var lyr_Pitch_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pitch_16, 
                style: style_Pitch_16,
                popuplayertitle: 'Pitch',
                interactive: true,
                title: '<img src="styles/legend/Pitch_16.png" /> Pitch'
            });
var format_Pitch2_17 = new ol.format.GeoJSON();
var features_Pitch2_17 = format_Pitch2_17.readFeatures(json_Pitch2_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pitch2_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pitch2_17.addFeatures(features_Pitch2_17);
var lyr_Pitch2_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pitch2_17, 
                style: style_Pitch2_17,
                popuplayertitle: 'Pitch2',
                interactive: true,
                title: '<img src="styles/legend/Pitch2_17.png" /> Pitch2'
            });
var format_Building15_18 = new ol.format.GeoJSON();
var features_Building15_18 = format_Building15_18.readFeatures(json_Building15_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building15_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building15_18.addFeatures(features_Building15_18);
var lyr_Building15_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building15_18, 
                style: style_Building15_18,
                popuplayertitle: 'Building15',
                interactive: true,
                title: '<img src="styles/legend/Building15_18.png" /> Building15'
            });
var format_building16_19 = new ol.format.GeoJSON();
var features_building16_19 = format_building16_19.readFeatures(json_building16_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building16_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building16_19.addFeatures(features_building16_19);
var lyr_building16_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building16_19, 
                style: style_building16_19,
                popuplayertitle: 'building16',
                interactive: true,
                title: '<img src="styles/legend/building16_19.png" /> building16'
            });
var format_building17_20 = new ol.format.GeoJSON();
var features_building17_20 = format_building17_20.readFeatures(json_building17_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building17_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building17_20.addFeatures(features_building17_20);
var lyr_building17_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building17_20, 
                style: style_building17_20,
                popuplayertitle: 'building17',
                interactive: false,
                title: '<img src="styles/legend/building17_20.png" /> building17'
            });
var format_building18_21 = new ol.format.GeoJSON();
var features_building18_21 = format_building18_21.readFeatures(json_building18_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building18_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building18_21.addFeatures(features_building18_21);
var lyr_building18_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building18_21, 
                style: style_building18_21,
                popuplayertitle: 'building18.',
                interactive: false,
                title: '<img src="styles/legend/building18_21.png" /> building18.'
            });
var format_building19_22 = new ol.format.GeoJSON();
var features_building19_22 = format_building19_22.readFeatures(json_building19_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building19_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building19_22.addFeatures(features_building19_22);
var lyr_building19_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building19_22, 
                style: style_building19_22,
                popuplayertitle: 'building19',
                interactive: false,
                title: '<img src="styles/legend/building19_22.png" /> building19'
            });
var format_building20_23 = new ol.format.GeoJSON();
var features_building20_23 = format_building20_23.readFeatures(json_building20_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building20_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building20_23.addFeatures(features_building20_23);
var lyr_building20_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building20_23, 
                style: style_building20_23,
                popuplayertitle: 'building20',
                interactive: false,
                title: '<img src="styles/legend/building20_23.png" /> building20'
            });
var format_building21_24 = new ol.format.GeoJSON();
var features_building21_24 = format_building21_24.readFeatures(json_building21_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building21_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building21_24.addFeatures(features_building21_24);
var lyr_building21_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building21_24, 
                style: style_building21_24,
                popuplayertitle: 'building21',
                interactive: false,
                title: '<img src="styles/legend/building21_24.png" /> building21'
            });
var format_building22shp_25 = new ol.format.GeoJSON();
var features_building22shp_25 = format_building22shp_25.readFeatures(json_building22shp_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building22shp_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building22shp_25.addFeatures(features_building22shp_25);
var lyr_building22shp_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building22shp_25, 
                style: style_building22shp_25,
                popuplayertitle: 'building22shp',
                interactive: false,
                title: '<img src="styles/legend/building22shp_25.png" /> building22shp'
            });
var format_building23_26 = new ol.format.GeoJSON();
var features_building23_26 = format_building23_26.readFeatures(json_building23_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building23_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building23_26.addFeatures(features_building23_26);
var lyr_building23_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building23_26, 
                style: style_building23_26,
                popuplayertitle: 'building23',
                interactive: false,
                title: '<img src="styles/legend/building23_26.png" /> building23'
            });
var format_building24_27 = new ol.format.GeoJSON();
var features_building24_27 = format_building24_27.readFeatures(json_building24_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building24_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building24_27.addFeatures(features_building24_27);
var lyr_building24_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building24_27, 
                style: style_building24_27,
                popuplayertitle: 'building24',
                interactive: false,
                title: '<img src="styles/legend/building24_27.png" /> building24'
            });
var format_Building25_28 = new ol.format.GeoJSON();
var features_Building25_28 = format_Building25_28.readFeatures(json_Building25_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building25_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building25_28.addFeatures(features_Building25_28);
var lyr_Building25_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building25_28, 
                style: style_Building25_28,
                popuplayertitle: 'Building25',
                interactive: false,
                title: '<img src="styles/legend/Building25_28.png" /> Building25'
            });
var format_building26_29 = new ol.format.GeoJSON();
var features_building26_29 = format_building26_29.readFeatures(json_building26_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building26_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building26_29.addFeatures(features_building26_29);
var lyr_building26_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building26_29, 
                style: style_building26_29,
                popuplayertitle: 'building26',
                interactive: false,
                title: '<img src="styles/legend/building26_29.png" /> building26'
            });
var format_Building27_30 = new ol.format.GeoJSON();
var features_Building27_30 = format_Building27_30.readFeatures(json_Building27_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building27_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building27_30.addFeatures(features_Building27_30);
var lyr_Building27_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building27_30, 
                style: style_Building27_30,
                popuplayertitle: 'Building27',
                interactive: false,
                title: '<img src="styles/legend/Building27_30.png" /> Building27'
            });
var format_Building28_31 = new ol.format.GeoJSON();
var features_Building28_31 = format_Building28_31.readFeatures(json_Building28_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building28_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building28_31.addFeatures(features_Building28_31);
var lyr_Building28_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building28_31, 
                style: style_Building28_31,
                popuplayertitle: 'Building28',
                interactive: false,
                title: '<img src="styles/legend/Building28_31.png" /> Building28'
            });
var format_Building29_32 = new ol.format.GeoJSON();
var features_Building29_32 = format_Building29_32.readFeatures(json_Building29_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building29_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building29_32.addFeatures(features_Building29_32);
var lyr_Building29_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building29_32, 
                style: style_Building29_32,
                popuplayertitle: 'Building29',
                interactive: false,
                title: '<img src="styles/legend/Building29_32.png" /> Building29'
            });
var format_building30_33 = new ol.format.GeoJSON();
var features_building30_33 = format_building30_33.readFeatures(json_building30_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building30_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building30_33.addFeatures(features_building30_33);
var lyr_building30_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building30_33, 
                style: style_building30_33,
                popuplayertitle: 'building30',
                interactive: false,
                title: '<img src="styles/legend/building30_33.png" /> building30'
            });
var format_building31_34 = new ol.format.GeoJSON();
var features_building31_34 = format_building31_34.readFeatures(json_building31_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building31_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building31_34.addFeatures(features_building31_34);
var lyr_building31_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building31_34, 
                style: style_building31_34,
                popuplayertitle: 'building31',
                interactive: false,
                title: '<img src="styles/legend/building31_34.png" /> building31'
            });
var format_Building32_35 = new ol.format.GeoJSON();
var features_Building32_35 = format_Building32_35.readFeatures(json_Building32_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building32_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building32_35.addFeatures(features_Building32_35);
var lyr_Building32_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building32_35, 
                style: style_Building32_35,
                popuplayertitle: 'Building32',
                interactive: false,
                title: '<img src="styles/legend/Building32_35.png" /> Building32'
            });
var format_Building33_36 = new ol.format.GeoJSON();
var features_Building33_36 = format_Building33_36.readFeatures(json_Building33_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building33_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building33_36.addFeatures(features_Building33_36);
var lyr_Building33_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building33_36, 
                style: style_Building33_36,
                popuplayertitle: 'Building33',
                interactive: false,
                title: '<img src="styles/legend/Building33_36.png" /> Building33'
            });
var format_building34_37 = new ol.format.GeoJSON();
var features_building34_37 = format_building34_37.readFeatures(json_building34_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building34_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building34_37.addFeatures(features_building34_37);
var lyr_building34_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building34_37, 
                style: style_building34_37,
                popuplayertitle: 'building34',
                interactive: false,
                title: '<img src="styles/legend/building34_37.png" /> building34'
            });
var format_building35_38 = new ol.format.GeoJSON();
var features_building35_38 = format_building35_38.readFeatures(json_building35_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building35_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building35_38.addFeatures(features_building35_38);
var lyr_building35_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building35_38, 
                style: style_building35_38,
                popuplayertitle: 'building35',
                interactive: false,
                title: '<img src="styles/legend/building35_38.png" /> building35'
            });
var format_building36_39 = new ol.format.GeoJSON();
var features_building36_39 = format_building36_39.readFeatures(json_building36_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building36_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building36_39.addFeatures(features_building36_39);
var lyr_building36_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building36_39, 
                style: style_building36_39,
                popuplayertitle: 'building36',
                interactive: false,
                title: '<img src="styles/legend/building36_39.png" /> building36'
            });
var format_building37_40 = new ol.format.GeoJSON();
var features_building37_40 = format_building37_40.readFeatures(json_building37_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building37_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building37_40.addFeatures(features_building37_40);
var lyr_building37_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building37_40, 
                style: style_building37_40,
                popuplayertitle: 'building37',
                interactive: false,
                title: '<img src="styles/legend/building37_40.png" /> building37'
            });
var format_building38_41 = new ol.format.GeoJSON();
var features_building38_41 = format_building38_41.readFeatures(json_building38_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building38_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building38_41.addFeatures(features_building38_41);
var lyr_building38_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building38_41, 
                style: style_building38_41,
                popuplayertitle: 'building38',
                interactive: false,
                title: '<img src="styles/legend/building38_41.png" /> building38'
            });
var format_building39_42 = new ol.format.GeoJSON();
var features_building39_42 = format_building39_42.readFeatures(json_building39_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building39_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building39_42.addFeatures(features_building39_42);
var lyr_building39_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building39_42, 
                style: style_building39_42,
                popuplayertitle: 'building39',
                interactive: false,
                title: '<img src="styles/legend/building39_42.png" /> building39'
            });
var format_Building40_43 = new ol.format.GeoJSON();
var features_Building40_43 = format_Building40_43.readFeatures(json_Building40_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building40_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building40_43.addFeatures(features_Building40_43);
var lyr_Building40_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building40_43, 
                style: style_Building40_43,
                popuplayertitle: 'Building40',
                interactive: false,
                title: '<img src="styles/legend/Building40_43.png" /> Building40'
            });
var format_Building41_44 = new ol.format.GeoJSON();
var features_Building41_44 = format_Building41_44.readFeatures(json_Building41_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building41_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building41_44.addFeatures(features_Building41_44);
var lyr_Building41_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building41_44, 
                style: style_Building41_44,
                popuplayertitle: 'Building41',
                interactive: false,
                title: '<img src="styles/legend/Building41_44.png" /> Building41'
            });
var format_Building42_45 = new ol.format.GeoJSON();
var features_Building42_45 = format_Building42_45.readFeatures(json_Building42_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building42_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building42_45.addFeatures(features_Building42_45);
var lyr_Building42_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building42_45, 
                style: style_Building42_45,
                popuplayertitle: 'Building42',
                interactive: false,
                title: '<img src="styles/legend/Building42_45.png" /> Building42'
            });
var format_Building43_46 = new ol.format.GeoJSON();
var features_Building43_46 = format_Building43_46.readFeatures(json_Building43_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building43_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building43_46.addFeatures(features_Building43_46);
var lyr_Building43_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building43_46, 
                style: style_Building43_46,
                popuplayertitle: 'Building43',
                interactive: false,
                title: '<img src="styles/legend/Building43_46.png" /> Building43'
            });
var format_building45_47 = new ol.format.GeoJSON();
var features_building45_47 = format_building45_47.readFeatures(json_building45_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building45_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building45_47.addFeatures(features_building45_47);
var lyr_building45_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building45_47, 
                style: style_building45_47,
                popuplayertitle: 'building45',
                interactive: false,
                title: '<img src="styles/legend/building45_47.png" /> building45'
            });
var format_building47_48 = new ol.format.GeoJSON();
var features_building47_48 = format_building47_48.readFeatures(json_building47_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building47_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building47_48.addFeatures(features_building47_48);
var lyr_building47_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building47_48, 
                style: style_building47_48,
                popuplayertitle: 'building47',
                interactive: false,
                title: '<img src="styles/legend/building47_48.png" /> building47'
            });
var format_Building48_49 = new ol.format.GeoJSON();
var features_Building48_49 = format_Building48_49.readFeatures(json_Building48_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building48_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building48_49.addFeatures(features_Building48_49);
var lyr_Building48_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building48_49, 
                style: style_Building48_49,
                popuplayertitle: 'Building 48',
                interactive: false,
                title: '<img src="styles/legend/Building48_49.png" /> Building 48'
            });
var format_Building49_50 = new ol.format.GeoJSON();
var features_Building49_50 = format_Building49_50.readFeatures(json_Building49_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building49_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building49_50.addFeatures(features_Building49_50);
var lyr_Building49_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building49_50, 
                style: style_Building49_50,
                popuplayertitle: 'Building 49',
                interactive: false,
                title: '<img src="styles/legend/Building49_50.png" /> Building 49'
            });
var format_Building50_51 = new ol.format.GeoJSON();
var features_Building50_51 = format_Building50_51.readFeatures(json_Building50_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building50_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building50_51.addFeatures(features_Building50_51);
var lyr_Building50_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building50_51, 
                style: style_Building50_51,
                popuplayertitle: 'Building 50',
                interactive: false,
                title: '<img src="styles/legend/Building50_51.png" /> Building 50'
            });
var format_Building51_52 = new ol.format.GeoJSON();
var features_Building51_52 = format_Building51_52.readFeatures(json_Building51_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building51_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building51_52.addFeatures(features_Building51_52);
var lyr_Building51_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building51_52, 
                style: style_Building51_52,
                popuplayertitle: 'Building 51',
                interactive: false,
                title: '<img src="styles/legend/Building51_52.png" /> Building 51'
            });
var format_Building52_53 = new ol.format.GeoJSON();
var features_Building52_53 = format_Building52_53.readFeatures(json_Building52_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building52_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building52_53.addFeatures(features_Building52_53);
var lyr_Building52_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building52_53, 
                style: style_Building52_53,
                popuplayertitle: 'Building 52',
                interactive: false,
                title: '<img src="styles/legend/Building52_53.png" /> Building 52'
            });
var format_Building53_54 = new ol.format.GeoJSON();
var features_Building53_54 = format_Building53_54.readFeatures(json_Building53_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building53_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building53_54.addFeatures(features_Building53_54);
var lyr_Building53_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building53_54, 
                style: style_Building53_54,
                popuplayertitle: 'Building 53',
                interactive: false,
                title: '<img src="styles/legend/Building53_54.png" /> Building 53'
            });
var format_Building54_55 = new ol.format.GeoJSON();
var features_Building54_55 = format_Building54_55.readFeatures(json_Building54_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building54_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building54_55.addFeatures(features_Building54_55);
var lyr_Building54_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building54_55, 
                style: style_Building54_55,
                popuplayertitle: 'Building 54',
                interactive: false,
                title: '<img src="styles/legend/Building54_55.png" /> Building 54'
            });
var format_Building55_56 = new ol.format.GeoJSON();
var features_Building55_56 = format_Building55_56.readFeatures(json_Building55_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building55_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building55_56.addFeatures(features_Building55_56);
var lyr_Building55_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building55_56, 
                style: style_Building55_56,
                popuplayertitle: 'Building 55',
                interactive: false,
                title: '<img src="styles/legend/Building55_56.png" /> Building 55'
            });
var format_Building56_57 = new ol.format.GeoJSON();
var features_Building56_57 = format_Building56_57.readFeatures(json_Building56_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building56_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building56_57.addFeatures(features_Building56_57);
var lyr_Building56_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building56_57, 
                style: style_Building56_57,
                popuplayertitle: 'Building 56',
                interactive: false,
                title: '<img src="styles/legend/Building56_57.png" /> Building 56'
            });
var format_Building57_58 = new ol.format.GeoJSON();
var features_Building57_58 = format_Building57_58.readFeatures(json_Building57_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building57_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building57_58.addFeatures(features_Building57_58);
var lyr_Building57_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building57_58, 
                style: style_Building57_58,
                popuplayertitle: 'Building 57',
                interactive: false,
                title: '<img src="styles/legend/Building57_58.png" /> Building 57'
            });
var format_Building58_59 = new ol.format.GeoJSON();
var features_Building58_59 = format_Building58_59.readFeatures(json_Building58_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building58_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building58_59.addFeatures(features_Building58_59);
var lyr_Building58_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building58_59, 
                style: style_Building58_59,
                popuplayertitle: 'Building 58',
                interactive: false,
                title: '<img src="styles/legend/Building58_59.png" /> Building 58'
            });
var format_Building60_60 = new ol.format.GeoJSON();
var features_Building60_60 = format_Building60_60.readFeatures(json_Building60_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building60_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building60_60.addFeatures(features_Building60_60);
var lyr_Building60_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building60_60, 
                style: style_Building60_60,
                popuplayertitle: 'Building 60',
                interactive: false,
                title: '<img src="styles/legend/Building60_60.png" /> Building 60'
            });
var format_Building61_61 = new ol.format.GeoJSON();
var features_Building61_61 = format_Building61_61.readFeatures(json_Building61_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building61_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building61_61.addFeatures(features_Building61_61);
var lyr_Building61_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building61_61, 
                style: style_Building61_61,
                popuplayertitle: 'Building 61',
                interactive: false,
                title: '<img src="styles/legend/Building61_61.png" /> Building 61'
            });
var format_Building62_62 = new ol.format.GeoJSON();
var features_Building62_62 = format_Building62_62.readFeatures(json_Building62_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building62_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building62_62.addFeatures(features_Building62_62);
var lyr_Building62_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building62_62, 
                style: style_Building62_62,
                popuplayertitle: 'Building 62',
                interactive: false,
                title: '<img src="styles/legend/Building62_62.png" /> Building 62'
            });
var format_Building63_63 = new ol.format.GeoJSON();
var features_Building63_63 = format_Building63_63.readFeatures(json_Building63_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building63_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building63_63.addFeatures(features_Building63_63);
var lyr_Building63_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building63_63, 
                style: style_Building63_63,
                popuplayertitle: 'Building 63',
                interactive: false,
                title: '<img src="styles/legend/Building63_63.png" /> Building 63'
            });
var format_building64_64 = new ol.format.GeoJSON();
var features_building64_64 = format_building64_64.readFeatures(json_building64_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building64_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building64_64.addFeatures(features_building64_64);
var lyr_building64_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building64_64, 
                style: style_building64_64,
                popuplayertitle: 'building 64',
                interactive: false,
                title: '<img src="styles/legend/building64_64.png" /> building 64'
            });
var format_Building65_65 = new ol.format.GeoJSON();
var features_Building65_65 = format_Building65_65.readFeatures(json_Building65_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building65_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building65_65.addFeatures(features_Building65_65);
var lyr_Building65_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building65_65, 
                style: style_Building65_65,
                popuplayertitle: 'Building 65',
                interactive: false,
                title: '<img src="styles/legend/Building65_65.png" /> Building 65'
            });
var format_Building66_66 = new ol.format.GeoJSON();
var features_Building66_66 = format_Building66_66.readFeatures(json_Building66_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building66_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building66_66.addFeatures(features_Building66_66);
var lyr_Building66_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building66_66, 
                style: style_Building66_66,
                popuplayertitle: 'Building 66',
                interactive: false,
                title: '<img src="styles/legend/Building66_66.png" /> Building 66'
            });
var format_Building67_67 = new ol.format.GeoJSON();
var features_Building67_67 = format_Building67_67.readFeatures(json_Building67_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building67_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building67_67.addFeatures(features_Building67_67);
var lyr_Building67_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building67_67, 
                style: style_Building67_67,
                popuplayertitle: 'Building 67',
                interactive: false,
                title: '<img src="styles/legend/Building67_67.png" /> Building 67'
            });
var format_Building68_68 = new ol.format.GeoJSON();
var features_Building68_68 = format_Building68_68.readFeatures(json_Building68_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building68_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building68_68.addFeatures(features_Building68_68);
var lyr_Building68_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building68_68, 
                style: style_Building68_68,
                popuplayertitle: 'Building 68',
                interactive: false,
                title: '<img src="styles/legend/Building68_68.png" /> Building 68'
            });
var format_Building69_69 = new ol.format.GeoJSON();
var features_Building69_69 = format_Building69_69.readFeatures(json_Building69_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building69_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building69_69.addFeatures(features_Building69_69);
var lyr_Building69_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building69_69, 
                style: style_Building69_69,
                popuplayertitle: 'Building 69',
                interactive: false,
                title: '<img src="styles/legend/Building69_69.png" /> Building 69'
            });
var format_Building70_70 = new ol.format.GeoJSON();
var features_Building70_70 = format_Building70_70.readFeatures(json_Building70_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building70_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building70_70.addFeatures(features_Building70_70);
var lyr_Building70_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building70_70, 
                style: style_Building70_70,
                popuplayertitle: 'Building 70',
                interactive: false,
                title: '<img src="styles/legend/Building70_70.png" /> Building 70'
            });
var format_Building71_71 = new ol.format.GeoJSON();
var features_Building71_71 = format_Building71_71.readFeatures(json_Building71_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building71_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building71_71.addFeatures(features_Building71_71);
var lyr_Building71_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building71_71, 
                style: style_Building71_71,
                popuplayertitle: 'Building 71',
                interactive: false,
                title: '<img src="styles/legend/Building71_71.png" /> Building 71'
            });
var format_Building72_72 = new ol.format.GeoJSON();
var features_Building72_72 = format_Building72_72.readFeatures(json_Building72_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building72_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building72_72.addFeatures(features_Building72_72);
var lyr_Building72_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building72_72, 
                style: style_Building72_72,
                popuplayertitle: 'Building 72',
                interactive: false,
                title: '<img src="styles/legend/Building72_72.png" /> Building 72'
            });
var format_Building73_73 = new ol.format.GeoJSON();
var features_Building73_73 = format_Building73_73.readFeatures(json_Building73_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building73_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building73_73.addFeatures(features_Building73_73);
var lyr_Building73_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building73_73, 
                style: style_Building73_73,
                popuplayertitle: 'Building 73',
                interactive: false,
                title: '<img src="styles/legend/Building73_73.png" /> Building 73'
            });
var format_Building74_74 = new ol.format.GeoJSON();
var features_Building74_74 = format_Building74_74.readFeatures(json_Building74_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building74_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building74_74.addFeatures(features_Building74_74);
var lyr_Building74_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building74_74, 
                style: style_Building74_74,
                popuplayertitle: 'Building 74',
                interactive: false,
                title: '<img src="styles/legend/Building74_74.png" /> Building 74'
            });
var format_Building75_75 = new ol.format.GeoJSON();
var features_Building75_75 = format_Building75_75.readFeatures(json_Building75_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building75_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building75_75.addFeatures(features_Building75_75);
var lyr_Building75_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building75_75, 
                style: style_Building75_75,
                popuplayertitle: 'Building 75',
                interactive: false,
                title: '<img src="styles/legend/Building75_75.png" /> Building 75'
            });
var format_Building76_76 = new ol.format.GeoJSON();
var features_Building76_76 = format_Building76_76.readFeatures(json_Building76_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building76_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building76_76.addFeatures(features_Building76_76);
var lyr_Building76_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building76_76, 
                style: style_Building76_76,
                popuplayertitle: 'Building 76',
                interactive: false,
                title: '<img src="styles/legend/Building76_76.png" /> Building 76'
            });
var format_Building77_77 = new ol.format.GeoJSON();
var features_Building77_77 = format_Building77_77.readFeatures(json_Building77_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building77_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building77_77.addFeatures(features_Building77_77);
var lyr_Building77_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building77_77, 
                style: style_Building77_77,
                popuplayertitle: 'Building 77',
                interactive: false,
                title: '<img src="styles/legend/Building77_77.png" /> Building 77'
            });
var format_Building78_78 = new ol.format.GeoJSON();
var features_Building78_78 = format_Building78_78.readFeatures(json_Building78_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building78_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building78_78.addFeatures(features_Building78_78);
var lyr_Building78_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building78_78, 
                style: style_Building78_78,
                popuplayertitle: 'Building 78',
                interactive: false,
                title: '<img src="styles/legend/Building78_78.png" /> Building 78'
            });
var format_Building79_79 = new ol.format.GeoJSON();
var features_Building79_79 = format_Building79_79.readFeatures(json_Building79_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building79_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building79_79.addFeatures(features_Building79_79);
var lyr_Building79_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building79_79, 
                style: style_Building79_79,
                popuplayertitle: 'Building 79',
                interactive: false,
                title: '<img src="styles/legend/Building79_79.png" /> Building 79'
            });
var format_Building80_80 = new ol.format.GeoJSON();
var features_Building80_80 = format_Building80_80.readFeatures(json_Building80_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building80_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building80_80.addFeatures(features_Building80_80);
var lyr_Building80_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building80_80, 
                style: style_Building80_80,
                popuplayertitle: 'Building 80',
                interactive: false,
                title: '<img src="styles/legend/Building80_80.png" /> Building 80'
            });
var format_Building81_81 = new ol.format.GeoJSON();
var features_Building81_81 = format_Building81_81.readFeatures(json_Building81_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building81_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building81_81.addFeatures(features_Building81_81);
var lyr_Building81_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building81_81, 
                style: style_Building81_81,
                popuplayertitle: 'Building 81',
                interactive: false,
                title: '<img src="styles/legend/Building81_81.png" /> Building 81'
            });
var format_Building82_82 = new ol.format.GeoJSON();
var features_Building82_82 = format_Building82_82.readFeatures(json_Building82_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building82_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building82_82.addFeatures(features_Building82_82);
var lyr_Building82_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building82_82, 
                style: style_Building82_82,
                popuplayertitle: 'Building 82',
                interactive: false,
                title: '<img src="styles/legend/Building82_82.png" /> Building 82'
            });
var format_Building83_83 = new ol.format.GeoJSON();
var features_Building83_83 = format_Building83_83.readFeatures(json_Building83_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building83_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building83_83.addFeatures(features_Building83_83);
var lyr_Building83_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building83_83, 
                style: style_Building83_83,
                popuplayertitle: 'Building 83',
                interactive: false,
                title: '<img src="styles/legend/Building83_83.png" /> Building 83'
            });
var format_Building84_84 = new ol.format.GeoJSON();
var features_Building84_84 = format_Building84_84.readFeatures(json_Building84_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building84_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building84_84.addFeatures(features_Building84_84);
var lyr_Building84_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building84_84, 
                style: style_Building84_84,
                popuplayertitle: 'Building 84',
                interactive: false,
                title: '<img src="styles/legend/Building84_84.png" /> Building 84'
            });
var format_Building85_85 = new ol.format.GeoJSON();
var features_Building85_85 = format_Building85_85.readFeatures(json_Building85_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building85_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building85_85.addFeatures(features_Building85_85);
var lyr_Building85_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building85_85, 
                style: style_Building85_85,
                popuplayertitle: 'Building 85',
                interactive: false,
                title: '<img src="styles/legend/Building85_85.png" /> Building 85'
            });
var format_Building89_86 = new ol.format.GeoJSON();
var features_Building89_86 = format_Building89_86.readFeatures(json_Building89_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building89_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building89_86.addFeatures(features_Building89_86);
var lyr_Building89_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building89_86, 
                style: style_Building89_86,
                popuplayertitle: 'Building 89',
                interactive: false,
                title: '<img src="styles/legend/Building89_86.png" /> Building 89'
            });
var format_Building90_87 = new ol.format.GeoJSON();
var features_Building90_87 = format_Building90_87.readFeatures(json_Building90_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building90_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building90_87.addFeatures(features_Building90_87);
var lyr_Building90_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building90_87, 
                style: style_Building90_87,
                popuplayertitle: 'Building 90',
                interactive: false,
                title: '<img src="styles/legend/Building90_87.png" /> Building 90'
            });
var format_Building91_88 = new ol.format.GeoJSON();
var features_Building91_88 = format_Building91_88.readFeatures(json_Building91_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building91_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building91_88.addFeatures(features_Building91_88);
var lyr_Building91_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building91_88, 
                style: style_Building91_88,
                popuplayertitle: 'Building 91',
                interactive: false,
                title: '<img src="styles/legend/Building91_88.png" /> Building 91'
            });
var format_Building92_89 = new ol.format.GeoJSON();
var features_Building92_89 = format_Building92_89.readFeatures(json_Building92_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building92_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building92_89.addFeatures(features_Building92_89);
var lyr_Building92_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building92_89, 
                style: style_Building92_89,
                popuplayertitle: 'Building 92',
                interactive: false,
                title: '<img src="styles/legend/Building92_89.png" /> Building 92'
            });
var format_Building93_90 = new ol.format.GeoJSON();
var features_Building93_90 = format_Building93_90.readFeatures(json_Building93_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building93_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building93_90.addFeatures(features_Building93_90);
var lyr_Building93_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building93_90, 
                style: style_Building93_90,
                popuplayertitle: 'Building 93',
                interactive: false,
                title: '<img src="styles/legend/Building93_90.png" /> Building 93'
            });
var format_Building94_91 = new ol.format.GeoJSON();
var features_Building94_91 = format_Building94_91.readFeatures(json_Building94_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building94_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building94_91.addFeatures(features_Building94_91);
var lyr_Building94_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building94_91, 
                style: style_Building94_91,
                popuplayertitle: 'Building 94',
                interactive: false,
                title: '<img src="styles/legend/Building94_91.png" /> Building 94'
            });
var format_Building95_92 = new ol.format.GeoJSON();
var features_Building95_92 = format_Building95_92.readFeatures(json_Building95_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building95_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building95_92.addFeatures(features_Building95_92);
var lyr_Building95_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building95_92, 
                style: style_Building95_92,
                popuplayertitle: 'Building 95',
                interactive: false,
                title: '<img src="styles/legend/Building95_92.png" /> Building 95'
            });
var format_Building96_93 = new ol.format.GeoJSON();
var features_Building96_93 = format_Building96_93.readFeatures(json_Building96_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building96_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building96_93.addFeatures(features_Building96_93);
var lyr_Building96_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building96_93, 
                style: style_Building96_93,
                popuplayertitle: 'Building 96',
                interactive: false,
                title: '<img src="styles/legend/Building96_93.png" /> Building 96'
            });
var format_Building97_94 = new ol.format.GeoJSON();
var features_Building97_94 = format_Building97_94.readFeatures(json_Building97_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building97_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building97_94.addFeatures(features_Building97_94);
var lyr_Building97_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building97_94, 
                style: style_Building97_94,
                popuplayertitle: 'Building 97',
                interactive: false,
                title: '<img src="styles/legend/Building97_94.png" /> Building 97'
            });
var format_Building98_95 = new ol.format.GeoJSON();
var features_Building98_95 = format_Building98_95.readFeatures(json_Building98_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building98_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building98_95.addFeatures(features_Building98_95);
var lyr_Building98_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building98_95, 
                style: style_Building98_95,
                popuplayertitle: 'Building 98',
                interactive: false,
                title: '<img src="styles/legend/Building98_95.png" /> Building 98'
            });
var format_Building99_96 = new ol.format.GeoJSON();
var features_Building99_96 = format_Building99_96.readFeatures(json_Building99_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building99_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building99_96.addFeatures(features_Building99_96);
var lyr_Building99_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building99_96, 
                style: style_Building99_96,
                popuplayertitle: 'Building 99',
                interactive: false,
                title: '<img src="styles/legend/Building99_96.png" /> Building 99'
            });
var format_Building100_97 = new ol.format.GeoJSON();
var features_Building100_97 = format_Building100_97.readFeatures(json_Building100_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building100_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building100_97.addFeatures(features_Building100_97);
var lyr_Building100_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building100_97, 
                style: style_Building100_97,
                popuplayertitle: 'Building 100',
                interactive: false,
                title: '<img src="styles/legend/Building100_97.png" /> Building 100'
            });
var format_Building101_98 = new ol.format.GeoJSON();
var features_Building101_98 = format_Building101_98.readFeatures(json_Building101_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building101_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building101_98.addFeatures(features_Building101_98);
var lyr_Building101_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building101_98, 
                style: style_Building101_98,
                popuplayertitle: 'Building 101',
                interactive: false,
                title: '<img src="styles/legend/Building101_98.png" /> Building 101'
            });
var format_Building102_99 = new ol.format.GeoJSON();
var features_Building102_99 = format_Building102_99.readFeatures(json_Building102_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building102_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building102_99.addFeatures(features_Building102_99);
var lyr_Building102_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building102_99, 
                style: style_Building102_99,
                popuplayertitle: 'Building 102',
                interactive: false,
                title: '<img src="styles/legend/Building102_99.png" /> Building 102'
            });
var format_Building103_100 = new ol.format.GeoJSON();
var features_Building103_100 = format_Building103_100.readFeatures(json_Building103_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building103_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building103_100.addFeatures(features_Building103_100);
var lyr_Building103_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building103_100, 
                style: style_Building103_100,
                popuplayertitle: 'Building 103',
                interactive: false,
                title: '<img src="styles/legend/Building103_100.png" /> Building 103'
            });
var format_Building104_101 = new ol.format.GeoJSON();
var features_Building104_101 = format_Building104_101.readFeatures(json_Building104_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building104_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building104_101.addFeatures(features_Building104_101);
var lyr_Building104_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building104_101, 
                style: style_Building104_101,
                popuplayertitle: 'Building 104',
                interactive: false,
                title: '<img src="styles/legend/Building104_101.png" /> Building 104'
            });
var format_Building1602_102 = new ol.format.GeoJSON();
var features_Building1602_102 = format_Building1602_102.readFeatures(json_Building1602_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1602_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1602_102.addFeatures(features_Building1602_102);
var lyr_Building1602_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1602_102, 
                style: style_Building1602_102,
                popuplayertitle: 'Building 1602',
                interactive: true,
                title: '<img src="styles/legend/Building1602_102.png" /> Building 1602'
            });
var format_Building1603_103 = new ol.format.GeoJSON();
var features_Building1603_103 = format_Building1603_103.readFeatures(json_Building1603_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1603_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1603_103.addFeatures(features_Building1603_103);
var lyr_Building1603_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1603_103, 
                style: style_Building1603_103,
                popuplayertitle: 'Building 1603',
                interactive: true,
                title: '<img src="styles/legend/Building1603_103.png" /> Building 1603'
            });
var format_Building1701_104 = new ol.format.GeoJSON();
var features_Building1701_104 = format_Building1701_104.readFeatures(json_Building1701_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1701_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1701_104.addFeatures(features_Building1701_104);
var lyr_Building1701_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1701_104, 
                style: style_Building1701_104,
                popuplayertitle: 'Building 1701',
                interactive: true,
                title: '<img src="styles/legend/Building1701_104.png" /> Building 1701'
            });
var format_Building1702_105 = new ol.format.GeoJSON();
var features_Building1702_105 = format_Building1702_105.readFeatures(json_Building1702_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1702_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1702_105.addFeatures(features_Building1702_105);
var lyr_Building1702_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1702_105, 
                style: style_Building1702_105,
                popuplayertitle: 'Building 1702',
                interactive: true,
                title: '<img src="styles/legend/Building1702_105.png" /> Building 1702'
            });
var format_Building1703_106 = new ol.format.GeoJSON();
var features_Building1703_106 = format_Building1703_106.readFeatures(json_Building1703_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1703_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1703_106.addFeatures(features_Building1703_106);
var lyr_Building1703_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1703_106, 
                style: style_Building1703_106,
                popuplayertitle: 'Building 1703',
                interactive: true,
                title: '<img src="styles/legend/Building1703_106.png" /> Building 1703'
            });
var format_Building1704_107 = new ol.format.GeoJSON();
var features_Building1704_107 = format_Building1704_107.readFeatures(json_Building1704_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1704_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1704_107.addFeatures(features_Building1704_107);
var lyr_Building1704_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1704_107, 
                style: style_Building1704_107,
                popuplayertitle: 'Building 1704',
                interactive: true,
                title: '<img src="styles/legend/Building1704_107.png" /> Building 1704'
            });
var format_Building1705_108 = new ol.format.GeoJSON();
var features_Building1705_108 = format_Building1705_108.readFeatures(json_Building1705_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1705_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1705_108.addFeatures(features_Building1705_108);
var lyr_Building1705_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1705_108, 
                style: style_Building1705_108,
                popuplayertitle: 'Building 1705',
                interactive: true,
                title: '<img src="styles/legend/Building1705_108.png" /> Building 1705'
            });
var format_Building1706_109 = new ol.format.GeoJSON();
var features_Building1706_109 = format_Building1706_109.readFeatures(json_Building1706_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1706_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1706_109.addFeatures(features_Building1706_109);
var lyr_Building1706_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1706_109, 
                style: style_Building1706_109,
                popuplayertitle: 'Building 1706',
                interactive: true,
                title: '<img src="styles/legend/Building1706_109.png" /> Building 1706'
            });
var format_Building1707_110 = new ol.format.GeoJSON();
var features_Building1707_110 = format_Building1707_110.readFeatures(json_Building1707_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1707_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1707_110.addFeatures(features_Building1707_110);
var lyr_Building1707_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1707_110, 
                style: style_Building1707_110,
                popuplayertitle: 'Building 1707',
                interactive: true,
                title: '<img src="styles/legend/Building1707_110.png" /> Building 1707'
            });
var format_Building1708_111 = new ol.format.GeoJSON();
var features_Building1708_111 = format_Building1708_111.readFeatures(json_Building1708_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1708_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1708_111.addFeatures(features_Building1708_111);
var lyr_Building1708_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1708_111, 
                style: style_Building1708_111,
                popuplayertitle: 'Building 1708',
                interactive: true,
                title: '<img src="styles/legend/Building1708_111.png" /> Building 1708'
            });
var format_Building1709_112 = new ol.format.GeoJSON();
var features_Building1709_112 = format_Building1709_112.readFeatures(json_Building1709_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1709_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1709_112.addFeatures(features_Building1709_112);
var lyr_Building1709_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1709_112, 
                style: style_Building1709_112,
                popuplayertitle: 'Building 1709',
                interactive: true,
                title: '<img src="styles/legend/Building1709_112.png" /> Building 1709'
            });
var format_Building1710_113 = new ol.format.GeoJSON();
var features_Building1710_113 = format_Building1710_113.readFeatures(json_Building1710_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1710_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1710_113.addFeatures(features_Building1710_113);
var lyr_Building1710_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1710_113, 
                style: style_Building1710_113,
                popuplayertitle: 'Building 1710',
                interactive: true,
                title: '<img src="styles/legend/Building1710_113.png" /> Building 1710'
            });
var format_Building1711_114 = new ol.format.GeoJSON();
var features_Building1711_114 = format_Building1711_114.readFeatures(json_Building1711_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1711_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1711_114.addFeatures(features_Building1711_114);
var lyr_Building1711_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1711_114, 
                style: style_Building1711_114,
                popuplayertitle: 'Building 1711',
                interactive: true,
                title: '<img src="styles/legend/Building1711_114.png" /> Building 1711'
            });
var format_Building1712_115 = new ol.format.GeoJSON();
var features_Building1712_115 = format_Building1712_115.readFeatures(json_Building1712_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1712_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1712_115.addFeatures(features_Building1712_115);
var lyr_Building1712_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1712_115, 
                style: style_Building1712_115,
                popuplayertitle: 'Building 1712',
                interactive: true,
                title: '<img src="styles/legend/Building1712_115.png" /> Building 1712'
            });
var format_Building1713_116 = new ol.format.GeoJSON();
var features_Building1713_116 = format_Building1713_116.readFeatures(json_Building1713_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1713_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1713_116.addFeatures(features_Building1713_116);
var lyr_Building1713_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1713_116, 
                style: style_Building1713_116,
                popuplayertitle: 'Building 1713',
                interactive: true,
                title: '<img src="styles/legend/Building1713_116.png" /> Building 1713'
            });
var format_Building1801_117 = new ol.format.GeoJSON();
var features_Building1801_117 = format_Building1801_117.readFeatures(json_Building1801_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1801_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1801_117.addFeatures(features_Building1801_117);
var lyr_Building1801_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1801_117, 
                style: style_Building1801_117,
                popuplayertitle: 'Building 1801',
                interactive: true,
                title: '<img src="styles/legend/Building1801_117.png" /> Building 1801'
            });
var format_Building1901_118 = new ol.format.GeoJSON();
var features_Building1901_118 = format_Building1901_118.readFeatures(json_Building1901_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1901_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1901_118.addFeatures(features_Building1901_118);
var lyr_Building1901_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1901_118, 
                style: style_Building1901_118,
                popuplayertitle: 'Building 1901',
                interactive: true,
                title: '<img src="styles/legend/Building1901_118.png" /> Building 1901'
            });
var format_Building1902_119 = new ol.format.GeoJSON();
var features_Building1902_119 = format_Building1902_119.readFeatures(json_Building1902_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1902_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1902_119.addFeatures(features_Building1902_119);
var lyr_Building1902_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1902_119, 
                style: style_Building1902_119,
                popuplayertitle: 'Building 1902',
                interactive: true,
                title: '<img src="styles/legend/Building1902_119.png" /> Building 1902'
            });
var format_Building1903_120 = new ol.format.GeoJSON();
var features_Building1903_120 = format_Building1903_120.readFeatures(json_Building1903_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1903_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1903_120.addFeatures(features_Building1903_120);
var lyr_Building1903_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1903_120, 
                style: style_Building1903_120,
                popuplayertitle: 'Building 1903',
                interactive: true,
                title: '<img src="styles/legend/Building1903_120.png" /> Building 1903'
            });
var format_Building1201_121 = new ol.format.GeoJSON();
var features_Building1201_121 = format_Building1201_121.readFeatures(json_Building1201_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1201_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1201_121.addFeatures(features_Building1201_121);
var lyr_Building1201_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1201_121, 
                style: style_Building1201_121,
                popuplayertitle: 'Building1201',
                interactive: true,
                title: '<img src="styles/legend/Building1201_121.png" /> Building1201'
            });
var format_Building1601_122 = new ol.format.GeoJSON();
var features_Building1601_122 = format_Building1601_122.readFeatures(json_Building1601_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building1601_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building1601_122.addFeatures(features_Building1601_122);
var lyr_Building1601_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building1601_122, 
                style: style_Building1601_122,
                popuplayertitle: 'Building1601',
                interactive: true,
                title: '<img src="styles/legend/Building1601_122.png" /> Building1601'
            });
var format_Entrance_123 = new ol.format.GeoJSON();
var features_Entrance_123 = format_Entrance_123.readFeatures(json_Entrance_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entrance_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entrance_123.addFeatures(features_Entrance_123);
var lyr_Entrance_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Entrance_123, 
                style: style_Entrance_123,
                popuplayertitle: 'Entrance',
                interactive: false,
                title: '<img src="styles/legend/Entrance_123.png" /> Entrance'
            });
var format_NotDesignated_124 = new ol.format.GeoJSON();
var features_NotDesignated_124 = format_NotDesignated_124.readFeatures(json_NotDesignated_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NotDesignated_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NotDesignated_124.addFeatures(features_NotDesignated_124);
var lyr_NotDesignated_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NotDesignated_124, 
                style: style_NotDesignated_124,
                popuplayertitle: 'Not Designated',
                interactive: true,
                title: '<img src="styles/legend/NotDesignated_124.png" /> Not Designated'
            });
var format_SportsRecreation_125 = new ol.format.GeoJSON();
var features_SportsRecreation_125 = format_SportsRecreation_125.readFeatures(json_SportsRecreation_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SportsRecreation_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SportsRecreation_125.addFeatures(features_SportsRecreation_125);
var lyr_SportsRecreation_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SportsRecreation_125, 
                style: style_SportsRecreation_125,
                popuplayertitle: 'Sports & Recreation',
                interactive: true,
                title: '<img src="styles/legend/SportsRecreation_125.png" /> Sports & Recreation'
            });
var format_CommercialArea_126 = new ol.format.GeoJSON();
var features_CommercialArea_126 = format_CommercialArea_126.readFeatures(json_CommercialArea_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommercialArea_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommercialArea_126.addFeatures(features_CommercialArea_126);
var lyr_CommercialArea_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommercialArea_126, 
                style: style_CommercialArea_126,
                popuplayertitle: 'Commercial Area',
                interactive: true,
                title: '<img src="styles/legend/CommercialArea_126.png" /> Commercial Area'
            });
var format_Pasture_127 = new ol.format.GeoJSON();
var features_Pasture_127 = format_Pasture_127.readFeatures(json_Pasture_127, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pasture_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pasture_127.addFeatures(features_Pasture_127);
var lyr_Pasture_127 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pasture_127, 
                style: style_Pasture_127,
                popuplayertitle: 'Pasture',
                interactive: true,
                title: '<img src="styles/legend/Pasture_127.png" /> Pasture'
            });
var format_BoundaryHall_128 = new ol.format.GeoJSON();
var features_BoundaryHall_128 = format_BoundaryHall_128.readFeatures(json_BoundaryHall_128, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoundaryHall_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoundaryHall_128.addFeatures(features_BoundaryHall_128);
var lyr_BoundaryHall_128 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoundaryHall_128, 
                style: style_BoundaryHall_128,
                popuplayertitle: 'Boundary Hall',
                interactive: true,
                title: '<img src="styles/legend/BoundaryHall_128.png" /> Boundary Hall'
            });
var format_DemonstrationSchool_129 = new ol.format.GeoJSON();
var features_DemonstrationSchool_129 = format_DemonstrationSchool_129.readFeatures(json_DemonstrationSchool_129, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DemonstrationSchool_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DemonstrationSchool_129.addFeatures(features_DemonstrationSchool_129);
var lyr_DemonstrationSchool_129 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DemonstrationSchool_129, 
                style: style_DemonstrationSchool_129,
                popuplayertitle: 'Demonstration School',
                interactive: true,
                title: '<img src="styles/legend/DemonstrationSchool_129.png" /> Demonstration School'
            });
var format_Educationfaculty_130 = new ol.format.GeoJSON();
var features_Educationfaculty_130 = format_Educationfaculty_130.readFeatures(json_Educationfaculty_130, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Educationfaculty_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Educationfaculty_130.addFeatures(features_Educationfaculty_130);
var lyr_Educationfaculty_130 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Educationfaculty_130, 
                style: style_Educationfaculty_130,
                popuplayertitle: 'Education faculty',
                interactive: true,
                title: '<img src="styles/legend/Educationfaculty_130.png" /> Education faculty'
            });
var format_LecturersVillage_131 = new ol.format.GeoJSON();
var features_LecturersVillage_131 = format_LecturersVillage_131.readFeatures(json_LecturersVillage_131, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LecturersVillage_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LecturersVillage_131.addFeatures(features_LecturersVillage_131);
var lyr_LecturersVillage_131 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LecturersVillage_131, 
                style: style_LecturersVillage_131,
                popuplayertitle: 'Lecturers Village',
                interactive: true,
                title: '<img src="styles/legend/LecturersVillage_131.png" /> Lecturers Village'
            });
var format_EcoPark_132 = new ol.format.GeoJSON();
var features_EcoPark_132 = format_EcoPark_132.readFeatures(json_EcoPark_132, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EcoPark_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EcoPark_132.addFeatures(features_EcoPark_132);
var lyr_EcoPark_132 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EcoPark_132, 
                style: style_EcoPark_132,
                popuplayertitle: 'Eco Park',
                interactive: true,
                title: '<img src="styles/legend/EcoPark_132.png" /> Eco Park'
            });
var format_NewRoad_133 = new ol.format.GeoJSON();
var features_NewRoad_133 = format_NewRoad_133.readFeatures(json_NewRoad_133, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewRoad_133 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewRoad_133.addFeatures(features_NewRoad_133);
var lyr_NewRoad_133 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewRoad_133, 
                style: style_NewRoad_133,
                popuplayertitle: 'New Road',
                interactive: true,
                title: '<img src="styles/legend/NewRoad_133.png" /> New Road'
            });
var format_Auditorium_134 = new ol.format.GeoJSON();
var features_Auditorium_134 = format_Auditorium_134.readFeatures(json_Auditorium_134, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Auditorium_134 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Auditorium_134.addFeatures(features_Auditorium_134);
var lyr_Auditorium_134 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Auditorium_134, 
                style: style_Auditorium_134,
                popuplayertitle: 'Auditorium',
                interactive: true,
                title: '<img src="styles/legend/Auditorium_134.png" /> Auditorium'
            });
var format_Administration_135 = new ol.format.GeoJSON();
var features_Administration_135 = format_Administration_135.readFeatures(json_Administration_135, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administration_135 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administration_135.addFeatures(features_Administration_135);
var lyr_Administration_135 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administration_135, 
                style: style_Administration_135,
                popuplayertitle: 'Administration',
                interactive: true,
                title: '<img src="styles/legend/Administration_135.png" /> Administration'
            });
var format_HealthSciences_136 = new ol.format.GeoJSON();
var features_HealthSciences_136 = format_HealthSciences_136.readFeatures(json_HealthSciences_136, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HealthSciences_136 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthSciences_136.addFeatures(features_HealthSciences_136);
var lyr_HealthSciences_136 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthSciences_136, 
                style: style_HealthSciences_136,
                popuplayertitle: 'Health Sciences',
                interactive: true,
                title: '<img src="styles/legend/HealthSciences_136.png" /> Health Sciences'
            });
var format_AgricNaturalresources_137 = new ol.format.GeoJSON();
var features_AgricNaturalresources_137 = format_AgricNaturalresources_137.readFeatures(json_AgricNaturalresources_137, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgricNaturalresources_137 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgricNaturalresources_137.addFeatures(features_AgricNaturalresources_137);
var lyr_AgricNaturalresources_137 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AgricNaturalresources_137, 
                style: style_AgricNaturalresources_137,
                popuplayertitle: 'Agric & Natural resources',
                interactive: true,
                title: '<img src="styles/legend/AgricNaturalresources_137.png" /> Agric & Natural resources'
            });
var format_Administration_138 = new ol.format.GeoJSON();
var features_Administration_138 = format_Administration_138.readFeatures(json_Administration_138, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administration_138 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administration_138.addFeatures(features_Administration_138);
var lyr_Administration_138 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administration_138, 
                style: style_Administration_138,
                popuplayertitle: 'Administration',
                interactive: true,
                title: '<img src="styles/legend/Administration_138.png" /> Administration'
            });
var format_waste_compost_site_139 = new ol.format.GeoJSON();
var features_waste_compost_site_139 = format_waste_compost_site_139.readFeatures(json_waste_compost_site_139, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waste_compost_site_139 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waste_compost_site_139.addFeatures(features_waste_compost_site_139);
var lyr_waste_compost_site_139 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waste_compost_site_139, 
                style: style_waste_compost_site_139,
                popuplayertitle: 'waste_compost_site',
                interactive: true,
                title: '<img src="styles/legend/waste_compost_site_139.png" /> waste_compost_site'
            });
var format_TransportandMechanization_140 = new ol.format.GeoJSON();
var features_TransportandMechanization_140 = format_TransportandMechanization_140.readFeatures(json_TransportandMechanization_140, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransportandMechanization_140 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransportandMechanization_140.addFeatures(features_TransportandMechanization_140);
var lyr_TransportandMechanization_140 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransportandMechanization_140, 
                style: style_TransportandMechanization_140,
                popuplayertitle: 'Transport and Mechanization',
                interactive: true,
                title: '<img src="styles/legend/TransportandMechanization_140.png" /> Transport and Mechanization'
            });
var format_CommercialAreas_141 = new ol.format.GeoJSON();
var features_CommercialAreas_141 = format_CommercialAreas_141.readFeatures(json_CommercialAreas_141, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommercialAreas_141 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommercialAreas_141.addFeatures(features_CommercialAreas_141);
var lyr_CommercialAreas_141 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommercialAreas_141, 
                style: style_CommercialAreas_141,
                popuplayertitle: 'Commercial Areas',
                interactive: true,
                title: '<img src="styles/legend/CommercialAreas_141.png" /> Commercial Areas'
            });
var group_Proposedsites = new ol.layer.Group({
                                layers: [lyr_NotDesignated_124,lyr_SportsRecreation_125,lyr_CommercialArea_126,lyr_Pasture_127,lyr_BoundaryHall_128,lyr_DemonstrationSchool_129,lyr_Educationfaculty_130,lyr_LecturersVillage_131,lyr_EcoPark_132,lyr_NewRoad_133,lyr_Auditorium_134,lyr_Administration_135,lyr_HealthSciences_136,lyr_AgricNaturalresources_137,lyr_Administration_138,lyr_waste_compost_site_139,lyr_TransportandMechanization_140,lyr_CommercialAreas_141,],
                                fold: 'open',
                                title: 'Proposed sites'});
var group_Existingfeatures = new ol.layer.Group({
                                layers: [lyr_Campus_boundary_1,lyr_Building_2,lyr_Building2_3,lyr_Building3_4,lyr_Building4_5,lyr_building5_6,lyr_building6_7,lyr_building7_8,lyr_building8_9,lyr_building9_10,lyr_building10_11,lyr_building11_12,lyr_building12_13,lyr_building13_14,lyr_building14_15,lyr_Pitch_16,lyr_Pitch2_17,lyr_Building15_18,lyr_building16_19,lyr_building17_20,lyr_building18_21,lyr_building19_22,lyr_building20_23,lyr_building21_24,lyr_building22shp_25,lyr_building23_26,lyr_building24_27,lyr_Building25_28,lyr_building26_29,lyr_Building27_30,lyr_Building28_31,lyr_Building29_32,lyr_building30_33,lyr_building31_34,lyr_Building32_35,lyr_Building33_36,lyr_building34_37,lyr_building35_38,lyr_building36_39,lyr_building37_40,lyr_building38_41,lyr_building39_42,lyr_Building40_43,lyr_Building41_44,lyr_Building42_45,lyr_Building43_46,lyr_building45_47,lyr_building47_48,lyr_Building48_49,lyr_Building49_50,lyr_Building50_51,lyr_Building51_52,lyr_Building52_53,lyr_Building53_54,lyr_Building54_55,lyr_Building55_56,lyr_Building56_57,lyr_Building57_58,lyr_Building58_59,lyr_Building60_60,lyr_Building61_61,lyr_Building62_62,lyr_Building63_63,lyr_building64_64,lyr_Building65_65,lyr_Building66_66,lyr_Building67_67,lyr_Building68_68,lyr_Building69_69,lyr_Building70_70,lyr_Building71_71,lyr_Building72_72,lyr_Building73_73,lyr_Building74_74,lyr_Building75_75,lyr_Building76_76,lyr_Building77_77,lyr_Building78_78,lyr_Building79_79,lyr_Building80_80,lyr_Building81_81,lyr_Building82_82,lyr_Building83_83,lyr_Building84_84,lyr_Building85_85,lyr_Building89_86,lyr_Building90_87,lyr_Building91_88,lyr_Building92_89,lyr_Building93_90,lyr_Building94_91,lyr_Building95_92,lyr_Building96_93,lyr_Building97_94,lyr_Building98_95,lyr_Building99_96,lyr_Building100_97,lyr_Building101_98,lyr_Building102_99,lyr_Building103_100,lyr_Building104_101,lyr_Building1602_102,lyr_Building1603_103,lyr_Building1701_104,lyr_Building1702_105,lyr_Building1703_106,lyr_Building1704_107,lyr_Building1705_108,lyr_Building1706_109,lyr_Building1707_110,lyr_Building1708_111,lyr_Building1709_112,lyr_Building1710_113,lyr_Building1711_114,lyr_Building1712_115,lyr_Building1713_116,lyr_Building1801_117,lyr_Building1901_118,lyr_Building1902_119,lyr_Building1903_120,lyr_Building1201_121,lyr_Building1601_122,lyr_Entrance_123,],
                                fold: 'close',
                                title: 'Existing features'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Campus_boundary_1.setVisible(true);lyr_Building_2.setVisible(true);lyr_Building2_3.setVisible(true);lyr_Building3_4.setVisible(true);lyr_Building4_5.setVisible(true);lyr_building5_6.setVisible(true);lyr_building6_7.setVisible(true);lyr_building7_8.setVisible(true);lyr_building8_9.setVisible(true);lyr_building9_10.setVisible(true);lyr_building10_11.setVisible(true);lyr_building11_12.setVisible(true);lyr_building12_13.setVisible(true);lyr_building13_14.setVisible(true);lyr_building14_15.setVisible(true);lyr_Pitch_16.setVisible(true);lyr_Pitch2_17.setVisible(true);lyr_Building15_18.setVisible(true);lyr_building16_19.setVisible(true);lyr_building17_20.setVisible(true);lyr_building18_21.setVisible(true);lyr_building19_22.setVisible(true);lyr_building20_23.setVisible(true);lyr_building21_24.setVisible(true);lyr_building22shp_25.setVisible(true);lyr_building23_26.setVisible(true);lyr_building24_27.setVisible(true);lyr_Building25_28.setVisible(true);lyr_building26_29.setVisible(true);lyr_Building27_30.setVisible(true);lyr_Building28_31.setVisible(true);lyr_Building29_32.setVisible(true);lyr_building30_33.setVisible(true);lyr_building31_34.setVisible(true);lyr_Building32_35.setVisible(true);lyr_Building33_36.setVisible(true);lyr_building34_37.setVisible(true);lyr_building35_38.setVisible(true);lyr_building36_39.setVisible(true);lyr_building37_40.setVisible(true);lyr_building38_41.setVisible(true);lyr_building39_42.setVisible(true);lyr_Building40_43.setVisible(true);lyr_Building41_44.setVisible(true);lyr_Building42_45.setVisible(true);lyr_Building43_46.setVisible(true);lyr_building45_47.setVisible(true);lyr_building47_48.setVisible(true);lyr_Building48_49.setVisible(true);lyr_Building49_50.setVisible(true);lyr_Building50_51.setVisible(true);lyr_Building51_52.setVisible(true);lyr_Building52_53.setVisible(true);lyr_Building53_54.setVisible(true);lyr_Building54_55.setVisible(true);lyr_Building55_56.setVisible(true);lyr_Building56_57.setVisible(true);lyr_Building57_58.setVisible(true);lyr_Building58_59.setVisible(true);lyr_Building60_60.setVisible(true);lyr_Building61_61.setVisible(true);lyr_Building62_62.setVisible(true);lyr_Building63_63.setVisible(true);lyr_building64_64.setVisible(true);lyr_Building65_65.setVisible(true);lyr_Building66_66.setVisible(true);lyr_Building67_67.setVisible(true);lyr_Building68_68.setVisible(true);lyr_Building69_69.setVisible(true);lyr_Building70_70.setVisible(true);lyr_Building71_71.setVisible(true);lyr_Building72_72.setVisible(true);lyr_Building73_73.setVisible(true);lyr_Building74_74.setVisible(true);lyr_Building75_75.setVisible(true);lyr_Building76_76.setVisible(true);lyr_Building77_77.setVisible(true);lyr_Building78_78.setVisible(true);lyr_Building79_79.setVisible(true);lyr_Building80_80.setVisible(true);lyr_Building81_81.setVisible(true);lyr_Building82_82.setVisible(true);lyr_Building83_83.setVisible(true);lyr_Building84_84.setVisible(true);lyr_Building85_85.setVisible(true);lyr_Building89_86.setVisible(true);lyr_Building90_87.setVisible(true);lyr_Building91_88.setVisible(true);lyr_Building92_89.setVisible(true);lyr_Building93_90.setVisible(true);lyr_Building94_91.setVisible(true);lyr_Building95_92.setVisible(true);lyr_Building96_93.setVisible(true);lyr_Building97_94.setVisible(true);lyr_Building98_95.setVisible(true);lyr_Building99_96.setVisible(true);lyr_Building100_97.setVisible(true);lyr_Building101_98.setVisible(true);lyr_Building102_99.setVisible(true);lyr_Building103_100.setVisible(true);lyr_Building104_101.setVisible(true);lyr_Building1602_102.setVisible(true);lyr_Building1603_103.setVisible(true);lyr_Building1701_104.setVisible(true);lyr_Building1702_105.setVisible(true);lyr_Building1703_106.setVisible(true);lyr_Building1704_107.setVisible(true);lyr_Building1705_108.setVisible(true);lyr_Building1706_109.setVisible(true);lyr_Building1707_110.setVisible(true);lyr_Building1708_111.setVisible(true);lyr_Building1709_112.setVisible(true);lyr_Building1710_113.setVisible(true);lyr_Building1711_114.setVisible(true);lyr_Building1712_115.setVisible(true);lyr_Building1713_116.setVisible(true);lyr_Building1801_117.setVisible(true);lyr_Building1901_118.setVisible(true);lyr_Building1902_119.setVisible(true);lyr_Building1903_120.setVisible(true);lyr_Building1201_121.setVisible(true);lyr_Building1601_122.setVisible(true);lyr_Entrance_123.setVisible(true);lyr_NotDesignated_124.setVisible(true);lyr_SportsRecreation_125.setVisible(true);lyr_CommercialArea_126.setVisible(true);lyr_Pasture_127.setVisible(true);lyr_BoundaryHall_128.setVisible(true);lyr_DemonstrationSchool_129.setVisible(true);lyr_Educationfaculty_130.setVisible(true);lyr_LecturersVillage_131.setVisible(true);lyr_EcoPark_132.setVisible(true);lyr_NewRoad_133.setVisible(true);lyr_Auditorium_134.setVisible(true);lyr_Administration_135.setVisible(true);lyr_HealthSciences_136.setVisible(true);lyr_AgricNaturalresources_137.setVisible(true);lyr_Administration_138.setVisible(true);lyr_waste_compost_site_139.setVisible(true);lyr_TransportandMechanization_140.setVisible(true);lyr_CommercialAreas_141.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_Existingfeatures,group_Proposedsites];
lyr_Campus_boundary_1.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_Building_2.set('fieldAliases', {'id': 'id', });
lyr_Building2_3.set('fieldAliases', {'id': 'id', });
lyr_Building3_4.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_Building4_5.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_building5_6.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_building6_7.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_building7_8.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_building8_9.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building9_10.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building10_11.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building11_12.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building12_13.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building13_14.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building14_15.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Pitch_16.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Pitch2_17.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building15_18.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building16_19.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building17_20.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building18_21.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building19_22.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building20_23.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building21_24.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building22shp_25.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building23_26.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building24_27.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building25_28.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building26_29.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building27_30.set('fieldAliases', {'id': 'id', 'TYPE': 'TYPE', });
lyr_Building28_31.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building29_32.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building30_33.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building31_34.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building32_35.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building33_36.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building34_37.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building35_38.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building36_39.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building37_40.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building38_41.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building39_42.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building40_43.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building41_44.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building42_45.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building43_46.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building45_47.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building47_48.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building48_49.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building49_50.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building50_51.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building51_52.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building52_53.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building53_54.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building54_55.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building55_56.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building56_57.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building57_58.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building58_59.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building60_60.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building61_61.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building62_62.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building63_63.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_building64_64.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building65_65.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building66_66.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building67_67.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building68_68.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building69_69.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building70_70.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building71_71.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building72_72.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building73_73.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building74_74.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building75_75.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building76_76.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building77_77.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building78_78.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building79_79.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building80_80.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building81_81.set('fieldAliases', {'id': 'id', 'tyoe': 'tyoe', });
lyr_Building82_82.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building83_83.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building84_84.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building85_85.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building89_86.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building90_87.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building91_88.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building92_89.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building93_90.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building94_91.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building95_92.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building96_93.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building97_94.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building98_95.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building99_96.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building100_97.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building101_98.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building102_99.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building103_100.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building104_101.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Building1602_102.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_Building1603_103.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_Building1701_104.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Building1702_105.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_Building1703_106.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Building1704_107.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Building1705_108.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Building1706_109.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Building1707_110.set('fieldAliases', {'id': 'id', });
lyr_Building1708_111.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Building1709_112.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_Building1710_113.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Building1711_114.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Building1712_115.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Building1713_116.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Building1801_117.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Building1901_118.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Faciliity': 'Faciliity', });
lyr_Building1902_119.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Building1903_120.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Building1201_121.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_Building1601_122.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_Entrance_123.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', });
lyr_NotDesignated_124.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_SportsRecreation_125.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_CommercialArea_126.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_Pasture_127.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_BoundaryHall_128.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_DemonstrationSchool_129.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_Educationfaculty_130.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_LecturersVillage_131.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_EcoPark_132.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_NewRoad_133.set('fieldAliases', {'id': 'id', 'Length': 'Length', 'Facility': 'Facility', });
lyr_Auditorium_134.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_Administration_135.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_HealthSciences_136.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_AgricNaturalresources_137.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_Administration_138.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_waste_compost_site_139.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_TransportandMechanization_140.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_CommercialAreas_141.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_Campus_boundary_1.set('fieldImages', {'id': 'TextEdit', 'area': '', });
lyr_Building_2.set('fieldImages', {'id': '', });
lyr_Building2_3.set('fieldImages', {'id': '', });
lyr_Building3_4.set('fieldImages', {'id': '', 'Type': '', });
lyr_Building4_5.set('fieldImages', {'id': '', 'Type': '', });
lyr_building5_6.set('fieldImages', {'id': '', 'Type': '', });
lyr_building6_7.set('fieldImages', {'id': '', 'Type': '', });
lyr_building7_8.set('fieldImages', {'id': '', 'Type': '', });
lyr_building8_9.set('fieldImages', {'id': '', 'type': '', });
lyr_building9_10.set('fieldImages', {'id': '', 'type': '', });
lyr_building10_11.set('fieldImages', {'id': '', 'type': '', });
lyr_building11_12.set('fieldImages', {'id': '', 'type': '', });
lyr_building12_13.set('fieldImages', {'id': '', 'type': '', });
lyr_building13_14.set('fieldImages', {'id': '', 'type': '', });
lyr_building14_15.set('fieldImages', {'id': '', 'type': '', });
lyr_Pitch_16.set('fieldImages', {'id': '', 'type': '', });
lyr_Pitch2_17.set('fieldImages', {'id': '', 'type': '', });
lyr_Building15_18.set('fieldImages', {'id': '', 'type': '', });
lyr_building16_19.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_building17_20.set('fieldImages', {'id': '', 'type': '', });
lyr_building18_21.set('fieldImages', {'id': '', 'type': '', });
lyr_building19_22.set('fieldImages', {'id': '', 'type': '', });
lyr_building20_23.set('fieldImages', {'id': '', 'type': '', });
lyr_building21_24.set('fieldImages', {'id': '', 'type': '', });
lyr_building22shp_25.set('fieldImages', {'id': '', 'type': '', });
lyr_building23_26.set('fieldImages', {'id': '', 'type': '', });
lyr_building24_27.set('fieldImages', {'id': '', 'type': '', });
lyr_Building25_28.set('fieldImages', {'id': '', 'type': '', });
lyr_building26_29.set('fieldImages', {'id': '', 'type': '', });
lyr_Building27_30.set('fieldImages', {'id': '', 'TYPE': '', });
lyr_Building28_31.set('fieldImages', {'id': '', 'type': '', });
lyr_Building29_32.set('fieldImages', {'id': '', 'type': '', });
lyr_building30_33.set('fieldImages', {'id': '', 'type': '', });
lyr_building31_34.set('fieldImages', {'id': '', 'type': '', });
lyr_Building32_35.set('fieldImages', {'id': '', 'type': '', });
lyr_Building33_36.set('fieldImages', {'id': '', 'type': '', });
lyr_building34_37.set('fieldImages', {'id': '', 'type': '', });
lyr_building35_38.set('fieldImages', {'id': '', 'type': '', });
lyr_building36_39.set('fieldImages', {'id': '', 'type': '', });
lyr_building37_40.set('fieldImages', {'id': '', 'type': '', });
lyr_building38_41.set('fieldImages', {'id': '', 'type': '', });
lyr_building39_42.set('fieldImages', {'id': '', 'type': '', });
lyr_Building40_43.set('fieldImages', {'id': '', 'type': '', });
lyr_Building41_44.set('fieldImages', {'id': '', 'type': '', });
lyr_Building42_45.set('fieldImages', {'id': '', 'type': '', });
lyr_Building43_46.set('fieldImages', {'id': '', 'type': '', });
lyr_building45_47.set('fieldImages', {'id': '', 'type': '', });
lyr_building47_48.set('fieldImages', {'id': '', 'type': '', });
lyr_Building48_49.set('fieldImages', {'id': '', 'type': '', });
lyr_Building49_50.set('fieldImages', {'id': '', 'type': '', });
lyr_Building50_51.set('fieldImages', {'id': '', 'type': '', });
lyr_Building51_52.set('fieldImages', {'id': '', 'type': '', });
lyr_Building52_53.set('fieldImages', {'id': '', 'type': '', });
lyr_Building53_54.set('fieldImages', {'id': '', 'type': '', });
lyr_Building54_55.set('fieldImages', {'id': '', 'type': '', });
lyr_Building55_56.set('fieldImages', {'id': '', 'type': '', });
lyr_Building56_57.set('fieldImages', {'id': '', 'type': '', });
lyr_Building57_58.set('fieldImages', {'id': '', 'type': '', });
lyr_Building58_59.set('fieldImages', {'id': '', 'type': '', });
lyr_Building60_60.set('fieldImages', {'id': '', 'type': '', });
lyr_Building61_61.set('fieldImages', {'id': '', 'type': '', });
lyr_Building62_62.set('fieldImages', {'id': '', 'type': '', });
lyr_Building63_63.set('fieldImages', {'id': '', 'type': '', });
lyr_building64_64.set('fieldImages', {'id': '', 'type': '', });
lyr_Building65_65.set('fieldImages', {'id': '', 'type': '', });
lyr_Building66_66.set('fieldImages', {'id': '', 'type': '', });
lyr_Building67_67.set('fieldImages', {'id': '', 'type': '', });
lyr_Building68_68.set('fieldImages', {'id': '', 'type': '', });
lyr_Building69_69.set('fieldImages', {'id': '', 'type': '', });
lyr_Building70_70.set('fieldImages', {'id': '', 'type': '', });
lyr_Building71_71.set('fieldImages', {'id': '', 'type': '', });
lyr_Building72_72.set('fieldImages', {'id': '', 'type': '', });
lyr_Building73_73.set('fieldImages', {'id': '', 'type': '', });
lyr_Building74_74.set('fieldImages', {'id': '', 'type': '', });
lyr_Building75_75.set('fieldImages', {'id': '', 'type': '', });
lyr_Building76_76.set('fieldImages', {'id': '', 'type': '', });
lyr_Building77_77.set('fieldImages', {'id': '', 'type': '', });
lyr_Building78_78.set('fieldImages', {'id': '', 'type': '', });
lyr_Building79_79.set('fieldImages', {'id': '', 'type': '', });
lyr_Building80_80.set('fieldImages', {'id': '', 'type': '', });
lyr_Building81_81.set('fieldImages', {'id': '', 'tyoe': '', });
lyr_Building82_82.set('fieldImages', {'id': '', 'type': '', });
lyr_Building83_83.set('fieldImages', {'id': '', 'type': '', });
lyr_Building84_84.set('fieldImages', {'id': '', 'type': '', });
lyr_Building85_85.set('fieldImages', {'id': '', 'type': '', });
lyr_Building89_86.set('fieldImages', {'id': '', 'type': '', });
lyr_Building90_87.set('fieldImages', {'id': '', 'type': '', });
lyr_Building91_88.set('fieldImages', {'id': '', 'type': '', });
lyr_Building92_89.set('fieldImages', {'id': '', 'type': '', });
lyr_Building93_90.set('fieldImages', {'id': '', 'type': '', });
lyr_Building94_91.set('fieldImages', {'id': '', 'type': '', });
lyr_Building95_92.set('fieldImages', {'id': '', 'type': '', });
lyr_Building96_93.set('fieldImages', {'id': '', 'type': '', });
lyr_Building97_94.set('fieldImages', {'id': '', 'type': '', });
lyr_Building98_95.set('fieldImages', {'id': '', 'type': '', });
lyr_Building99_96.set('fieldImages', {'id': '', 'type': '', });
lyr_Building100_97.set('fieldImages', {'id': '', 'type': '', });
lyr_Building101_98.set('fieldImages', {'id': '', 'type': '', });
lyr_Building102_99.set('fieldImages', {'id': '', 'type': '', });
lyr_Building103_100.set('fieldImages', {'id': '', 'type': '', });
lyr_Building104_101.set('fieldImages', {'id': '', 'type': '', });
lyr_Building1602_102.set('fieldImages', {'id': '', 'Area': '', });
lyr_Building1603_103.set('fieldImages', {'id': '', 'Area': '', });
lyr_Building1701_104.set('fieldImages', {'id': '', 'Area': '', 'Facility': '', });
lyr_Building1702_105.set('fieldImages', {'id': '', 'Area': '', });
lyr_Building1703_106.set('fieldImages', {'id': '', 'Area': '', 'Facility': '', });
lyr_Building1704_107.set('fieldImages', {'id': '', 'Area': '', 'Facility': '', });
lyr_Building1705_108.set('fieldImages', {'id': '', 'Area': '', 'Facility': '', });
lyr_Building1706_109.set('fieldImages', {'id': '', 'Area': '', 'Facility': '', });
lyr_Building1707_110.set('fieldImages', {'id': '', });
lyr_Building1708_111.set('fieldImages', {'id': '', 'Area': '', 'Facility': '', });
lyr_Building1709_112.set('fieldImages', {'id': '', 'Area': '', });
lyr_Building1710_113.set('fieldImages', {'id': '', 'Area': '', 'Facility': '', });
lyr_Building1711_114.set('fieldImages', {'id': '', 'Area': '', 'Facility': '', });
lyr_Building1712_115.set('fieldImages', {'id': '', 'Area': '', 'Facility': '', });
lyr_Building1713_116.set('fieldImages', {'id': '', 'Area': '', 'Facility': '', });
lyr_Building1801_117.set('fieldImages', {'id': '', 'Area': '', 'Facility': '', });
lyr_Building1901_118.set('fieldImages', {'id': '', 'Area': '', 'Faciliity': '', });
lyr_Building1902_119.set('fieldImages', {'id': '', 'Area': '', 'Facility': '', });
lyr_Building1903_120.set('fieldImages', {'id': '', 'Area': '', 'Facility': '', });
lyr_Building1201_121.set('fieldImages', {'id': '', 'Facility': '', 'Area': '', });
lyr_Building1601_122.set('fieldImages', {'id': '', 'Facility': '', 'Area': '', });
lyr_Entrance_123.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', });
lyr_NotDesignated_124.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_SportsRecreation_125.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_CommercialArea_126.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_Pasture_127.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_BoundaryHall_128.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_DemonstrationSchool_129.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_Educationfaculty_130.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_LecturersVillage_131.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Facility': 'TextEdit', });
lyr_EcoPark_132.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_NewRoad_133.set('fieldImages', {'id': '', 'Length': '', 'Facility': '', });
lyr_Auditorium_134.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_Administration_135.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_HealthSciences_136.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': '', });
lyr_AgricNaturalresources_137.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_Administration_138.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_waste_compost_site_139.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_TransportandMechanization_140.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_CommercialAreas_141.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_Campus_boundary_1.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr_Building_2.set('fieldLabels', {'id': 'no label', });
lyr_Building2_3.set('fieldLabels', {'id': 'no label', });
lyr_Building3_4.set('fieldLabels', {'id': 'no label', 'Type': 'no label', });
lyr_Building4_5.set('fieldLabels', {'id': 'no label', 'Type': 'no label', });
lyr_building5_6.set('fieldLabels', {'id': 'no label', 'Type': 'no label', });
lyr_building6_7.set('fieldLabels', {'id': 'no label', 'Type': 'no label', });
lyr_building7_8.set('fieldLabels', {'id': 'no label', 'Type': 'no label', });
lyr_building8_9.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building9_10.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building10_11.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building11_12.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building12_13.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building13_14.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building14_15.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Pitch_16.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Pitch2_17.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building15_18.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building16_19.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building17_20.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building18_21.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building19_22.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building20_23.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building21_24.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building22shp_25.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building23_26.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building24_27.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building25_28.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building26_29.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building27_30.set('fieldLabels', {'id': 'no label', 'TYPE': 'no label', });
lyr_Building28_31.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building29_32.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building30_33.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building31_34.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building32_35.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building33_36.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building34_37.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building35_38.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building36_39.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building37_40.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building38_41.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building39_42.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building40_43.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building41_44.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building42_45.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building43_46.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building45_47.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building47_48.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building48_49.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building49_50.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building50_51.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building51_52.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building52_53.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building53_54.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building54_55.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building55_56.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building56_57.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building57_58.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building58_59.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building60_60.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building61_61.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building62_62.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building63_63.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_building64_64.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building65_65.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building66_66.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building67_67.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building68_68.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building69_69.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building70_70.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building71_71.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building72_72.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building73_73.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building74_74.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building75_75.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building76_76.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building77_77.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building78_78.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building79_79.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building80_80.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building81_81.set('fieldLabels', {'id': 'no label', 'tyoe': 'no label', });
lyr_Building82_82.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building83_83.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building84_84.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building85_85.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building89_86.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building90_87.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building91_88.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building92_89.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building93_90.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building94_91.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building95_92.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building96_93.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building97_94.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building98_95.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building99_96.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building100_97.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building101_98.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building102_99.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building103_100.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building104_101.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_Building1602_102.set('fieldLabels', {'id': 'no label', 'Area': 'no label', });
lyr_Building1603_103.set('fieldLabels', {'id': 'no label', 'Area': 'no label', });
lyr_Building1701_104.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'no label', });
lyr_Building1702_105.set('fieldLabels', {'id': 'no label', 'Area': 'no label', });
lyr_Building1703_106.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'no label', });
lyr_Building1704_107.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'no label', });
lyr_Building1705_108.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'no label', });
lyr_Building1706_109.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'no label', });
lyr_Building1707_110.set('fieldLabels', {'id': 'no label', });
lyr_Building1708_111.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'no label', });
lyr_Building1709_112.set('fieldLabels', {'id': 'no label', 'Area': 'no label', });
lyr_Building1710_113.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'no label', });
lyr_Building1711_114.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'no label', });
lyr_Building1712_115.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'no label', });
lyr_Building1713_116.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'no label', });
lyr_Building1801_117.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'no label', });
lyr_Building1901_118.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Faciliity': 'no label', });
lyr_Building1902_119.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'no label', });
lyr_Building1903_120.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'no label', });
lyr_Building1201_121.set('fieldLabels', {'id': 'no label', 'Facility': 'no label', 'Area': 'no label', });
lyr_Building1601_122.set('fieldLabels', {'id': 'no label', 'Facility': 'no label', 'Area': 'no label', });
lyr_Entrance_123.set('fieldLabels', {'id': 'no label', 'Facility': 'no label', });
lyr_NotDesignated_124.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_SportsRecreation_125.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_CommercialArea_126.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_Pasture_127.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_BoundaryHall_128.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_DemonstrationSchool_129.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_Educationfaculty_130.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - visible with data', 'Area': 'inline label - always visible', });
lyr_LecturersVillage_131.set('fieldLabels', {'id': 'no label', 'Area': 'inline label - always visible', 'Facility': 'inline label - always visible', });
lyr_EcoPark_132.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_NewRoad_133.set('fieldLabels', {'id': 'no label', 'Length': 'inline label - always visible', 'Facility': 'inline label - always visible', });
lyr_Auditorium_134.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - visible with data', 'Area': 'inline label - always visible', });
lyr_Administration_135.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_HealthSciences_136.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_AgricNaturalresources_137.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_Administration_138.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_waste_compost_site_139.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_TransportandMechanization_140.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_CommercialAreas_141.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_CommercialAreas_141.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});