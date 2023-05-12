// SCRIPT DESC: Character function constructor
import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from './utils.js'


/*Function Constructor */
class Character{
    constructor(data) {
        Object.assign(this, data)
        this.diceHtml = getDicePlaceholderHtml(this.diceCount) 
        this.maxHealth = this.health

    }
   
    // Character Constructor Method
    setDiceHtml() {
             /* Maps over dice rolls returned by getDiceRollArray 
             to generate the html for the random dice numbers */
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map(num => (`<div class="dice">${num}</div>`)).join('')
          
    }
    
    // Tracks the total damage of each character per roll
    takeDamage(attackScoreArray) {  
        const totalAttackScore = attackScoreArray.reduce((total, num) =>  total + num)
        this.health -= totalAttackScore
        // Checks if character's health drops to 0 and sets the status to dead if true
        if(this.health <= 0){
            this.dead = true
            this.health = 0
        }
    }

    getHealthBarHtml() {
        const percent = getPercentage(this.health, this.maxHealth)
       return `<div class="health-bar-outer">
                 <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
                    style="width: ${percent}%;">
                </div>
            </div>`
    }
  

    // Character Constructor Method 
    getCharacterHtml() {  
        const {elementId, name, avatar, health, diceCount, diceHtml} = this 

        const healthBar = this.getHealthBarHtml()

        return `  <div class="character-card">
            <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}"/>
             <p class="health">health: <b> ${health} </b></p>
                ${healthBar}
            <div class="dice-container">${diceHtml}</div> 
        </div>`;

    }
   
}

export default Character
