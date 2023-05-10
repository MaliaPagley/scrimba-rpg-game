
// SCRIPT DESC: How the app works and how we render things.

import characterData from './data.js' 
import Character from './Character.js' 

// *-------- MOVED TO utils.js ---------*
//  function getDiceRollArray(diceCount) {
//     /* Creates new Array of diceCount length and fills it's initial state to zeros
//      then maps over it then returns random numbers between 1-6 for each element*/
// return new Array(diceCount).fill(0).map(function() {
//    return Math.floor(Math.random() * 6) + 1;
//     });
// } *----------------------------------*

// *-------- MOVED TO data.js  ----------*
// const characterData = {
//     hero: {
//         elementId: "hero",
//         name: "Wizard",
//         avatar: "images/wizard.png",
//         health: 10,
//         diceCount: 3
//     },
//     monster: {
//         elementId: "monster",
//         name: "Orc",
//         avatar: "images/orc.png",
//         health: 10,
//         diceCount: 1
//     }
// }  *----------------------------------*

// *------ MOVED TO Character.js --------*
// /*Function Constructor */
// function Character(data) {
//     Object.assign(this, data)
//     // Object Assign replaced the commented code below: For Reference
//         // this.elementId = data.elementId
//         // this.name = data.name
//         // this.avatar = data.avatar
//         // this.health = data.health
//         // this.diceCount = data.diceCount

//     // Character Constructor Method
//     this.getDiceHtml = function(diceCount) {
//         /* Maps over dice rolls returned by getDiceRollArray 
//         to generate the html for the random dice numbers*/
//         return getDiceRollArray(diceCount).map(function(dice) {
//             return `<div class="dice">${dice}</div>`
//             }).join('')
//     }

//     // Character Constructor Method 
//     this.getCharacterHtml = function () {  
//      const {elementId, name, avatar, health, diceCount} = this 
//     let diceHtml = this.getDiceHtml(diceCount)

//      /*(^) diceHtml = the returned value of te getDiceHtml() with param of diceCount
//         and delivers it to the div.dice-container for each element */

//     return `  <div class="character-card">
//           <h4 class="name"> ${name} </h4>
//           <img class="avatar" src="${avatar}"/>
//           <p class="health">health: <b> ${health} </b></p>
//       <div class="dice-container">${diceHtml}</div> 
//   </div>`;

//     }
// } *-----------------------------------------*

// Creates new instances of orc and wizard by using function constructor 'Character'
const orc = new Character(characterData.monster);
const wizard = new Character(characterData.hero);

function render() {
    /* Grabs the element Id of WIZARD and ORC and sets the innerHTML to the return of 'elementId'.getCharacterHtml() 
     which allows the HTML for characters to appear on screen */
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}
render()


