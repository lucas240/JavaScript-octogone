const Competitor = require("./competitor.class")

module.exports = class Rapeur extends Competitor {
    constructor(name, weight){
        super(name)
        this.weight = weight
        switch (true) {
            case (weight<80):
                this.life = 100
                break;
            case (weight>=80):
                this.life = 110
                break;
            default:
                this.life = 100
                break;
        }
    }

}