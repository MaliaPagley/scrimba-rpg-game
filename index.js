const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 10,
    diceCount: 3
}
const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceCount: 1
}


 function getDiceRollArray(diceCount) {
        /* Creates new Array of diceCount length and fills it's initial state to zeros
         then maps over it tthen returns random numbers between 1-6 for each element*/
    return new Array(diceCount).fill(0).map(function() {
       return Math.floor(Math.random() * 6) + 1;
    })
 }


function getDiceHtml(diceCount) {
        /* Maps over dice rolls returned by getDiceRollArray 
        to generate the html for the random dice numbers*/
   return getDiceRollArray(diceCount).map(function(dice) {
    return `<div class="dice">${dice}</div>`
   }).join('')
}

                                                 
function renderCharacter(data) {
    const {elementId, name, avatar, health, diceCount} = data
        /* renderCharacter() Takes in 5 parameters, 
        inserts the information inside the html 
        using template literals */  

    const diceHtml = getDiceHtml(diceCount);
        /*(^) diceHtml = the returned value of te getDiceHtml() with param of diceCount
        and delivers it to the div.dice-container for each element */
    document.getElementById(elementId).innerHTML = 
    `  <div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}"/>
          <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">${diceHtml}</div> 
  </div>`;

}

renderCharacter(hero)
renderCharacter(monster)
/*(^) Calling the function: fires the function to plug in the information inside the function.
By calling it twice we can individually create 2 seperate cards for the hero and monster to appear on screen*/


