
//Calculates the percentage of damage that is being induced on characters health status
const getPercentage = (remainingHealth, maxHealth) => ( 100 * remainingHealth) / maxHealth

function getDiceRollArray(diceCount) {
    /* Creates new Array of diceCount length and fills it's initial state to zeros
     then maps over it then returns random numbers between 1-6 for each element*/
return new Array(diceCount).fill(0).map(() => 
Math.floor(Math.random() * 6) + 1);
}

/*Returns a new array of diceCount length and adds the hmtl for the placeholder element */
function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(() =>  
    `<div class="placeholder-dice"></div>`).join('') 
}

export {getDiceRollArray, getDicePlaceholderHtml, getPercentage}