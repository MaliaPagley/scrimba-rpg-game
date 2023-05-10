
function getDiceRollArray(diceCount) {
    /* Creates new Array of diceCount length and fills it's initial state to zeros
     then maps over it then returns random numbers between 1-6 for each element*/
return new Array(diceCount).fill(0).map(function() {
   return Math.floor(Math.random() * 6) + 1;
    });
}
export {getDiceRollArray}