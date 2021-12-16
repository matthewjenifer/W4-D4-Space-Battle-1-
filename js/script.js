// function attack() {
//     var chanceNum = Math.random(); //pick random number between 0 and 1. 
//     if (chanceNum <= ourHero.accuracy) {
//         var dmg = ourHero.power;
//         badGuyHp -= dmg;


//         if (badGuyHp <= 0) {
//             return ` ..YOU WON?!?.. bet it wont happen again..`;
//         }

//         if (badGuyHp > 0);
//         return `Attack Successful! ~ Damage:${dmg} | ${alien1.name} ~ Health: ${badGuyHp} `;
//     } else {
//         return `You missed ${alien1.name}..`;

//     }
// }

// function counterAttack() {}

class SpaceShip {
    // creating our properties for our parent class (avatar/ship)
    constructor(health, power, accuracy) {
        this.health = health
        this.power = power
        this.accuracy = accuracy
    }
    attack(opponent) {
        let randAttack = Math.random();
        if (randAttack < this.accuracy) {
            opponent -= this.power;
            console.log(`Attack Successful`)
        } else {
            console.log('You missed')
        }
    }
}

// Your spaceship, the USS 
const ussSchwarzenegger = new SpaceShip(20, 5, .7);

// The alien ships** should each 
// have the following _ranged_ properties determined randomly: * hull - 
// between `3` and `6` * firepower - between `2` and `4` * accuracy - between 
// `.6` and `.8` You could be battling six alien ships each with unique values. 
const randHull = randomIntFromInterval(3, 6);
const randPower = randomIntFromInterval(2, 4);
const randAcc = RandomFloatInt(.6, .8).toFixed(1);

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function RandomFloatInt(min, max) {
    return (Math.random() * (max - min)) + min;
}

// Example use of **accuracy** to determine a hit: ```javascript if (Math.random() < alien[0].accuracy) 
// { console.log('You have been hit!'); } ```

const AudreyII = new SpaceShip(randHull, randPower, randAcc);
const Alf = new SpaceShip(randHull, randPower, randAcc);
const Predator = new SpaceShip(randHull, randPower, randAcc);
const Stitch = new SpaceShip(randHull, randPower, randAcc);
const MarvinTheMartian = new SpaceShip(randHull, randPower, randAcc);
const ET = new SpaceShip(randHull, randPower, randAcc);

// Alien Fleet
const alienSquad = [AudreyII, Alf, Predator, Stitch, MarvinTheMartian, ET]

// console.log(ussSchwarzenegger.power)
// ussSchwarzenegger.attack(AudreyII)

// console.log(AudreyII)


function begin() {
    bottomRow.innerHTML = `Hull: ${ussSchwarzenegger.health}, Power: ${ussSchwarzenegger.power}, Accuracy ${ussSchwarzenegger.accuracy}`
    bottomRow2.innerHTML = `Hull: ${alienSquad[0].health}, Power: ${alienSquad[0].power}, Accuracy ${alienSquad[0].accuracy}`
}

function fight(){
    bottomRow.innerHTML = `Oh we Fighting`
    bottomRow2.innerHTML = `Aiight Bet..`
}







