var Map = (function(){
  
  var _map;
  var data1 = '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[17.114510536193848,48.106858062867175],[17.1142315864563,48.1069726885011],[17.11399555206299,48.10700134486964],[17.113287448883057,48.10688671929963],[17.112858295440674,48.10637090107097],[17.110819816589355,48.10634224435092],[17.110562324523926,48.106170303695095],[17.11043357849121,48.10589806314704],[17.11024045944214,48.10286033396058],[17.11195707321167,48.10162799640733],[17.113051414489746,48.101284082980214],[17.113158702850342,48.1011837744639],[17.11421012878418,48.10088284774058],[17.114510536193848,48.10089717762448],[17.114875316619873,48.10126975320414],[17.114274501800537,48.10222983936843],[17.114317417144775,48.10326155376549],[17.114124298095703,48.10354813742311],[17.114081382751465,48.10462281190883],[17.113952636718746,48.1047517713372],[17.114102840423584,48.1048950592115],[17.114381790161133,48.10541089225152],[17.114510536193848,48.106858062867175]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[17.11940288543701,48.10336544052602],[17.119751572608948,48.10326871837642],[17.119842767715454,48.10320781915183],[17.119955420494076,48.10308243816813],[17.12019145488739,48.10293198058399],[17.12023437023163,48.10285316929273],[17.12043285369873,48.10275644617922],[17.120497226715088,48.10262748174479],[17.120507955551147,48.102498516986785],[17.12045431137085,48.10244836393797],[17.120304107666016,48.102430452122945],[17.12018609046936,48.10235522243175],[17.120143175125122,48.10222983936843],[17.120062708854675,48.10216893891303],[17.119805216789246,48.102179686057454],[17.11945116519928,48.102186850819166],[17.119365334510803,48.10222983936843],[17.11918294429779,48.10227641025624],[17.11895763874054,48.10239462847421],[17.11893081665039,48.102451946300214],[17.11892545223236,48.10267763461886],[17.118818163871765,48.10276002852002],[17.118823528289795,48.102803016589924],[17.118887901306152,48.10292481592614],[17.118893265724182,48.1030287033672],[17.118834257125854,48.10313617291288],[17.119075655937195,48.103297376810076],[17.119354605674744,48.103369022824346],[17.11940288543701,48.10336544052602]]]}}]}';
  var data2 = '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[17.10149645805359,48.103462162493585],[17.10144281387329,48.10286749862741],[17.100069522857666,48.102910486607456],[17.100112438201904,48.10350514997631],[17.10149645805359,48.103462162493585]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[17.09974765777588,48.10606284049314],[17.099672555923462,48.105360742044255],[17.100080251693726,48.10520312678859],[17.100058794021603,48.10503834668632],[17.100359201431274,48.104694456075634],[17.100906372070312,48.104644305169366],[17.100906372070312,48.10472311371441],[17.101078033447266,48.10471594930621],[17.101142406463623,48.10595537706646],[17.101056575775146,48.10599119823365],[17.10094928741455,48.10604134782577],[17.09974765777588,48.10606284049314]]]}}]}';
  var _testdata1;
  var _testdata2;
  var  polygon;
  var _tool;

  var opts1 = {
    color: "#2A4F6E",
    opacity: 0.8,
    fillColor: "#042037",
    fillOpacity: 0.5
  };

  var opts2 = {
    color: "#F5B800",
    opacity: 0.8,
    fillColor: "#F5B800",
    fillOpacity: 0.5
  }

  function init(){
    _addMap();
    _testdata1 = _addTestData(data1, opts1);
    _testdata2 = _addTestData(data2, opts2);


    var options = {geodesic: true};
    var layers = [_testdata2, _testdata1];
    var control = L.Control.measureAreaControl(options, layers).addTo(_map);
    control.addLayer(polygon);


    var polygon = L.polygon([
        [48.10804729138659, 17.106292247772217],
        [48.10853443729303, 17.106292247772217],
        [48.10853443729303, 17.1071720123291],
        [48.10804729138659, 17.1071720123291],
        [48.10804729138659, 17.106292247772217]
    ]).addTo(_map);
    control.addLayer(polygon)

    
    var l1 = new L.latLng(48.10154201826626, 17.107837200164795);
    var l2 = new L.latLng(48.10360545396288, 17.107665538787842);
    var l3 = new L.latLng(48.10627060248092, 17.10792303085327);
    var polyline = L.polyline([l1,l2,l3],{color: 'red'}).addTo(_map);
    control.addLayer(polyline);


    var marker = L.marker([48.10622761731096,17.115561962127686]).addTo(_map);
    control.addLayer(marker);
  }

  function _addMap(){
    var opts = {
      zoomControl: false
    };
    _map = new L.Map('map', opts);

    var base = new L.TileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(_map); 
    _map.setView([48.10396368088855, 17.112364768981934], 16);
  }

  function _addTestData(data, opts){
    var geojson = L.geoJson(JSON.parse(data),opts).addTo(_map);
    return geojson;
  }

  return{
    init: init
  };
})();