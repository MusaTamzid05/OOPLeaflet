

function initializeMap() {

    let layer = new Layer(
        `http://{s}.tile.osm.org/{z}/{x}/{y}.png`
    );

    let markers = [
        {
            coordinates : [[ 23.777, 90.399452 ]] ,
            shape : MarkerShape.Normal,
            options : undefined
        } ,
        {

            coordinates : [[ 23.774, 90.399452 ]] ,
            shape : MarkerShape.Circle ,
            options : {
                color : "red" ,
                fillColor : "#f03",
                fillOpacity : 0.5,
                radius : 100
            }
        } ,
        {

            coordinates : [
                [ 23.774, 90.399452 ],
                [ 23.771, 90.399433 ],
                [ 23.772, 90.379452 ]

            ] ,
            shape : MarkerShape.Polygon,
            options : {
                color : "red" ,
            }
        }

    ];

    var m = new Map("mapid" , {
            center: [23.777, 90.399452],
            zoom: 30
    } , layer ,
     markers);



    let coordinates1 = [
        [23.777, 90.399452] ,
    ];



}


class Map {

    constructor(id , options , layer , markersAttr = []) {

        this.map = L.map(mapid , options);
        this.setLayer(layer);
        this.markers = [];


        for(let markerAttr of markersAttr) {
            let marker = new Marker(markerAttr.coordinates , this , markerAttr.shape , markerAttr.options);
        }

    }

    setLayer(layer ) {
        L.tileLayer(layer.link , layer.options).addTo(this.map);
    }

    setMarker(marker) {
        this.markers.push(marker);
    }
}
