

function initializeMap() {
var geojson = [{
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates": [-106.62987, 35.10418]
  			},
 	"properties": {
       	"name": "My Point",
         "title": "A point at the Big I"
    		  }
},{
"type": "Feature",
 	"geometry": {
   		"type": "Point",
   		 "coordinates": [-106, 35]
               },
"properties": {
 		"name": "My Other Point",
 		 "title": "A point near Moriarty and I40"
                  }
              }];


    console.log("GEO example");
    let layer = new Layer(
        `http://{s}.tile.osm.org/{z}/{x}/{y}.png`
    );


    let mapOptions = {
        center: [
            39.017183 , -77.042999
        ],
        zoom: 30
    };

    var m = new Map("mapid" ,
        mapOptions,
        layer
    );



    m.addEvent("click" , (e) =>{
        let popup = PopUp.CreatePopup();
        popup
            .setLatLng(e.latlng)
            .setContent("Clicked map at " + e.latlng.toString())
            .openOn(m.map);
    });

    m.addGeoJSON("./stations.geojson");


}


