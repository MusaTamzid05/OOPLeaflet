

var MarkerShape = {
    Normal : 1,
    Circle : 2,
    Polygon : 3
};

class PopUp  {

    constructor(marker, message , open = false ) {

        // TO-DO : add attributes to pop up
        this.marker = marker.marker;
        this.message = message;
        if(open)
            this.marker.bindPopup(this.message).openPopup();
        else
            this.marker.bindPopup(this.message);
    }

    static CreatePopup() {
        return L.popup();
    }
}


class Marker {

    constructor(coordinates ,  map , shape , popupParameters = undefined ,  options = undefined) {
        this.coordinates = coordinates;
        this.options = options;
        this.map = map;
        this.initShape(shape);

        if(popupParameters) {
            this.initPopup(popupParameters);
        }
    }

    initShape(shape)  {


        if(shape === MarkerShape.Normal) {
            this.drawSimpleMarker();
        } else if(shape ===  MarkerShape.Circle){
            this.drawCircle();
        } else if(shape === MarkerShape.Polygon) {
            this.drawPolygon();
        } else {
            console.log("unknown shape!!");
        }
    }


    initPopup(popupParameters) {

        console.log(popupParameters);
        let popup = new PopUp(this , popupParameters.message , popupParameters.open);
    }

    drawSimpleMarker() {

        if(this.coordinates.length !== 1) {
            console.log("Atleat one coordinate needed for the normal marker");
            return;
        }

        this.marker= L.marker(this.coordinates[0], this.options).addTo(this.map.map);
    }

    drawCircle() {

        if(this.coordinates.length !== 1) {
            console.log("Atleat one coordinate needed for circle marker");
            return;
        }
        this.marker= L.circle(this.coordinates[0], this.options).addTo(this.map.map);

    }

    drawPolygon() {

        if(this.coordinates.length !== 3) {
            console.log("Atleat three coordinate needed for circle marker");
            return;
        }

        this.marker = L.polygon(
            this.coordinates , this.options).addTo(this.map.map);

    }
}
