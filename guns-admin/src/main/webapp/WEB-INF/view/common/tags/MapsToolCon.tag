@/*
地图工具条的参数说明:

name : 查询条件的名称
id : 查询内容的input框id
@*/

<div class="tool-bar mapWidget">
    <ul>
        <li>
            <span v-on:click="toolClick('basemap')" style="display: block">
                <i class="iconfont icon-ditu"></i>
                底图选择
            </span>
            <div class="tool-panel basemap" v-show="toolShow=='basemap'">
                <div class="bar-arrow measure-bar-arrow"></div>
                <div class="panel-content map-list">
                    <div class="blockdiv" style="height: 138px">
                        <div id="zhitudiv">
                            <span class="basemap-group-title">平台地图</span>
                            <a class="mapa"
                               :class="[item.layerId, {'mapactive': baseMapGroup.mapNow == item.layerId}]"
                               title="item.name" v-for="item in baseMapGroup.list"
                               v-on:click="basemapSelect(item)" href="javascript:void(0);">
                                <span class="maptitle" :class="{'active':baseMapGroup.mapNow == item.layerId}">{{item.name}}</span>
                            </a>
                        </div>
                    </div>
                    <div class="blockdiv">
                        <div id="thirddiv">
                            <span class="basemap-group-title">第三方地图</span>
                            <a class="mapa tianditu" dataid="17" title="天地图">
                                <span class="maptitle">天地图</span>
                            </a>
                            <a class="mapa tengxun" dataid="8" title="腾讯地图">
                                <span class="maptitle">腾讯地图</span>
                            </a>
                            <a class="mapa tengxunimg" dataid="12" title="腾讯影像图">
                                <span class="maptitle">腾讯影像图</span>
                            </a>
                            <a class="mapa gaode" dataid="7" title="高德地图">
                                <span class="maptitle">高德地图</span>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </li>
        <li class="measure-bar">
            <span v-on:click="toolClick('measure')" style="display: block"> <i
                    class="iconfont icon-liangce"></i>量测工具</span>
            <div class="tool-panel measure" v-show="toolShow=='measure'">
                <div class="bar-arrow measure-bar-arrow"></div>
                <div class="panel-content measure-bar-content">
                    <a class="measure-bar-marker" name="marker" title="测量点"></a>
                    <a class="measure-bar-polyline" :class="{'acitve':rulerTool.polyline.isActive}" name="polyline"
                       title="测量线段" v-on:click="polyline"></a>
                    <a class="measure-bar-polygon" :class="{'acitve':rulerTool.polygon.isActive}" name="polygon"
                       title="测量多边形" v-on:click="polygon"></a>
                </div>
            </div>
        </li>

        <li class="draw-bar">
                <span v-on:click="toolClick('draw')" style="display: block"><i
                        class="iconfont icon-biaohui"></i>地图标绘</span>
            <div class="tool-panel draw" v-show="toolShow=='draw'">
                <div class="bar-arrow measure-bar-arrow"></div>
                <div class="panel-content draw-bar-content">
                    <a class="draw-bar-marker" name="marker" href="#" title="标绘点"></a>
                    <a class="draw-bar-polyline" name="polyline" href="#" title="标绘线段"></a>
                    <a class="draw-bar-polygon" name="polygon" href="#" title="标绘多边形"></a>
                    <a class="draw-bar-rectangle" name="rectangle" href="#" title="标绘矩形"></a>
                    <a class="draw-bar-circle" name="circle" href="#" title="标绘圆"></a>
                    <a class="draw-bar-txt" name="textMarker" href="#" title="标绘文本"></a>
                </div>
            </div>
        </li>
    </ul>
</div>