

function initializeMap() {

    let layer = new Layer(
        `http://{s}.tile.osm.org/{z}/{x}/{y}.png`
    );
    var m = new Map("mapid" , {
            center: [23.777, 90.399452],
            zoom: 30
    } , layer);

}


class Map {

    constructor(id , options , layer) {

        this.map = L.map(mapid , options);
        this.setLayer(layer);
        console.log(layer);
    }

    setLayer(layer ) {
        L.tileLayer(layer.link , layer.options).addTo(this.map);
    }
}
