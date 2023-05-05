const heroElementId = "hero"
const heroName = "Wizard"
const heroAvatar = "images/wizard.png"
const heroHealth = "60"
const heroDiceRoll = 6

const monsterElementId = "monster"
const monsterName = "Orc"
const monsterAvatar = "images/orc.png"
const monsterHealth = "10"
const monsterDiceRoll = 4

/* renderCharacter() Takes in 5 parameters, 
inserts the information inside the html 
using template literals*/                                                      
function renderCharacter(elementId, name, avatar, health, diceRoll) { 
    document.getElementById(elementId).innerHTML = 
    `  <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}"/>
          <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container"><div class="dice"> ${diceRoll} </div></div>
  </div>`;

}
/* Calling the function: fires the function to plug in the information inside the function.
By calling it twice we can individually create 2 seperate cards for the hero and monster to appear on screen*/
renderCharacter(heroElementId, heroName, heroAvatar, heroHealth, heroDiceRoll)
renderCharacter(monsterElementId, monsterName, monsterAvatar, monsterHealth, monsterDiceRoll)

