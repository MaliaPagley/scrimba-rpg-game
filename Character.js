// SCRIPT DESC: Character function constructor
import { getDiceRollArray } from './utils.js'

/*Function Constructor */
function Character(data) {
    Object.assign(this, data)
    // Object Assign replaced the commented code below: For Reference
        // this.elementId = data.elementId
        // this.name = data.name
        // this.avatar = data.avatar
        // this.health = data.health
        // this.diceCount = data.diceCount

    // Character Constructor Method
    this.getDiceHtml = function(diceCount) {
        /* Maps over dice rolls returned by getDiceRollArray 
        to generate the html for the random dice numbers*/
        return getDiceRollArray(diceCount).map(function(dice) {
            return `<div class="dice">${dice}</div>`
            }).join('')
    }

    // Character Constructor Method 
    this.getCharacterHtml = function () {  
     const {elementId, name, avatar, health, diceCount} = this 
    let diceHtml = this.getDiceHtml(diceCount)

     /*(^) diceHtml = the returned value of te getDiceHtml() with param of diceCount
        and delivers it to the div.dice-container for each element */

    return `  <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}"/>
          <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">${diceHtml}</div> 
  </div>`;

    }
}
export default Character