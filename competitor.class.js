const chalk = require("chalk")

module.exports = class Competitor {
    constructor(name) {
        this.name = name
        this.life = 100
    }
    giveACordeALinge(target) {
        console.log(`${chalk.green.bold(this.name)} donne une corde a linge à ${chalk.red.bold(target)}`)
        return 20 // Is the damage of this method
    }
    giveAMandale(target) {
        console.log(`${chalk.green.bold(this.name)} donne une mandale à ${chalk.red.bold(target)}`);
        return 15 // Is the damage of this method
    }
    takeDamage(dmg){
        this.life -= dmg
        console.log(`${this.name}: ${chalk.red(this.life)} HP`);
        return this.life
    }
    smokeWeed() {
        this.life += 10
        console.log(chalk.bgGreen(`${this.name} smoke weed ! HP: ${this.life}`));
        return this.life
    }
}