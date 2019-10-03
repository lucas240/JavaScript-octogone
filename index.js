const chalk = require('chalk');

const Rapeur = require('./rapeur.class')
const { random, sleep } = require("./util")

let competitors = [{ name: "Booba", weight: 110 }, { name: "Kaaris", weight: 50 }, { name: "Gradur", weight: 80 }, { name: "La Fouine", weight: 40 }]

competitors = competitors.map(({ name, weight }) => {
    return new Rapeur(name, weight)
})

while (true) {
    const striker = random(competitors.length)
    const receiver = random(competitors.length)
    const att = competitors[striker]
    const def = competitors[receiver]
    const actions = random(3)

    let damage;
    switch (true) {
        case actions === 0:
            damage = att.giveACordeALinge(def.name)
            def.takeDamage(damage)
            if (def.life <= 0) {
                console.log(chalk.bgRed(`${def.name.toUpperCase()} LOSE ! NOOB`));
                return false
            }
            break;
        case actions === 1:
            damage = att.giveAMandale(def.name)
            def.takeDamage(damage)
            if (def.life <= 0) {
                console.log(chalk.bgRed(`${def.name.toUpperCase()} LOSE ! NOOB`));
                return false
            }
            break;
        case actions === 2:
            att.smokeWeed()
            break;
        default:
            break;
    }
    sleep(500);
}