// SCRIPT DESC: Character function constructor
import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from './utils.js'


/*Function Constructor */
function Character(data) {
    Object.assign(this, data)
    // Object Assign replaced the commented code below: For Reference
        // this.elementId = data.elementId
        // this.name = data.name
        // this.avatar = data.avatar
        // this.health = data.health
        // this.diceCount = data.diceCount
        
    this.diceHtml = getDicePlaceholderHtml(this.diceCount) 

    // Character Constructor Method
    this.setDiceHtml = function(diceCount) {
             /* Maps over dice rolls returned by getDiceRollArray 
             to generate the html for the random dice numbers */
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map(num => (`<div class="dice">${num}</div>`)).join('')
          
    }
    
    this.maxHealth = this.health

    // Tracks the total damage of each character per roll
    this.takeDamage = function(attackScoreArray){  
        const totalAttackScore = attackScoreArray.reduce((total, num) =>  total + num)
        this.health -= totalAttackScore
        // Checks if character's health drops to 0 and sets the status to dead if true
        if(this.health <= 0){
            this.dead = true
            this.health = 0
        }
    }

    this.getHealthBarHtml = function() {
        const percent = getPercentage(this.health, this.maxHealth)
       return `<div class="health-bar-outer">
                 <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
                    style="width: ${percent}%;">
                </div>
            </div>`
    }
  

    // Character Constructor Method 
    this.getCharacterHtml = function () {  
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
