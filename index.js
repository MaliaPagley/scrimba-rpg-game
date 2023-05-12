
// SCRIPT DESC: How the app works and how we render things.

import characterData from './data.js' 
import Character from './Character.js' 

let monstersArray = ["orc", "demon", "goblin"];
let isWaiting = false;

            // Returns a new instance of character with new monster -  replacing the defeated monster with another in monstersArray
function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}

}

function attack() {
    if(!isWaiting) {
            // Calls the funcion getDiceHtml on each character for the html to appear
        wizard.setDiceHtml()
        monster.setDiceHtml()
        
            /* Pushes the current dice score for each character to the method in Character.js 
             to create the total damage calculations */
        wizard.takeDamage(wizard.currentDiceScore)
        monster.takeDamage(monster.currentDiceScore)
        render()

            /*  Checks if the wizard is alive -  endGame | if the monster is dead - 
                 render next monster for replacement | If all monsters are defeated "length of monstersArray" - endGame */
            if(wizard.dead){
                endGame()
            }
            else if(monster.dead){
                if(monstersArray.length > 0){
                    setTimeout(() => {
                        monster = getNewMonster()
                        render()
                    },1500)
                }
                else{
                    endGame()
                }
            }
        }
    }

function endGame() {
    isWaiting = true
        // End Game will check the staus of who wins and then display the winner emoji and screen
    const endMessage = wizard.health === 0 && monster.health === 0 ? "No victors = All creatures are dead" :
    wizard.health > 0 ? "The Wizard is Victorious" : "The Monster is Victorious"

        // Generates the end game display
    const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
    setTimeout(() => {
        document.body.innerHTML = 
        `<div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>` 
    }, 1500)
}

function render() {
        // Rendering into the html whatever is returned when it calls the wizard/orc.getCharacterHtml() method 
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}
        // Selects the button by ID and adding a click event that will trigger the attack function.
document.getElementById('attack-button').addEventListener('click',attack)

        // Creates new instances of wizard by using function constructor 'Character'
const wizard = new Character(characterData.hero);
let monster = getNewMonster()
render()


