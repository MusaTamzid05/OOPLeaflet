

function initializeMap() {
    var m = new Map("mapid" , {
            center: [23.777, 90.399452],
            zoom: 30
    });

}


class Map {

    constructor(id , options , layer = undefined) {
        console.log(options);

        this.map = L.map(mapid , options);

        if(layer === undefined)
            this.setLayer(`http://{s}.tile.osm.org/{z}/{x}/{y}.png`);
        else
            this.setLayer(layer);

    }

    setLayer(layer) {
        L.tileLayer(layer).addTo(this.map);
    }
}
