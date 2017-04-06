


//FUNCTION TAKES IN A NUMBER X AND RETURNS
// A FUNCTION THAT COUNTS DOWN WHEN IT IS CALLED

var countdownGenerator = function (number) {
  /* your code here */
  return function(){

    if(number>0){
      console.log("T-minus "+ number);
    }
    else if (number == 0){
      console.log("Blast Off!");
    }else{
      console.log("Rockets already gone, bub!")
    }
    number --;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!