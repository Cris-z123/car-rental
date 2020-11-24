import Vue from 'vue';
import VueAMap from 'vue-amap';

Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
    key: 'b2d1b3e4dc4d3d6dedf1d075a0df5cb3',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
    v: '1.4.15',
    uiVersion: '1.0.11'
})