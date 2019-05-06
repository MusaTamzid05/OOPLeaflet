

class Map {

    constructor(id , options , layer , markersAttr = []) {

        this.map = L.map(mapid , options);
        this.setLayer(layer);
        this.markers = [];


        for(let markerAttr of markersAttr) {
            this.setMarker(markerAttr);
        }

    }

    setLayer(layer ) {
        L.tileLayer(layer.link , layer.options).addTo(this.map);
    }

    setMarker(markerAttr) {

        console.log(markerAttr.popupParameters);
            let marker = new Marker(
                markerAttr.coordinates ,
                this ,
                markerAttr.shape ,
                markerAttr.popupParameters ,
                markerAttr.options);
    }


    addEvent(eventName , callback) {
        this.map.on(eventName , callback);
    }

    addGeoJSON(src , styleCallback = undefined) {

        if(typeof(src) === "string") {
            if(src.endsWith(".geojson")) {
                let geoData = new L.GeoJSON.AJAX(src , {style : styleCallback}).addTo(this.map);
                return;
            }
        }

        console.log(styleCallback);
        L.geoJSON(src , { style : styleCallback}).addTo(this.map);

    }
}
