/*
 *  The code here is just my attemp make the oop  version of the code =>   https://leafletjs.com/examples/choropleth/
 **/


function getColor(d) {

    // color each state according to its dencity.
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

function style(feature) {

    let styleObj = {
        fillColor : getColor(feature.properties.density),
        weight : 2,
        optacity : 1,
        color : "white",
        dashArray : "3",
        fillOpacity : 0.7
    };

    return styleObj;

}


function initializeMap() {


    let layer = new Layer(
        `http://{s}.tile.osm.org/{z}/{x}/{y}.png`
    );


    let mapOptions = {
        center: [
            37.8, -96
        ],
        zoom: 4
    };

    var m = new InteractiveMap("mapid" ,
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

    m.addGeoJSON(statesData , style);
    console.log("state data loaded");


}


