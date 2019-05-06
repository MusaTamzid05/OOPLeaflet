

function initializeMap() {

    let layer = new Layer(
        `http://{s}.tile.osm.org/{z}/{x}/{y}.png`
    );

    let markers = [
        {
            coordinates : [[ 23.777, 90.399452 ]] ,
            shape : MarkerShape.Normal,
            options : undefined,
            popupParameters : undefined
        } ,
        {

            coordinates : [[ 23.774, 90.399452 ]] ,
            shape : MarkerShape.Circle ,
            options : {
                color : "red" ,
                fillColor : "#f03",
                fillOpacity : 0.5,
                radius : 100,
                popupParameters : undefined
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
            },

            popupParameters : {
                message : "pop paramter open true example",
                open : true
            }
        }

    ];

    let mapOptions = {
        center: [23.777, 90.399452],
        zoom: 30
    };

    var m = new Map("mapid" ,
        mapOptions,
        layer ,
        markers);


    m.setMarker({

            coordinates : [[ 23.777, 90.399452 ]] ,
            shape : MarkerShape.Circle,
        options : {
            color : "blue"
        },
        popupParameters : {
            message : "This is a circle example",
            open : false
        }
    });

    m.addEvent("click" , (e) =>{
        let popup = PopUp.CreatePopup();
        popup
            .setLatLng(e.latlng)
            .setContent("Clicked map at " + e.latlng.toString())
            .openOn(m.map);
    }

    );


}
