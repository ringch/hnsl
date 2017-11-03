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
                id: 'source',
                name: '水源工程',
                url: 'http://localhost:6080/arcgis/rest/services/luhunguanqu/water_resouce/MapServer',
                icon: 'icon-shuiyuandi',
                template: `<div class='popupContainer'>
                                    <div class='popupHeader'>
                                        <ul class='nav nav-tabs'>
                                            <li class='active'>
                                                <a href='#TableContent' data-toggle='tab'>{source_name}信息</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class='popupContent tab-content'>
                                        <div class='popup-panel'>
                                            <table>
                                                <tr><th width="160">水源编码</th><td>{source_code}</td></tr>
                                                <tr><th width="160">水源名称</th><td>{source_name}</td></tr>
                                                <tr><th width="160">水源类型</th><td>{grade}</td></tr>
                                                <tr><th width="160">正常蓄水位</th><td>{normal_level}米</td></tr>
                                                <tr><th width="160">设计洪水位</th><td>{design_flood_level}米</td></tr>
                                                <tr><th width="160">防洪控制水位</th><td>{flood_control_level}米</td></tr>
                                                <tr><th width="160">总库容</th><td>{Total_capacity}立方米</td></tr>
                                                <tr><th width="160">兴利库容</th><td>{beneficial_capacity}立方米</td></tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>`,
                layer: null
            },
            {
                isShow: false,
                id: 'irr',
                name: '灌区范围',
                url: 'http://localhost:6080/arcgis/rest/services/luhunguanqu/water_resouce/MapServer',
                icon: 'icon-guanqu',
                template: null,
                layer: null
            },
            {
                isShow: false,
                id: 'canal',
                name: '灌区渠道',
                url: 'http://localhost:6080/arcgis/rest/services/luhunguanqu/water_resouce/MapServer',
                icon: 'icon-qudao',
                template: null,
                layer: null
            }],
        'build': [
            {
                isShow: false,
                id: 'sluice',
                name: '闸',
                url: 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/Hurricanes/MapServer/1',
                icon: 'icon-zha',
                template: null,
                layer: null
            },
            {
                isShow: false,
                name: '涵',
                url: 'http://localhost:6080/arcgis/rest/services/luhunguanqu/water_resouce/MapServer',
                icon: 'icon-han',
                template: null,
                layer: null
            },
            {
                isShow: false,
                name: '渡槽',
                url: 'http://localhost:6080/arcgis/rest/services/luhunguanqu/water_resouce/MapServer',
                icon: 'icon-ducao',
                template: null,
                layer: null
            },
            {
                isShow: false,
                name: '倒虹吸',
                url: 'http://localhost:6080/arcgis/rest/services/luhunguanqu/water_resouce/MapServer',
                icon: 'icon-daohongxi',
                template: null,
                layer: null
            },
            {
                isShow: false,
                name: '桥',
                url: 'http://localhost:6080/arcgis/rest/services/luhunguanqu/water_resouce/MapServer',
                icon: 'icon-qiao',
                template: null,
                layer: null
            },
            {
                isShow: false,
                name: '其他建筑物',
                url: 'http://localhost:6080/arcgis/rest/services/luhunguanqu/water_resouce/MapServer',
                icon: 'icon-jianzhu',
                template: null,
                layer: null
            }]
    }

};