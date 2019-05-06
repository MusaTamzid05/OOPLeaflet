


class InteractiveMap extends Map {

    constructor(id , options , layer , markersAttr = []) {
        super(id , options , layer , markersAttr );
    }


    addGeoJSON(src , styleCallback = undefined) {

        if(typeof(src) === "string") {
            if(src.endsWith(".geojson")) {
                let geoData = new L.GeoJSON.AJAX(src , {style : styleCallback}).addTo(this.map);
                return;
            }
        }

        console.log(styleCallback);
        let geojson;

        // have to use closure here.

        geojson = L.geoJSON(src , { style : styleCallback , onEachFeature : (feature , layer) => {



            layer.on({
                mouseover : (e) => {

                    let layer = e.target;

                    layer.setStyle({
                        weight : 5,
                        color : "#666",
                        dashArray : "",
                        fillOpacity : 0.7
                    });

                    if(!L.Browser.ie && !L.Browser.opera && !L.Browser.edge)
                        layer.bringToFront();

                },
                mouseout : (e)=> {
                    geojson.resetStyle(e.target);
                },
                click : (e) => {
                    this.map.fitBounds(e.target.getBounds());
                }
            });




        }}).addTo(this.map);

    }

}
