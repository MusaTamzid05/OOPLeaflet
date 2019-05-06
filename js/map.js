

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

    addGeoJSON(src) {

        if(src.endsWith(".geojson")) {
            let geoData = new L.GeoJSON.AJAX(src).addTo(this.map);
            return;
        }


        L.geoJSON(src).addTo(this.map);

    }
}
