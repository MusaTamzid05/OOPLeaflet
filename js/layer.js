

class Layer {

    constructor(link , options = undefined) {
        this.link = link;
        this.options = options;
    }

    toString() {

        console.log(`Link : #{this.link}`);
        console.log("Option");
        console.log(this.options);

    }
}
