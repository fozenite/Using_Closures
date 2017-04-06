



// RETURNS A RANDOM NUMBER BETWEEN 1 AND 6
var rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

console.log(rollDie());  // 1 (for example)



//DIE TO PREDICT NEXT NUMBER
// RETURNS NUMBER IN A ROW FROM HARDCODED LIST

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  i = 0;
  /* your code here */

  return function() {
    i+=1;
    return list[i-1];
    /* your code here */
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6