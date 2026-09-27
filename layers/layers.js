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
var format_SecurityPost_1 = new ol.format.GeoJSON();
var features_SecurityPost_1 = format_SecurityPost_1.readFeatures(json_SecurityPost_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SecurityPost_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecurityPost_1.addFeatures(features_SecurityPost_1);
var lyr_SecurityPost_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SecurityPost_1, 
                style: style_SecurityPost_1,
                popuplayertitle: 'Security Post',
                interactive: true,
                title: '<img src="styles/legend/SecurityPost_1.png" /> Security Post'
            });
var format_USTEDClinic_2 = new ol.format.GeoJSON();
var features_USTEDClinic_2 = format_USTEDClinic_2.readFeatures(json_USTEDClinic_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USTEDClinic_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USTEDClinic_2.addFeatures(features_USTEDClinic_2);
var lyr_USTEDClinic_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USTEDClinic_2, 
                style: style_USTEDClinic_2,
                popuplayertitle: 'USTED Clinic',
                interactive: true,
                title: '<img src="styles/legend/USTEDClinic_2.png" /> USTED Clinic'
            });
var format_AAMUSTEDMsch_3 = new ol.format.GeoJSON();
var features_AAMUSTEDMsch_3 = format_AAMUSTEDMsch_3.readFeatures(json_AAMUSTEDMsch_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AAMUSTEDMsch_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AAMUSTEDMsch_3.addFeatures(features_AAMUSTEDMsch_3);
var lyr_AAMUSTEDMsch_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AAMUSTEDMsch_3, 
                style: style_AAMUSTEDMsch_3,
                popuplayertitle: 'AAMUSTED-M sch',
                interactive: true,
                title: '<img src="styles/legend/AAMUSTEDMsch_3.png" /> AAMUSTED-M sch'
            });
var format_PowerHouse_4 = new ol.format.GeoJSON();
var features_PowerHouse_4 = format_PowerHouse_4.readFeatures(json_PowerHouse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerHouse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerHouse_4.addFeatures(features_PowerHouse_4);
var lyr_PowerHouse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PowerHouse_4, 
                style: style_PowerHouse_4,
                popuplayertitle: 'Power House',
                interactive: true,
                title: '<img src="styles/legend/PowerHouse_4.png" /> Power House'
            });
var format_UEWCoorp_5 = new ol.format.GeoJSON();
var features_UEWCoorp_5 = format_UEWCoorp_5.readFeatures(json_UEWCoorp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UEWCoorp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UEWCoorp_5.addFeatures(features_UEWCoorp_5);
var lyr_UEWCoorp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UEWCoorp_5, 
                style: style_UEWCoorp_5,
                popuplayertitle: 'UEW Coorp',
                interactive: true,
                title: '<img src="styles/legend/UEWCoorp_5.png" /> UEW Coorp'
            });
var format_CooperativeAvenue_6 = new ol.format.GeoJSON();
var features_CooperativeAvenue_6 = format_CooperativeAvenue_6.readFeatures(json_CooperativeAvenue_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CooperativeAvenue_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CooperativeAvenue_6.addFeatures(features_CooperativeAvenue_6);
var lyr_CooperativeAvenue_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CooperativeAvenue_6, 
                style: style_CooperativeAvenue_6,
                popuplayertitle: 'Cooperative Avenue',
                interactive: true,
                title: '<img src="styles/legend/CooperativeAvenue_6.png" /> Cooperative Avenue'
            });
var format_PrincipalsAvenue_7 = new ol.format.GeoJSON();
var features_PrincipalsAvenue_7 = format_PrincipalsAvenue_7.readFeatures(json_PrincipalsAvenue_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrincipalsAvenue_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrincipalsAvenue_7.addFeatures(features_PrincipalsAvenue_7);
var lyr_PrincipalsAvenue_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrincipalsAvenue_7, 
                style: style_PrincipalsAvenue_7,
                popuplayertitle: 'Principals Avenue',
                interactive: true,
                title: '<img src="styles/legend/PrincipalsAvenue_7.png" /> Principals Avenue'
            });
var format_USTEDMAvenue_8 = new ol.format.GeoJSON();
var features_USTEDMAvenue_8 = format_USTEDMAvenue_8.readFeatures(json_USTEDMAvenue_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USTEDMAvenue_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USTEDMAvenue_8.addFeatures(features_USTEDMAvenue_8);
var lyr_USTEDMAvenue_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USTEDMAvenue_8, 
                style: style_USTEDMAvenue_8,
                popuplayertitle: 'USTED-M Avenue',
                interactive: true,
                title: '<img src="styles/legend/USTEDMAvenue_8.png" /> USTED-M Avenue'
            });
var format_Campus_boundary_9 = new ol.format.GeoJSON();
var features_Campus_boundary_9 = format_Campus_boundary_9.readFeatures(json_Campus_boundary_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campus_boundary_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campus_boundary_9.addFeatures(features_Campus_boundary_9);
var lyr_Campus_boundary_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Campus_boundary_9, 
                style: style_Campus_boundary_9,
                popuplayertitle: 'Campus_boundary',
                interactive: false,
                title: '<img src="styles/legend/Campus_boundary_9.png" /> Campus_boundary'
            });
var format_GovernmentSchool_10 = new ol.format.GeoJSON();
var features_GovernmentSchool_10 = format_GovernmentSchool_10.readFeatures(json_GovernmentSchool_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GovernmentSchool_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GovernmentSchool_10.addFeatures(features_GovernmentSchool_10);
var lyr_GovernmentSchool_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GovernmentSchool_10, 
                style: style_GovernmentSchool_10,
                popuplayertitle: 'Government School',
                interactive: true,
                title: '<img src="styles/legend/GovernmentSchool_10.png" /> Government School'
            });
var format_StoreRoom_11 = new ol.format.GeoJSON();
var features_StoreRoom_11 = format_StoreRoom_11.readFeatures(json_StoreRoom_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StoreRoom_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StoreRoom_11.addFeatures(features_StoreRoom_11);
var lyr_StoreRoom_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StoreRoom_11, 
                style: style_StoreRoom_11,
                popuplayertitle: 'Store Room',
                interactive: true,
                title: '<img src="styles/legend/StoreRoom_11.png" /> Store Room'
            });
var format_AnimalFarm_12 = new ol.format.GeoJSON();
var features_AnimalFarm_12 = format_AnimalFarm_12.readFeatures(json_AnimalFarm_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnimalFarm_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnimalFarm_12.addFeatures(features_AnimalFarm_12);
var lyr_AnimalFarm_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnimalFarm_12, 
                style: style_AnimalFarm_12,
                popuplayertitle: 'Animal Farm',
                interactive: true,
                title: '<img src="styles/legend/AnimalFarm_12.png" /> Animal Farm'
            });
var format_CropFarm_13 = new ol.format.GeoJSON();
var features_CropFarm_13 = format_CropFarm_13.readFeatures(json_CropFarm_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CropFarm_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CropFarm_13.addFeatures(features_CropFarm_13);
var lyr_CropFarm_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CropFarm_13, 
                style: style_CropFarm_13,
                popuplayertitle: 'Crop Farm',
                interactive: true,
                title: '<img src="styles/legend/CropFarm_13.png" /> Crop Farm'
            });
var format_VolleyBallPitch_14 = new ol.format.GeoJSON();
var features_VolleyBallPitch_14 = format_VolleyBallPitch_14.readFeatures(json_VolleyBallPitch_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VolleyBallPitch_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VolleyBallPitch_14.addFeatures(features_VolleyBallPitch_14);
var lyr_VolleyBallPitch_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VolleyBallPitch_14, 
                style: style_VolleyBallPitch_14,
                popuplayertitle: 'Volley Ball Pitch',
                interactive: true,
                title: '<img src="styles/legend/VolleyBallPitch_14.png" /> Volley Ball Pitch'
            });
var format_BasketballPitch_15 = new ol.format.GeoJSON();
var features_BasketballPitch_15 = format_BasketballPitch_15.readFeatures(json_BasketballPitch_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BasketballPitch_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BasketballPitch_15.addFeatures(features_BasketballPitch_15);
var lyr_BasketballPitch_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BasketballPitch_15, 
                style: style_BasketballPitch_15,
                popuplayertitle: 'Basketball Pitch',
                interactive: true,
                title: '<img src="styles/legend/BasketballPitch_15.png" /> Basketball Pitch'
            });
var format_Mosque_16 = new ol.format.GeoJSON();
var features_Mosque_16 = format_Mosque_16.readFeatures(json_Mosque_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosque_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_16.addFeatures(features_Mosque_16);
var lyr_Mosque_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosque_16, 
                style: style_Mosque_16,
                popuplayertitle: 'Mosque',
                interactive: true,
                title: '<img src="styles/legend/Mosque_16.png" /> Mosque'
            });
var format_Canteen_17 = new ol.format.GeoJSON();
var features_Canteen_17 = format_Canteen_17.readFeatures(json_Canteen_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canteen_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canteen_17.addFeatures(features_Canteen_17);
var lyr_Canteen_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Canteen_17, 
                style: style_Canteen_17,
                popuplayertitle: 'Canteen',
                interactive: true,
                title: '<img src="styles/legend/Canteen_17.png" /> Canteen'
            });
var format_Chapel_18 = new ol.format.GeoJSON();
var features_Chapel_18 = format_Chapel_18.readFeatures(json_Chapel_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chapel_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chapel_18.addFeatures(features_Chapel_18);
var lyr_Chapel_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chapel_18, 
                style: style_Chapel_18,
                popuplayertitle: 'Chapel ',
                interactive: true,
                title: '<img src="styles/legend/Chapel_18.png" /> Chapel '
            });
var format_USTEDMPark_19 = new ol.format.GeoJSON();
var features_USTEDMPark_19 = format_USTEDMPark_19.readFeatures(json_USTEDMPark_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USTEDMPark_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USTEDMPark_19.addFeatures(features_USTEDMPark_19);
var lyr_USTEDMPark_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USTEDMPark_19, 
                style: style_USTEDMPark_19,
                popuplayertitle: 'USTED-M Park',
                interactive: true,
                title: '<img src="styles/legend/USTEDMPark_19.png" /> USTED-M Park'
            });
var format_USTEDMCongregationGrounds_20 = new ol.format.GeoJSON();
var features_USTEDMCongregationGrounds_20 = format_USTEDMCongregationGrounds_20.readFeatures(json_USTEDMCongregationGrounds_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USTEDMCongregationGrounds_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USTEDMCongregationGrounds_20.addFeatures(features_USTEDMCongregationGrounds_20);
var lyr_USTEDMCongregationGrounds_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USTEDMCongregationGrounds_20, 
                style: style_USTEDMCongregationGrounds_20,
                popuplayertitle: 'USTED-M Congregation Grounds',
                interactive: true,
                title: '<img src="styles/legend/USTEDMCongregationGrounds_20.png" /> USTED-M Congregation Grounds'
            });
var format_NewOfficeBlock_21 = new ol.format.GeoJSON();
var features_NewOfficeBlock_21 = format_NewOfficeBlock_21.readFeatures(json_NewOfficeBlock_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewOfficeBlock_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewOfficeBlock_21.addFeatures(features_NewOfficeBlock_21);
var lyr_NewOfficeBlock_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewOfficeBlock_21, 
                style: style_NewOfficeBlock_21,
                popuplayertitle: 'New Office Block',
                interactive: true,
                title: '<img src="styles/legend/NewOfficeBlock_21.png" /> New Office Block'
            });
var format_KICCOffice_22 = new ol.format.GeoJSON();
var features_KICCOffice_22 = format_KICCOffice_22.readFeatures(json_KICCOffice_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KICCOffice_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KICCOffice_22.addFeatures(features_KICCOffice_22);
var lyr_KICCOffice_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KICCOffice_22, 
                style: style_KICCOffice_22,
                popuplayertitle: 'KICC Office',
                interactive: true,
                title: '<img src="styles/legend/KICCOffice_22.png" /> KICC Office'
            });
var format_AuditBlock_23 = new ol.format.GeoJSON();
var features_AuditBlock_23 = format_AuditBlock_23.readFeatures(json_AuditBlock_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AuditBlock_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AuditBlock_23.addFeatures(features_AuditBlock_23);
var lyr_AuditBlock_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AuditBlock_23, 
                style: style_AuditBlock_23,
                popuplayertitle: 'Audit Block',
                interactive: true,
                title: '<img src="styles/legend/AuditBlock_23.png" /> Audit Block'
            });
var format_StaffCommonRoom_24 = new ol.format.GeoJSON();
var features_StaffCommonRoom_24 = format_StaffCommonRoom_24.readFeatures(json_StaffCommonRoom_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StaffCommonRoom_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StaffCommonRoom_24.addFeatures(features_StaffCommonRoom_24);
var lyr_StaffCommonRoom_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StaffCommonRoom_24, 
                style: style_StaffCommonRoom_24,
                popuplayertitle: 'Staff Common Room',
                interactive: true,
                title: '<img src="styles/legend/StaffCommonRoom_24.png" /> Staff Common Room'
            });
var format_FacultyofEducation_25 = new ol.format.GeoJSON();
var features_FacultyofEducation_25 = format_FacultyofEducation_25.readFeatures(json_FacultyofEducation_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FacultyofEducation_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FacultyofEducation_25.addFeatures(features_FacultyofEducation_25);
var lyr_FacultyofEducation_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FacultyofEducation_25, 
                style: style_FacultyofEducation_25,
                popuplayertitle: 'Faculty of Education',
                interactive: true,
                title: '<img src="styles/legend/FacultyofEducation_25.png" /> Faculty of Education'
            });
var format_FacultyofEnvHealthEd_26 = new ol.format.GeoJSON();
var features_FacultyofEnvHealthEd_26 = format_FacultyofEnvHealthEd_26.readFeatures(json_FacultyofEnvHealthEd_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FacultyofEnvHealthEd_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FacultyofEnvHealthEd_26.addFeatures(features_FacultyofEnvHealthEd_26);
var lyr_FacultyofEnvHealthEd_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FacultyofEnvHealthEd_26, 
                style: style_FacultyofEnvHealthEd_26,
                popuplayertitle: 'Faculty of Env. Health Ed.',
                interactive: true,
                title: '<img src="styles/legend/FacultyofEnvHealthEd_26.png" /> Faculty of Env. Health Ed.'
            });
var format_AdministrationBlock_27 = new ol.format.GeoJSON();
var features_AdministrationBlock_27 = format_AdministrationBlock_27.readFeatures(json_AdministrationBlock_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrationBlock_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrationBlock_27.addFeatures(features_AdministrationBlock_27);
var lyr_AdministrationBlock_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrationBlock_27, 
                style: style_AdministrationBlock_27,
                popuplayertitle: 'Administration Block',
                interactive: true,
                title: '<img src="styles/legend/AdministrationBlock_27.png" /> Administration Block'
            });
var format_LibraryComplexLBFFRRSF_28 = new ol.format.GeoJSON();
var features_LibraryComplexLBFFRRSF_28 = format_LibraryComplexLBFFRRSF_28.readFeatures(json_LibraryComplexLBFFRRSF_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LibraryComplexLBFFRRSF_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LibraryComplexLBFFRRSF_28.addFeatures(features_LibraryComplexLBFFRRSF_28);
var lyr_LibraryComplexLBFFRRSF_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LibraryComplexLBFFRRSF_28, 
                style: style_LibraryComplexLBFFRRSF_28,
                popuplayertitle: 'Library Complex (LB FF/RR/SF)',
                interactive: true,
                title: '<img src="styles/legend/LibraryComplexLBFFRRSF_28.png" /> Library Complex (LB FF/RR/SF)'
            });
var format_NewLectureTheatreNLT_29 = new ol.format.GeoJSON();
var features_NewLectureTheatreNLT_29 = format_NewLectureTheatreNLT_29.readFeatures(json_NewLectureTheatreNLT_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewLectureTheatreNLT_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewLectureTheatreNLT_29.addFeatures(features_NewLectureTheatreNLT_29);
var lyr_NewLectureTheatreNLT_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewLectureTheatreNLT_29, 
                style: style_NewLectureTheatreNLT_29,
                popuplayertitle: 'New Lecture Theatre (NLT)',
                interactive: true,
                title: '<img src="styles/legend/NewLectureTheatreNLT_29.png" /> New Lecture Theatre (NLT)'
            });
var format_NewScienceBlock_30 = new ol.format.GeoJSON();
var features_NewScienceBlock_30 = format_NewScienceBlock_30.readFeatures(json_NewScienceBlock_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewScienceBlock_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewScienceBlock_30.addFeatures(features_NewScienceBlock_30);
var lyr_NewScienceBlock_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewScienceBlock_30, 
                style: style_NewScienceBlock_30,
                popuplayertitle: 'New Science Block',
                interactive: true,
                title: '<img src="styles/legend/NewScienceBlock_30.png" /> New Science Block'
            });
var format_ICTBlock_31 = new ol.format.GeoJSON();
var features_ICTBlock_31 = format_ICTBlock_31.readFeatures(json_ICTBlock_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICTBlock_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICTBlock_31.addFeatures(features_ICTBlock_31);
var lyr_ICTBlock_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ICTBlock_31, 
                style: style_ICTBlock_31,
                popuplayertitle: 'ICT Block',
                interactive: true,
                title: '<img src="styles/legend/ICTBlock_31.png" /> ICT Block'
            });
var format_LectureTheatreLT123_32 = new ol.format.GeoJSON();
var features_LectureTheatreLT123_32 = format_LectureTheatreLT123_32.readFeatures(json_LectureTheatreLT123_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LectureTheatreLT123_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LectureTheatreLT123_32.addFeatures(features_LectureTheatreLT123_32);
var lyr_LectureTheatreLT123_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LectureTheatreLT123_32, 
                style: style_LectureTheatreLT123_32,
                popuplayertitle: 'Lecture Theatre (LT 1,2,3)',
                interactive: true,
                title: '<img src="styles/legend/LectureTheatreLT123_32.png" /> Lecture Theatre (LT 1,2,3)'
            });
var format_NewLectureBlock_33 = new ol.format.GeoJSON();
var features_NewLectureBlock_33 = format_NewLectureBlock_33.readFeatures(json_NewLectureBlock_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewLectureBlock_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewLectureBlock_33.addFeatures(features_NewLectureBlock_33);
var lyr_NewLectureBlock_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewLectureBlock_33, 
                style: style_NewLectureBlock_33,
                popuplayertitle: 'New Lecture Block',
                interactive: true,
                title: '<img src="styles/legend/NewLectureBlock_33.png" /> New Lecture Block'
            });
var format_ChapelExtension_34 = new ol.format.GeoJSON();
var features_ChapelExtension_34 = format_ChapelExtension_34.readFeatures(json_ChapelExtension_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChapelExtension_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChapelExtension_34.addFeatures(features_ChapelExtension_34);
var lyr_ChapelExtension_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChapelExtension_34, 
                style: style_ChapelExtension_34,
                popuplayertitle: 'Chapel Extension',
                interactive: true,
                title: '<img src="styles/legend/ChapelExtension_34.png" /> Chapel Extension'
            });
var format_OldLab_35 = new ol.format.GeoJSON();
var features_OldLab_35 = format_OldLab_35.readFeatures(json_OldLab_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OldLab_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OldLab_35.addFeatures(features_OldLab_35);
var lyr_OldLab_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OldLab_35, 
                style: style_OldLab_35,
                popuplayertitle: 'Old Lab',
                interactive: true,
                title: '<img src="styles/legend/OldLab_35.png" /> Old Lab'
            });
var format_OldLibrary_36 = new ol.format.GeoJSON();
var features_OldLibrary_36 = format_OldLibrary_36.readFeatures(json_OldLibrary_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OldLibrary_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OldLibrary_36.addFeatures(features_OldLibrary_36);
var lyr_OldLibrary_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OldLibrary_36, 
                style: style_OldLibrary_36,
                popuplayertitle: 'Old Library',
                interactive: true,
                title: '<img src="styles/legend/OldLibrary_36.png" /> Old Library'
            });
var format_LTUnderConstruction_37 = new ol.format.GeoJSON();
var features_LTUnderConstruction_37 = format_LTUnderConstruction_37.readFeatures(json_LTUnderConstruction_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LTUnderConstruction_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LTUnderConstruction_37.addFeatures(features_LTUnderConstruction_37);
var lyr_LTUnderConstruction_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LTUnderConstruction_37, 
                style: style_LTUnderConstruction_37,
                popuplayertitle: 'LT Under Construction',
                interactive: true,
                title: '<img src="styles/legend/LTUnderConstruction_37.png" /> LT Under Construction'
            });
var format_SlaughterHouseSLT_38 = new ol.format.GeoJSON();
var features_SlaughterHouseSLT_38 = format_SlaughterHouseSLT_38.readFeatures(json_SlaughterHouseSLT_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SlaughterHouseSLT_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SlaughterHouseSLT_38.addFeatures(features_SlaughterHouseSLT_38);
var lyr_SlaughterHouseSLT_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SlaughterHouseSLT_38, 
                style: style_SlaughterHouseSLT_38,
                popuplayertitle: 'Slaughter House(SLT)',
                interactive: true,
                title: '<img src="styles/legend/SlaughterHouseSLT_38.png" /> Slaughter House(SLT)'
            });
var format_ReadingRoom_39 = new ol.format.GeoJSON();
var features_ReadingRoom_39 = format_ReadingRoom_39.readFeatures(json_ReadingRoom_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReadingRoom_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReadingRoom_39.addFeatures(features_ReadingRoom_39);
var lyr_ReadingRoom_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReadingRoom_39, 
                style: style_ReadingRoom_39,
                popuplayertitle: 'Reading Room',
                interactive: true,
                title: '<img src="styles/legend/ReadingRoom_39.png" /> Reading Room'
            });
var format_SportsComplex_40 = new ol.format.GeoJSON();
var features_SportsComplex_40 = format_SportsComplex_40.readFeatures(json_SportsComplex_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SportsComplex_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SportsComplex_40.addFeatures(features_SportsComplex_40);
var lyr_SportsComplex_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SportsComplex_40, 
                style: style_SportsComplex_40,
                popuplayertitle: 'Sports Complex',
                interactive: true,
                title: '<img src="styles/legend/SportsComplex_40.png" /> Sports Complex'
            });
var format_Bungalow1_41 = new ol.format.GeoJSON();
var features_Bungalow1_41 = format_Bungalow1_41.readFeatures(json_Bungalow1_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow1_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow1_41.addFeatures(features_Bungalow1_41);
var lyr_Bungalow1_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow1_41, 
                style: style_Bungalow1_41,
                popuplayertitle: 'Bungalow 1',
                interactive: true,
                title: '<img src="styles/legend/Bungalow1_41.png" /> Bungalow 1'
            });
var format_Bungalow2_42 = new ol.format.GeoJSON();
var features_Bungalow2_42 = format_Bungalow2_42.readFeatures(json_Bungalow2_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow2_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow2_42.addFeatures(features_Bungalow2_42);
var lyr_Bungalow2_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow2_42, 
                style: style_Bungalow2_42,
                popuplayertitle: 'Bungalow 2',
                interactive: true,
                title: '<img src="styles/legend/Bungalow2_42.png" /> Bungalow 2'
            });
var format_Bungalow3_43 = new ol.format.GeoJSON();
var features_Bungalow3_43 = format_Bungalow3_43.readFeatures(json_Bungalow3_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow3_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow3_43.addFeatures(features_Bungalow3_43);
var lyr_Bungalow3_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow3_43, 
                style: style_Bungalow3_43,
                popuplayertitle: 'Bungalow 3',
                interactive: true,
                title: '<img src="styles/legend/Bungalow3_43.png" /> Bungalow 3'
            });
var format_Bungalow4_44 = new ol.format.GeoJSON();
var features_Bungalow4_44 = format_Bungalow4_44.readFeatures(json_Bungalow4_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow4_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow4_44.addFeatures(features_Bungalow4_44);
var lyr_Bungalow4_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow4_44, 
                style: style_Bungalow4_44,
                popuplayertitle: 'Bungalow 4',
                interactive: true,
                title: '<img src="styles/legend/Bungalow4_44.png" /> Bungalow 4'
            });
var format_Bungalow4Garage_45 = new ol.format.GeoJSON();
var features_Bungalow4Garage_45 = format_Bungalow4Garage_45.readFeatures(json_Bungalow4Garage_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow4Garage_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow4Garage_45.addFeatures(features_Bungalow4Garage_45);
var lyr_Bungalow4Garage_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow4Garage_45, 
                style: style_Bungalow4Garage_45,
                popuplayertitle: 'Bungalow 4 Garage',
                interactive: true,
                title: '<img src="styles/legend/Bungalow4Garage_45.png" /> Bungalow 4 Garage'
            });
var format_Bungalow5_46 = new ol.format.GeoJSON();
var features_Bungalow5_46 = format_Bungalow5_46.readFeatures(json_Bungalow5_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow5_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow5_46.addFeatures(features_Bungalow5_46);
var lyr_Bungalow5_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow5_46, 
                style: style_Bungalow5_46,
                popuplayertitle: 'Bungalow 5',
                interactive: true,
                title: '<img src="styles/legend/Bungalow5_46.png" /> Bungalow 5'
            });
var format_Bungalow6_47 = new ol.format.GeoJSON();
var features_Bungalow6_47 = format_Bungalow6_47.readFeatures(json_Bungalow6_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow6_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow6_47.addFeatures(features_Bungalow6_47);
var lyr_Bungalow6_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow6_47, 
                style: style_Bungalow6_47,
                popuplayertitle: 'Bungalow 6',
                interactive: true,
                title: '<img src="styles/legend/Bungalow6_47.png" /> Bungalow 6'
            });
var format_Bungalow7_48 = new ol.format.GeoJSON();
var features_Bungalow7_48 = format_Bungalow7_48.readFeatures(json_Bungalow7_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow7_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow7_48.addFeatures(features_Bungalow7_48);
var lyr_Bungalow7_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow7_48, 
                style: style_Bungalow7_48,
                popuplayertitle: 'Bungalow 7',
                interactive: true,
                title: '<img src="styles/legend/Bungalow7_48.png" /> Bungalow 7'
            });
var format_Bungalow8_49 = new ol.format.GeoJSON();
var features_Bungalow8_49 = format_Bungalow8_49.readFeatures(json_Bungalow8_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow8_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow8_49.addFeatures(features_Bungalow8_49);
var lyr_Bungalow8_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow8_49, 
                style: style_Bungalow8_49,
                popuplayertitle: 'Bungalow 8',
                interactive: true,
                title: '<img src="styles/legend/Bungalow8_49.png" /> Bungalow 8'
            });
var format_Bungalow9_50 = new ol.format.GeoJSON();
var features_Bungalow9_50 = format_Bungalow9_50.readFeatures(json_Bungalow9_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow9_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow9_50.addFeatures(features_Bungalow9_50);
var lyr_Bungalow9_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow9_50, 
                style: style_Bungalow9_50,
                popuplayertitle: 'Bungalow 9',
                interactive: true,
                title: '<img src="styles/legend/Bungalow9_50.png" /> Bungalow 9'
            });
var format_Bungalow10_51 = new ol.format.GeoJSON();
var features_Bungalow10_51 = format_Bungalow10_51.readFeatures(json_Bungalow10_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow10_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow10_51.addFeatures(features_Bungalow10_51);
var lyr_Bungalow10_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow10_51, 
                style: style_Bungalow10_51,
                popuplayertitle: 'Bungalow 10',
                interactive: true,
                title: '<img src="styles/legend/Bungalow10_51.png" /> Bungalow 10'
            });
var format_Bungalow11_52 = new ol.format.GeoJSON();
var features_Bungalow11_52 = format_Bungalow11_52.readFeatures(json_Bungalow11_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow11_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow11_52.addFeatures(features_Bungalow11_52);
var lyr_Bungalow11_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow11_52, 
                style: style_Bungalow11_52,
                popuplayertitle: 'Bungalow 11',
                interactive: true,
                title: '<img src="styles/legend/Bungalow11_52.png" /> Bungalow 11'
            });
var format_Bungalow12_53 = new ol.format.GeoJSON();
var features_Bungalow12_53 = format_Bungalow12_53.readFeatures(json_Bungalow12_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow12_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow12_53.addFeatures(features_Bungalow12_53);
var lyr_Bungalow12_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow12_53, 
                style: style_Bungalow12_53,
                popuplayertitle: 'Bungalow 12',
                interactive: true,
                title: '<img src="styles/legend/Bungalow12_53.png" /> Bungalow 12'
            });
var format_Bungalow13_54 = new ol.format.GeoJSON();
var features_Bungalow13_54 = format_Bungalow13_54.readFeatures(json_Bungalow13_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow13_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow13_54.addFeatures(features_Bungalow13_54);
var lyr_Bungalow13_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow13_54, 
                style: style_Bungalow13_54,
                popuplayertitle: 'Bungalow 13',
                interactive: true,
                title: '<img src="styles/legend/Bungalow13_54.png" /> Bungalow 13'
            });
var format_Bungalow14_55 = new ol.format.GeoJSON();
var features_Bungalow14_55 = format_Bungalow14_55.readFeatures(json_Bungalow14_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow14_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow14_55.addFeatures(features_Bungalow14_55);
var lyr_Bungalow14_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow14_55, 
                style: style_Bungalow14_55,
                popuplayertitle: 'Bungalow 14',
                interactive: true,
                title: '<img src="styles/legend/Bungalow14_55.png" /> Bungalow 14'
            });
var format_Bungalow15_56 = new ol.format.GeoJSON();
var features_Bungalow15_56 = format_Bungalow15_56.readFeatures(json_Bungalow15_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow15_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow15_56.addFeatures(features_Bungalow15_56);
var lyr_Bungalow15_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow15_56, 
                style: style_Bungalow15_56,
                popuplayertitle: 'Bungalow 15',
                interactive: true,
                title: '<img src="styles/legend/Bungalow15_56.png" /> Bungalow 15'
            });
var format_Bungalow16_57 = new ol.format.GeoJSON();
var features_Bungalow16_57 = format_Bungalow16_57.readFeatures(json_Bungalow16_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow16_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow16_57.addFeatures(features_Bungalow16_57);
var lyr_Bungalow16_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow16_57, 
                style: style_Bungalow16_57,
                popuplayertitle: 'Bungalow 16',
                interactive: true,
                title: '<img src="styles/legend/Bungalow16_57.png" /> Bungalow 16'
            });
var format_Bungalow17_58 = new ol.format.GeoJSON();
var features_Bungalow17_58 = format_Bungalow17_58.readFeatures(json_Bungalow17_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow17_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow17_58.addFeatures(features_Bungalow17_58);
var lyr_Bungalow17_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow17_58, 
                style: style_Bungalow17_58,
                popuplayertitle: 'Bungalow 17',
                interactive: true,
                title: '<img src="styles/legend/Bungalow17_58.png" /> Bungalow 17'
            });
var format_Bungalow18_59 = new ol.format.GeoJSON();
var features_Bungalow18_59 = format_Bungalow18_59.readFeatures(json_Bungalow18_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow18_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow18_59.addFeatures(features_Bungalow18_59);
var lyr_Bungalow18_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow18_59, 
                style: style_Bungalow18_59,
                popuplayertitle: 'Bungalow 18',
                interactive: true,
                title: '<img src="styles/legend/Bungalow18_59.png" /> Bungalow 18'
            });
var format_Bungalow19_60 = new ol.format.GeoJSON();
var features_Bungalow19_60 = format_Bungalow19_60.readFeatures(json_Bungalow19_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow19_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow19_60.addFeatures(features_Bungalow19_60);
var lyr_Bungalow19_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow19_60, 
                style: style_Bungalow19_60,
                popuplayertitle: 'Bungalow 19',
                interactive: true,
                title: '<img src="styles/legend/Bungalow19_60.png" /> Bungalow 19'
            });
var format_Bungalow20_61 = new ol.format.GeoJSON();
var features_Bungalow20_61 = format_Bungalow20_61.readFeatures(json_Bungalow20_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow20_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow20_61.addFeatures(features_Bungalow20_61);
var lyr_Bungalow20_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow20_61, 
                style: style_Bungalow20_61,
                popuplayertitle: 'Bungalow 20',
                interactive: true,
                title: '<img src="styles/legend/Bungalow20_61.png" /> Bungalow 20'
            });
var format_Bungalow21_62 = new ol.format.GeoJSON();
var features_Bungalow21_62 = format_Bungalow21_62.readFeatures(json_Bungalow21_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow21_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow21_62.addFeatures(features_Bungalow21_62);
var lyr_Bungalow21_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow21_62, 
                style: style_Bungalow21_62,
                popuplayertitle: 'Bungalow 21',
                interactive: true,
                title: '<img src="styles/legend/Bungalow21_62.png" /> Bungalow 21'
            });
var format_Bungalow22_63 = new ol.format.GeoJSON();
var features_Bungalow22_63 = format_Bungalow22_63.readFeatures(json_Bungalow22_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow22_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow22_63.addFeatures(features_Bungalow22_63);
var lyr_Bungalow22_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow22_63, 
                style: style_Bungalow22_63,
                popuplayertitle: 'Bungalow 22',
                interactive: true,
                title: '<img src="styles/legend/Bungalow22_63.png" /> Bungalow 22'
            });
var format_Bungalow23_64 = new ol.format.GeoJSON();
var features_Bungalow23_64 = format_Bungalow23_64.readFeatures(json_Bungalow23_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow23_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow23_64.addFeatures(features_Bungalow23_64);
var lyr_Bungalow23_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow23_64, 
                style: style_Bungalow23_64,
                popuplayertitle: 'Bungalow 23',
                interactive: true,
                title: '<img src="styles/legend/Bungalow23_64.png" /> Bungalow 23'
            });
var format_Bungalow24_65 = new ol.format.GeoJSON();
var features_Bungalow24_65 = format_Bungalow24_65.readFeatures(json_Bungalow24_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bungalow24_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bungalow24_65.addFeatures(features_Bungalow24_65);
var lyr_Bungalow24_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bungalow24_65, 
                style: style_Bungalow24_65,
                popuplayertitle: 'Bungalow 24',
                interactive: true,
                title: '<img src="styles/legend/Bungalow24_65.png" /> Bungalow 24'
            });
var format_MainBungalow_66 = new ol.format.GeoJSON();
var features_MainBungalow_66 = format_MainBungalow_66.readFeatures(json_MainBungalow_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainBungalow_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainBungalow_66.addFeatures(features_MainBungalow_66);
var lyr_MainBungalow_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainBungalow_66, 
                style: style_MainBungalow_66,
                popuplayertitle: 'Main Bungalow',
                interactive: true,
                title: '<img src="styles/legend/MainBungalow_66.png" /> Main Bungalow'
            });
var format_NewHostel_67 = new ol.format.GeoJSON();
var features_NewHostel_67 = format_NewHostel_67.readFeatures(json_NewHostel_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewHostel_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewHostel_67.addFeatures(features_NewHostel_67);
var lyr_NewHostel_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewHostel_67, 
                style: style_NewHostel_67,
                popuplayertitle: 'New Hostel',
                interactive: true,
                title: '<img src="styles/legend/NewHostel_67.png" /> New Hostel'
            });
var format_AmaniampongB2_68 = new ol.format.GeoJSON();
var features_AmaniampongB2_68 = format_AmaniampongB2_68.readFeatures(json_AmaniampongB2_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmaniampongB2_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmaniampongB2_68.addFeatures(features_AmaniampongB2_68);
var lyr_AmaniampongB2_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmaniampongB2_68, 
                style: style_AmaniampongB2_68,
                popuplayertitle: 'Amaniampong B2',
                interactive: true,
                title: '<img src="styles/legend/AmaniampongB2_68.png" /> Amaniampong B2'
            });
var format_AmaniampongB1_69 = new ol.format.GeoJSON();
var features_AmaniampongB1_69 = format_AmaniampongB1_69.readFeatures(json_AmaniampongB1_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmaniampongB1_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmaniampongB1_69.addFeatures(features_AmaniampongB1_69);
var lyr_AmaniampongB1_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmaniampongB1_69, 
                style: style_AmaniampongB1_69,
                popuplayertitle: 'Amaniampong B1',
                interactive: true,
                title: '<img src="styles/legend/AmaniampongB1_69.png" /> Amaniampong B1'
            });
var format_AmaniampongB3_70 = new ol.format.GeoJSON();
var features_AmaniampongB3_70 = format_AmaniampongB3_70.readFeatures(json_AmaniampongB3_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmaniampongB3_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmaniampongB3_70.addFeatures(features_AmaniampongB3_70);
var lyr_AmaniampongB3_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmaniampongB3_70, 
                style: style_AmaniampongB3_70,
                popuplayertitle: 'Amaniampong B3',
                interactive: true,
                title: '<img src="styles/legend/AmaniampongB3_70.png" /> Amaniampong B3'
            });
var format_Entrance_71 = new ol.format.GeoJSON();
var features_Entrance_71 = format_Entrance_71.readFeatures(json_Entrance_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entrance_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entrance_71.addFeatures(features_Entrance_71);
var lyr_Entrance_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Entrance_71, 
                style: style_Entrance_71,
                popuplayertitle: 'Entrance',
                interactive: true,
                title: '<img src="styles/legend/Entrance_71.png" /> Entrance'
            });
var group_USTEDMFacilities = new ol.layer.Group({
                                layers: [lyr_Entrance_71,],
                                fold: 'open',
                                title: 'USTED-M Facilities'});
var group_Residency = new ol.layer.Group({
                                layers: [lyr_Bungalow1_41,lyr_Bungalow2_42,lyr_Bungalow3_43,lyr_Bungalow4_44,lyr_Bungalow4Garage_45,lyr_Bungalow5_46,lyr_Bungalow6_47,lyr_Bungalow7_48,lyr_Bungalow8_49,lyr_Bungalow9_50,lyr_Bungalow10_51,lyr_Bungalow11_52,lyr_Bungalow12_53,lyr_Bungalow13_54,lyr_Bungalow14_55,lyr_Bungalow15_56,lyr_Bungalow16_57,lyr_Bungalow17_58,lyr_Bungalow18_59,lyr_Bungalow19_60,lyr_Bungalow20_61,lyr_Bungalow21_62,lyr_Bungalow22_63,lyr_Bungalow23_64,lyr_Bungalow24_65,lyr_MainBungalow_66,lyr_NewHostel_67,lyr_AmaniampongB2_68,lyr_AmaniampongB1_69,lyr_AmaniampongB3_70,],
                                fold: 'close',
                                title: 'Residency'});
var group_Academic = new ol.layer.Group({
                                layers: [lyr_LibraryComplexLBFFRRSF_28,lyr_NewLectureTheatreNLT_29,lyr_NewScienceBlock_30,lyr_ICTBlock_31,lyr_LectureTheatreLT123_32,lyr_NewLectureBlock_33,lyr_ChapelExtension_34,lyr_OldLab_35,lyr_OldLibrary_36,lyr_LTUnderConstruction_37,lyr_SlaughterHouseSLT_38,lyr_ReadingRoom_39,lyr_SportsComplex_40,],
                                fold: 'open',
                                title: 'Academic'});
var group_Administration = new ol.layer.Group({
                                layers: [lyr_NewOfficeBlock_21,lyr_KICCOffice_22,lyr_AuditBlock_23,lyr_StaffCommonRoom_24,lyr_FacultyofEducation_25,lyr_FacultyofEnvHealthEd_26,lyr_AdministrationBlock_27,],
                                fold: 'open',
                                title: 'Administration'});
var group_Recreational = new ol.layer.Group({
                                layers: [lyr_VolleyBallPitch_14,lyr_BasketballPitch_15,lyr_Mosque_16,lyr_Canteen_17,lyr_Chapel_18,lyr_USTEDMPark_19,lyr_USTEDMCongregationGrounds_20,],
                                fold: 'close',
                                title: 'Recreational'});
var group_Agriculure = new ol.layer.Group({
                                layers: [lyr_AnimalFarm_12,lyr_CropFarm_13,],
                                fold: 'close',
                                title: 'Agriculure'});
var group_Essentials = new ol.layer.Group({
                                layers: [lyr_SecurityPost_1,lyr_USTEDClinic_2,lyr_AAMUSTEDMsch_3,lyr_PowerHouse_4,lyr_UEWCoorp_5,lyr_CooperativeAvenue_6,lyr_PrincipalsAvenue_7,lyr_USTEDMAvenue_8,lyr_Campus_boundary_9,lyr_GovernmentSchool_10,lyr_StoreRoom_11,],
                                fold: 'close',
                                title: 'Essentials'});
var group_aamusted_lusp_AMAL = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'aamusted_lusp_AMAL'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_SecurityPost_1.setVisible(true);lyr_USTEDClinic_2.setVisible(true);lyr_AAMUSTEDMsch_3.setVisible(true);lyr_PowerHouse_4.setVisible(true);lyr_UEWCoorp_5.setVisible(true);lyr_CooperativeAvenue_6.setVisible(true);lyr_PrincipalsAvenue_7.setVisible(true);lyr_USTEDMAvenue_8.setVisible(true);lyr_Campus_boundary_9.setVisible(true);lyr_GovernmentSchool_10.setVisible(true);lyr_StoreRoom_11.setVisible(true);lyr_AnimalFarm_12.setVisible(true);lyr_CropFarm_13.setVisible(true);lyr_VolleyBallPitch_14.setVisible(true);lyr_BasketballPitch_15.setVisible(true);lyr_Mosque_16.setVisible(true);lyr_Canteen_17.setVisible(true);lyr_Chapel_18.setVisible(true);lyr_USTEDMPark_19.setVisible(true);lyr_USTEDMCongregationGrounds_20.setVisible(true);lyr_NewOfficeBlock_21.setVisible(true);lyr_KICCOffice_22.setVisible(true);lyr_AuditBlock_23.setVisible(true);lyr_StaffCommonRoom_24.setVisible(true);lyr_FacultyofEducation_25.setVisible(true);lyr_FacultyofEnvHealthEd_26.setVisible(true);lyr_AdministrationBlock_27.setVisible(true);lyr_LibraryComplexLBFFRRSF_28.setVisible(true);lyr_NewLectureTheatreNLT_29.setVisible(true);lyr_NewScienceBlock_30.setVisible(true);lyr_ICTBlock_31.setVisible(true);lyr_LectureTheatreLT123_32.setVisible(true);lyr_NewLectureBlock_33.setVisible(true);lyr_ChapelExtension_34.setVisible(true);lyr_OldLab_35.setVisible(true);lyr_OldLibrary_36.setVisible(true);lyr_LTUnderConstruction_37.setVisible(true);lyr_SlaughterHouseSLT_38.setVisible(true);lyr_ReadingRoom_39.setVisible(true);lyr_SportsComplex_40.setVisible(true);lyr_Bungalow1_41.setVisible(true);lyr_Bungalow2_42.setVisible(true);lyr_Bungalow3_43.setVisible(true);lyr_Bungalow4_44.setVisible(true);lyr_Bungalow4Garage_45.setVisible(true);lyr_Bungalow5_46.setVisible(true);lyr_Bungalow6_47.setVisible(true);lyr_Bungalow7_48.setVisible(true);lyr_Bungalow8_49.setVisible(true);lyr_Bungalow9_50.setVisible(true);lyr_Bungalow10_51.setVisible(true);lyr_Bungalow11_52.setVisible(true);lyr_Bungalow12_53.setVisible(true);lyr_Bungalow13_54.setVisible(true);lyr_Bungalow14_55.setVisible(true);lyr_Bungalow15_56.setVisible(true);lyr_Bungalow16_57.setVisible(true);lyr_Bungalow17_58.setVisible(true);lyr_Bungalow18_59.setVisible(true);lyr_Bungalow19_60.setVisible(true);lyr_Bungalow20_61.setVisible(true);lyr_Bungalow21_62.setVisible(true);lyr_Bungalow22_63.setVisible(true);lyr_Bungalow23_64.setVisible(true);lyr_Bungalow24_65.setVisible(true);lyr_MainBungalow_66.setVisible(true);lyr_NewHostel_67.setVisible(true);lyr_AmaniampongB2_68.setVisible(true);lyr_AmaniampongB1_69.setVisible(true);lyr_AmaniampongB3_70.setVisible(true);lyr_Entrance_71.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_Essentials,group_Agriculure,group_Recreational,group_Administration,group_Academic,group_Residency,group_USTEDMFacilities];
lyr_SecurityPost_1.set('fieldAliases', {'id': 'id', 'Category': 'Category', });
lyr_USTEDClinic_2.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_AAMUSTEDMsch_3.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_PowerHouse_4.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_UEWCoorp_5.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_CooperativeAvenue_6.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Distance': 'Distance', });
lyr_PrincipalsAvenue_7.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Distance': 'Distance', 'Type': 'Type', });
lyr_USTEDMAvenue_8.set('fieldAliases', {'id': 'id', 'Distance': 'Distance', 'Area': 'Area', 'Type': 'Type', });
lyr_Campus_boundary_9.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_GovernmentSchool_10.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_StoreRoom_11.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_AnimalFarm_12.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_CropFarm_13.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_VolleyBallPitch_14.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_BasketballPitch_15.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Mosque_16.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Canteen_17.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Chapel_18.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_USTEDMPark_19.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_USTEDMCongregationGrounds_20.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_NewOfficeBlock_21.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_KICCOffice_22.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_AuditBlock_23.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Area': 'Area', });
lyr_StaffCommonRoom_24.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_FacultyofEducation_25.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_FacultyofEnvHealthEd_26.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', });
lyr_AdministrationBlock_27.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_LibraryComplexLBFFRRSF_28.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_NewLectureTheatreNLT_29.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_NewScienceBlock_30.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_ICTBlock_31.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_LectureTheatreLT123_32.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_NewLectureBlock_33.set('fieldAliases', {'id': 'id', 'tyoe': 'tyoe', });
lyr_ChapelExtension_34.set('fieldAliases', {'id': 'id', 'TYPE': 'TYPE', });
lyr_OldLab_35.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_OldLibrary_36.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_LTUnderConstruction_37.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_SlaughterHouseSLT_38.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_ReadingRoom_39.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_SportsComplex_40.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow1_41.set('fieldAliases', {'id': 'id', 'Category': 'Category', });
lyr_Bungalow2_42.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_Bungalow3_43.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_Bungalow4_44.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_Bungalow4Garage_45.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow5_46.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_Bungalow6_47.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow7_48.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow8_49.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow9_50.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow10_51.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow11_52.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow12_53.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow13_54.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow14_55.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow15_56.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Facility': 'Facility', });
lyr_Bungalow16_57.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow17_58.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow18_59.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow19_60.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow20_61.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow21_62.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow22_63.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow23_64.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_Bungalow24_65.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_MainBungalow_66.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_NewHostel_67.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_AmaniampongB2_68.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_AmaniampongB1_69.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_AmaniampongB3_70.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', 'Capacity': 'Capacity', });
lyr_Entrance_71.set('fieldAliases', {'id': 'id', 'Facility': 'Facility', });
lyr_SecurityPost_1.set('fieldImages', {'id': 'TextEdit', 'Category': 'TextEdit', });
lyr_USTEDClinic_2.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_AAMUSTEDMsch_3.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_PowerHouse_4.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_UEWCoorp_5.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_CooperativeAvenue_6.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Distance': 'TextEdit', });
lyr_PrincipalsAvenue_7.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Type': 'TextEdit', });
lyr_USTEDMAvenue_8.set('fieldImages', {'id': 'TextEdit', 'Distance': 'TextEdit', 'Area': 'TextEdit', 'Type': 'TextEdit', });
lyr_Campus_boundary_9.set('fieldImages', {'id': 'TextEdit', 'area': '', });
lyr_GovernmentSchool_10.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_StoreRoom_11.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_AnimalFarm_12.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_CropFarm_13.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Facility': 'TextEdit', });
lyr_VolleyBallPitch_14.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_BasketballPitch_15.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Mosque_16.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Facility': 'TextEdit', });
lyr_Canteen_17.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Facility': 'TextEdit', });
lyr_Chapel_18.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_USTEDMPark_19.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_USTEDMCongregationGrounds_20.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_NewOfficeBlock_21.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_KICCOffice_22.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Facility': 'TextEdit', });
lyr_AuditBlock_23.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Area': 'TextEdit', });
lyr_StaffCommonRoom_24.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_FacultyofEducation_25.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_FacultyofEnvHealthEd_26.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', });
lyr_AdministrationBlock_27.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Facility': 'TextEdit', });
lyr_LibraryComplexLBFFRRSF_28.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_NewLectureTheatreNLT_29.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_NewScienceBlock_30.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_ICTBlock_31.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_LectureTheatreLT123_32.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_NewLectureBlock_33.set('fieldImages', {'id': 'TextEdit', 'tyoe': 'TextEdit', });
lyr_ChapelExtension_34.set('fieldImages', {'id': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_OldLab_35.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_OldLibrary_36.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Facility': 'TextEdit', });
lyr_LTUnderConstruction_37.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_SlaughterHouseSLT_38.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_ReadingRoom_39.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_SportsComplex_40.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow1_41.set('fieldImages', {'id': 'TextEdit', 'Category': 'TextEdit', });
lyr_Bungalow2_42.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_Bungalow3_43.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_Bungalow4_44.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_Bungalow4Garage_45.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow5_46.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_Bungalow6_47.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow7_48.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow8_49.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow9_50.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow10_51.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow11_52.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow12_53.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow13_54.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow14_55.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow15_56.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Facility': 'TextEdit', });
lyr_Bungalow16_57.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow17_58.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow18_59.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow19_60.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow20_61.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow21_62.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow22_63.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow23_64.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Bungalow24_65.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_MainBungalow_66.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_NewHostel_67.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_AmaniampongB2_68.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_AmaniampongB1_69.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_AmaniampongB3_70.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', 'Capacity': 'TextEdit', });
lyr_Entrance_71.set('fieldImages', {'id': 'TextEdit', 'Facility': 'TextEdit', });
lyr_SecurityPost_1.set('fieldLabels', {'id': 'no label', 'Category': 'inline label - always visible', });
lyr_USTEDClinic_2.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_AAMUSTEDMsch_3.set('fieldLabels', {'id': 'no label', 'Type': 'inline label - always visible', });
lyr_PowerHouse_4.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_UEWCoorp_5.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_CooperativeAvenue_6.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Distance': 'no label', });
lyr_PrincipalsAvenue_7.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Distance': 'no label', 'Type': 'inline label - always visible', });
lyr_USTEDMAvenue_8.set('fieldLabels', {'id': 'no label', 'Distance': 'no label', 'Area': 'no label', 'Type': 'inline label - always visible', });
lyr_Campus_boundary_9.set('fieldLabels', {'id': 'no label', 'area': 'inline label - always visible', });
lyr_GovernmentSchool_10.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_StoreRoom_11.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_AnimalFarm_12.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_CropFarm_13.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'inline label - always visible', });
lyr_VolleyBallPitch_14.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_BasketballPitch_15.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Mosque_16.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'inline label - always visible', });
lyr_Canteen_17.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'inline label - always visible', });
lyr_Chapel_18.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_USTEDMPark_19.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'no label', });
lyr_USTEDMCongregationGrounds_20.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Area': 'no label', });
lyr_NewOfficeBlock_21.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_KICCOffice_22.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'inline label - always visible', });
lyr_AuditBlock_23.set('fieldLabels', {'id': 'no label', 'Facility': 'no label', 'Area': 'inline label - always visible', });
lyr_StaffCommonRoom_24.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_FacultyofEducation_25.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_FacultyofEnvHealthEd_26.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', });
lyr_AdministrationBlock_27.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'inline label - always visible', });
lyr_LibraryComplexLBFFRRSF_28.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_NewLectureTheatreNLT_29.set('fieldLabels', {'id': 'no label', 'Type': 'inline label - always visible', });
lyr_NewScienceBlock_30.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_ICTBlock_31.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_LectureTheatreLT123_32.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_NewLectureBlock_33.set('fieldLabels', {'id': 'no label', 'tyoe': 'inline label - always visible', });
lyr_ChapelExtension_34.set('fieldLabels', {'id': 'no label', 'TYPE': 'inline label - always visible', });
lyr_OldLab_35.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_OldLibrary_36.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'inline label - visible with data', });
lyr_LTUnderConstruction_37.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_SlaughterHouseSLT_38.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_ReadingRoom_39.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_SportsComplex_40.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow1_41.set('fieldLabels', {'id': 'no label', 'Category': 'header label - always visible', });
lyr_Bungalow2_42.set('fieldLabels', {'id': 'no label', 'Type': 'inline label - always visible', });
lyr_Bungalow3_43.set('fieldLabels', {'id': 'no label', 'Type': 'inline label - always visible', });
lyr_Bungalow4_44.set('fieldLabels', {'id': 'no label', 'Type': 'inline label - always visible', });
lyr_Bungalow4Garage_45.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow5_46.set('fieldLabels', {'id': 'no label', 'Type': 'inline label - always visible', });
lyr_Bungalow6_47.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow7_48.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow8_49.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow9_50.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow10_51.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow11_52.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow12_53.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow13_54.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow14_55.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow15_56.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Facility': 'inline label - always visible', });
lyr_Bungalow16_57.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow17_58.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow18_59.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow19_60.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow20_61.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow21_62.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow22_63.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow23_64.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_Bungalow24_65.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_MainBungalow_66.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_NewHostel_67.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_AmaniampongB2_68.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_AmaniampongB1_69.set('fieldLabels', {'id': 'no label', 'type': 'inline label - always visible', });
lyr_AmaniampongB3_70.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', 'Capacity': 'no label', });
lyr_Entrance_71.set('fieldLabels', {'id': 'no label', 'Facility': 'inline label - always visible', });
lyr_Entrance_71.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});