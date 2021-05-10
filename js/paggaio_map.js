var mylat = '40.901219';
var mylong = '24.087631';
var myzoom = '12';


var map = L.map('map',{zoomControl: false,scrollWheelZoom: false}).setView([mylat, mylong], myzoom );

map.once('focus', function() { map.scrollWheelZoom.enable(); });

var esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(map);

var openstreetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var google = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{subdomains:['mt0','mt1','mt2','mt3']}).addTo(map);


var mesoropi_voskovrisi = L.geoJSON(mesoropi_voskovrisi, {
	color: "#BE03FD",
					weight: 5
}).addTo(map);
var proti_trikorfo = L.geoJSON(proti_trikorfo, {
  color: "#0000ff"
}).addTo(map);
var trikorfo_kopsi_nikisianis = L.geoJSON(trikorfo_kopsi_nikisianis, {
  color: "#FF00FF"
}).addTo(map);
var podoxori_mati_katafugio_xatzigeorgiou = L.geoJSON(podoxori_mati_katafugio_xatzigeorgiou, {
  color: "#53B7D2"
}).addTo(map);
var mesoropi_voskovrisi_avgo = L.geoJSON(mesoropi_voskovrisi_avgo, {
  color: "#FFFF00"
}).addTo(map);
var mesoropi_katafugio_eos = L.geoJSON(mesoropi_katafugio_eos, {
  color: "#00FFFF",
	weight: 2
}).addTo(map);
var mavranera_Dasikes_egatastaseis = L.geoJSON(mavranera_Dasikes_egatastaseis, {
  color: "#9EE5B8"
}).addTo(map);
var eikosifinisa_trikorfo_katafygio_xatzigeorgiou = L.geoJSON(eikosifinisa_trikorfo_katafygio_xatzigeorgiou, {
  color: "#BE03FD"
}).addTo(map);
var avli_katafugio_eos = L.geoJSON(avli_katafugio_eos, {
  color: "coral"
}).addTo(map);
var agDimitrios_kentiki_nikisiani = L.geoJSON(agDimitrios_kentiki_nikisiani, {
  color: "#b03060"
}).addTo(map);


proti_trikorfo.bindPopup('<em>Πρώτη-Τρικόρφο</em>');
mesoropi_voskovrisi.bindPopup('<em>Μεσορόπη-Βοσκόβρυση</em>');
trikorfo_kopsi_nikisianis.bindPopup('<em>Τρίκορφο-Κόψη Νικήσιανης</em>');
podoxori_mati_katafugio_xatzigeorgiou.bindPopup('<em>Ποδοχώρι-Μάτι-Καταφύγιο Χατζηγεωργίου</em>');
mesoropi_voskovrisi_avgo.bindPopup('<em>Μεσορόπη-Βοσκόβρυση-Αυγό</em>');
mesoropi_katafugio_eos.bindPopup('<em>Μεσορόπη-Καταφύγιο ΕΟΣ</em>');
mavranera_Dasikes_egatastaseis.bindPopup('<em>Μαύρα Νερά-Δασικές εγκαταστάσεις Παγγαίου</em>');
eikosifinisa_trikorfo_katafygio_xatzigeorgiou.bindPopup('<em>Εικοσιφoίνισσα-Τρίκορφο-Καταφύγιο Χατζηγεωργίου</em>');
avli_katafugio_eos.bindPopup('<em>Αυλή-Καταφύγιο ΕΟΣ</em>');
agDimitrios_kentiki_nikisiani.bindPopup('<em>Άγιος Δημήτριος-Κεντίκη Νικήσιανης</em>');


var diadromes = L.layerGroup([mesoropi_voskovrisi, proti_trikorfo, trikorfo_kopsi_nikisianis, podoxori_mati_katafugio_xatzigeorgiou, mesoropi_voskovrisi_avgo, mesoropi_katafugio_eos, mavranera_Dasikes_egatastaseis, eikosifinisa_trikorfo_katafygio_xatzigeorgiou, avli_katafugio_eos, agDimitrios_kentiki_nikisiani]).addTo(map);

var churchIcon = L.icon({
  iconUrl: 'pic/church_icon.png',
  iconSize: [35, 35], // size of the icon
});

var katafigioicon=L.icon({
  iconUrl: 'pic/shelter_icon_b.png',
  iconSize: [35, 35], // size of the icon
});

var castleicon=L.icon({
  iconUrl: 'pic/castle.png',
  iconSize: [35, 35], // size of the icon
});

var oikismoiicon=L.icon({
  iconUrl: 'pic/oikismoi.png',
  iconSize: [35, 35], // size of the icon
});


var eikosifinisa = L.marker([40.965938, 24.104328], {
    icon: churchIcon,
    title: "Μοναστήρι"
  }).bindPopup("<h6>Ιερα Μονή</br>Εικοσιφίνισσης</h6><img src=pic/eikosifoinissa.png width=150 height=100> </br> "),
  paggaiotisa = L.marker([40.925952, 24.232188], {
    icon: churchIcon,
    title: "Μοναστήρι"
  }).bindPopup("<h6>Ιερα Μονή</br>Παγγαιώτισας</h6><img src=pic/paggaiotisa.png width=150 height=100> </br> "),
  panteleimonos = L.marker([40.891578, 24.188954], {
    icon: churchIcon,
    title: "Μοναστήρι"
  }).bindPopup("<h6>Ιερα Μονή</br>Παντελεήμονος</h6><img src=pic/panteleimonos.png width=150 height=100> </br> "),
  ypapantis = L.marker([40.914467, 24.221999], {
    icon: churchIcon,
    title: "Μοναστήρι"
  }).bindPopup("<h6>Ιερα Μονή</br>Υπαπαντής</h6><img src=pic/ypapantis.png width=150 height=100> </br> "),
  sandimitrios = L.marker([40.954940, 24.127470], {
    icon: churchIcon,
    title: "Μοναστήρι"
  }).bindPopup("<h6>Ιερα Μονή</br>Αγίου Δημήτριου</h6><img src=pic/dimitriou.png width=150 height=100> </br> ");


var mones = L.layerGroup([eikosifinisa, paggaiotisa,panteleimonos,ypapantis,sandimitrios]).addTo(map);

var katafigio_xatzigeorgiou = L.marker([40.912713, 24.106000], {
    icon: katafigioicon,
    title: "Καταφύγιο"
  }).bindPopup("<h6>Ορειβατικό καταφύγιο</br>Χατζηγεωργίου</h6><img src=pic/xatzigeorgiou.png width=150 height=100> </br> "),
  eos_kavalas = L.marker([40.903000, 24.117442], {
    icon: katafigioicon,
    title: "Καταφύγιο"
  }).bindPopup("<h6>Ορειβατικό καταφύγιο</br>ΕΟΣ Καβάλας</h6><img src=pic/eos_kavalas.png width=150 height=100> </br> ")

var katafigia= L.layerGroup([katafigio_xatzigeorgiou, eos_kavalas]).addTo(map);

var kastro_palaioxoriou = L.marker([40.945402, 24.189874], {
    icon: castleicon,
    title: "Μνημείο"
  }).bindPopup("<h6>Κάστρο Παλαιοχωρίου</br>Βρανόκαστρο</h6><img src=pic/kastro_palaioxoriou.png width=150 height=100> </br> "),
  kastro_dwmatiwn = L.marker([40.867494, 24.121372], {
    icon: castleicon,
    title: "Μνημείο"
  }).bindPopup("<h6>Αρχαίο κάστρο</br>Δωματίων</h6><img src=pic/kastro_dwmatiwn.png width=150 height=100> </br> ")

var mnimeia= L.layerGroup([kastro_palaioxoriou, kastro_dwmatiwn]).addTo(map);

var moustheni = L.marker([40.862744, 24.112746], {
    icon: oikismoiicon,
    title: "Οικισμός"
  }).bindPopup("<h6>Οικισμός</br>Μουσθένης</h6>"),
  mesoropi = L.marker([40.865744, 24.082410], {
    icon: oikismoiicon,
    title: "Οικισμός"
  }).bindPopup("<h6>Οικισμός</br>Μεσορόπης</h6>"),
  domatia = L.marker([40.865730, 24.142949], {
    icon: oikismoiicon,
    title: "Οικισμός"
  }).bindPopup("<h6>Οικισμός</br>Δωματίων</h6>"),
  palaiochori = L.marker([40.943041, 24.177471], {
    icon: oikismoiicon,
    title: "Οικισμός"
  }).bindPopup("<h6>Οικισμός</br>Παλαιοχωρίου</h6>"),
  nikisiani = L.marker([40.947871, 24.143820], {
    icon: oikismoiicon,
    title: "Οικισμός"
  }).bindPopup("<h6>Οικισμός</br>Νικήσιανης</h6>"),
  palia_avli = L.marker([40.885744, 24.161801], {
    icon: oikismoiicon,
    title: "Οικισμός"
  }).bindPopup("<h6>Οικισμός</br>Παλιάς Αυλής</h6>")

var oikismoi= L.layerGroup([moustheni, mesoropi, domatia, palaiochori,nikisiani, palia_avli]).addTo(map);

var overlayMaps = {
  "Μονές": mones,
  "Διαδρομές": diadromes,
  "Ορειβατικά καταφύγια": katafigia,
  "Αρχαία μνημεία": mnimeia,
  "Παραδοσιακοί οικισμοί": oikismoi
};

var basemaps = {
	"openstreetMap": openstreetmap,
  "ESRI": esri,
	"google": google

}


L.control.layers(basemaps, overlayMaps,{collapsed:false, position: "topleft"}).addTo(map);


var zoomHome = L.Control.zoomHome({ position: 'topright'});
zoomHome.addTo(map);
