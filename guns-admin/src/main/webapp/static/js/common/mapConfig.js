/**
 * @author GAO JIE@ESRI 2015
 */
var http = 'http://';
var https = 'https://';

var mapConfig = {
    'proxyUrl': 'proxy/proxy.jsp',
    'portalUrl': 'http://smart.arcgisonline.cn/arcgis',
    'homeExtent': {
        'center': [-118.254, 34.04],
        'zoom': 16,
        'heading': 20,
        'tilt': 60
    },
    'Layers': {
        'baseMapLayers': [
            {
                name: '彩绘版',
                layerId: 'color',
                url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer'
            }, {
                name: '灰色版',
                layerId: 'gray',
                url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer'
            }, {
                name: '黑蓝版',
                layerId: 'blueblack',
                url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer'
            }, {
                name: '影像图',
                layerId: 'image',
                url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
            }, {
                name: '水系图',
                layerId: 'water',
                url: 'http://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer'
            }],
        'base': [
            {
                isShow: false,
                name: '水源工程',
                url: 'http://localhost:6080/arcgis/rest/services/luhunguanqu/water_resouce/MapServer',
                icon: 'icon-shuiyuan',
                template: null,
                layer: null
            },
            {
                isShow: false,
                name: '灌区范围',
                url: 'http://localhost:6080/arcgis/rest/services/luhunguanqu/water_resouce/MapServer',
                icon: 'icon-guanqu',
                template: null,
                layer: null
            },
            {
                isShow: false,
                name: '灌区渠道',
                url: 'http://localhost:6080/arcgis/rest/services/luhunguanqu/water_resouce/MapServer',
                icon: 'icon-qudao',
                template: null,
                layer: null
            }],
        'build': [
            {
                isShow: false,
                name: '水源工程2',
                url: 'http://localhost:6080/arcgis/rest/services/luhunguanqu/water_resouce/MapServer',
                icon: 'icon-shuiyuan',
                template: null,
                layer: null
            },
            {
                isShow: false,
                name: '灌区范围',
                url: 'http://localhost:6080/arcgis/rest/services/luhunguanqu/water_resouce/MapServer',
                icon: 'icon-guanqu',
                template: null,
                layer: null
            },
            {
                isShow: false,
                name: '灌区渠道',
                url: 'http://localhost:6080/arcgis/rest/services/luhunguanqu/water_resouce/MapServer',
                icon: 'icon-qudao',
                template: null,
                layer: null
            }]
    }

};