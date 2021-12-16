
//=======================================================
//visibility toggle
const instructions = document.getElementById('instructions')
//action console
const bottomRow = document.getElementById('bottomRow'); 
const bottomRow2 = document.getElementById('bottomRow2'); 
//status access
const stats = document.getElementsByClassName('fighter');
//good guy stats
const heroStats = document.getElementById('GgHp');
//bad guy states
const badStats = document.getElementById('BgHp');
//good guy HP
const goodHP = document.getElementById('goodHP');
//bad guy HP
const badHP = document.getElementById('badHP');

// Alien Fleet
const randHull = randomIntFromInterval(3, 6);
const randPower = randomIntFromInterval(2, 4);
const randAcc = RandomFloatInt(.6, .8).toFixed(1);

const AudreyII = new SpaceShip(randHull, randPower, randAcc);
const Alf = new SpaceShip(randHull, randPower, randAcc);
const Predator = new SpaceShip(randHull, randPower, randAcc);
const Stitch = new SpaceShip(randHull, randPower, randAcc);
const MarvinTheMartian = new SpaceShip(randHull, randPower, randAcc);
const ET = new SpaceShip(randHull, randPower, randAcc);

const alienSquad = [AudreyII, Alf, Predator, Stitch, MarvinTheMartian, ET]

//health variables
var arnoldHp = 100
var marsAlienHp = 100
//=======================================================

class SpaceShip {
    // creating our properties for our parent class (avatar/ship)
    constructor(health, power, accuracy) {
        this.health = health
        this.power = power
        this.accuracy = accuracy
    }
}


const ussSchwarzenegger = new SpaceShip(20, 5, .7);

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function RandomFloatInt(min, max) {
    return (Math.random() * (max - min)) + min;
}


    // function begin() {
    //     bottomRow.innerHTML = `Hull: ${ussSchwarzenegger.health}, Power: ${ussSchwarzenegger.power}, Accuracy ${ussSchwarzenegger.accuracy}`;
    //     bottomRow2.innerHTML = `Hull: ${AudreyII.health}, Power: ${AudreyII.power}, Accuracy ${AudreyII.accuracy}`;
    // }

    function fight() {
    // bottomRow.innerHTML = "Testing Testing";
    // bottomRow2.innerHTML = "1,2,3";
    var hitChance = Math.round(Math.random()*10);
    if(hitChance < 7) {
        var dmg= Math.round(Math.random()*10)+10;
        marsAlienHp -= dmg;
        bottomRow.innerHTML = `Tag!`
        bottomRow2.innerHTML = `I've been hit! | Damage: ${marsAlienHp}`//NaN..why? 
    } else {
        bottomRow.innerHTML = `I missed!`
        bottomRow2.innerHTML = `Ha! `
    }
    }
    

    // function counterAttack() {
    //     var attackChoice = Math.ceil(Math.random() * 3);
    //     if (attackChoice == 1) {
    //         var randNum = Math.round(Math.random() * 10);
    //         if (randNum <= 7) {
    //             var dmg = Math.round(Math.random() * 10) + 10;
    //             goodGhP -= dmg;
    //             if (goodGhP < 0) {
    //                 goodGhP = 0;
    //             }
    //             bottomRow.innerHTML += `<br>${alien6.name} Attacked! ~ Damage:${dmg} | Your Remaining Health: ${goodGhP} `;
    
    //             var goodGhPBarWidth = (goodGhP / 100) * 150;
    //             goodHP.style.width = goodGhPBarWidth + "px";
    
    //         } else {
    //             bottomRow.innerHTML += `<br>${alien6.name} Missed! | Your Remaining Health: ${goodGhP}`;
    //         }
    //     } else if (attackChoice == 2) {
    //         var randNum = Math.round(Math.random() * 10);
    //         if (randNum <= 5) {
    //             var dmg = Math.round(Math.random() * 15) + 15;
    //             goodGhP -= dmg;
    //             if (goodGhP < 0) {
    //                 goodGhP = 0;
    //             }
    //             bottomRow.innerHTML += `<br>${alien6.name} Attacked! ~ Damage:${dmg} | Your Remaining Health: ${goodGhP} `;
    
    //             var goodGhPBarWidth = (goodGhP / 100) * 150;
    //             goodHP.style.width = goodGhPBarWidth + "px";
    
    //         } else {
    //             bottomRow.innerHTML += `<br>${alien6.name} Missed!`;
    //         }
    //     } else {
    //         var randNum = Math.round(Math.random() * 10);
    //         if (randNum <= 3) {
    //             var dmg = Math.round(Math.random() * 20) + 20;
    //             goodGhP -= dmg;
    //             if (goodGhP < 0) {
    //                 goodGhP = 0;
    //             }
    //             bottomRow.innerHTML += `<br>${alien6.name} Attacked! ~ Damage:${dmg} | Your Remaining Health: ${goodGhP} `;
    
    //             var goodGhPBarWidth = (goodGhP / 100) * 150;
    //             goodHP.style.width = goodGhPBarWidth + "px";
    
    //         } else {
    //             bottomRow.innerHTML += `<br>${alien6.name} Missed!`;
    //         }
    //     }
    //     if (goodGhP == 0) {
    //         bottomRow.innerHTML = ` GAME OVER!!! LOSER!`;
    //         // moveBitch.style.visibility = "hidden";
    //     }
    // }