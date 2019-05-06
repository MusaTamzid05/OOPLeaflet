

var MarkerShape = {
    Normal : 1,
    Circle : 2,
    Polygon : 3
};


class Marker {

    constructor(coordinates ,  map , shape = undefined , options = undefined) {
        this.coordinates = coordinates;
        this.options = options;
        this.map = map;
        this.initShape(shape);
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

    drawSimpleMarker() {

        if(this.coordinates.length !== 1) {
            console.log("Atleat one coordinate needed for the normal marker");
            return;
        }

        this.shapeObj = L.marker(this.coordinates[0], this.options).addTo(this.map.map);
    }

    drawCircle() {

        if(this.coordinates.length !== 1) {
            console.log("Atleat one coordinate needed for circle marker");
            return;
        }
        this.shapeObj = L.circle(this.coordinates[0], this.options).addTo(this.map.map);

    }

    drawPolygon() {

        if(this.coordinates.length !== 3) {
            console.log("Atleat three coordinate needed for circle marker");
            return;
        }

        this.shapeObj = L.polygon(
            this.coordinates , this.options).addTo(this.map.map);

    }
}
