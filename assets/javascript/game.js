$( document ).ready(function() {

//******* BEGIN OF FUNCTIONS *******//
 
//resets the game
function reset() {
  randomNumber = Math.floor(Math.random() * 100 + 19);

  $("#randomNumber").html(randomNumber);
  var gem1 = Math.floor(Math.random() * 12 + 1)
  var gem2 = Math.floor(Math.random() * 12 + 1)
  var gem3 = Math.floor(Math.random() * 12 + 1)
  var gem4 = Math.floor(Math.random() * 12 + 1)

  userTotal= 0;

  $("#finalTotal").html(userTotal);
} 

//adds the wins to the userTotal
function winner() {
  wins++; 
  $("#numberWins").html(wins);
  $("#loseOrWinMessage").html("Congrats! You won! :-) ");
  reset();
  
}

//adds the losses to the userTotal
function loser() {
  losses++;
  $("#numberLosses").html(losses);
  $("#loseOrWinMessage").html("You have lost! :-( ");
  reset();
  
}

//******* END OF FUNCTIONS *******//

   // Selects a random number to be shown at the start of the game between 19 to 120
  var randomNumber = Math.floor(Math.random() * 100 + 19);
  
  // Appends a random number to the randomNumber id in the html document
  $("#randomNumber").html(randomNumber);
  
  // Sets up random numbers for each gem between 1 to 12
  var gem1 = Math.floor(Math.random() * 12 + 1);
  var gem2 = Math.floor(Math.random() * 12 + 1);
  var gem3 = Math.floor(Math.random() * 12 + 1);
  var gem4 = Math.floor(Math.random() * 12 + 1);
 
 //*** console.log for testing purpose only.They do not affect the game and can be removed ***//
 console.log(gem1); 
 console.log(gem2);
 console.log(gem3);
 console.log(gem4);

  // Variables to keep track of total score
  var userTotal = 0; 
  var wins = 0;
  var losses = 0;
 
$("#numberWins").html(wins);
$("#numberLosses").html(losses);


//sets up click for each gem
  $("#blue_gem").on ("click", function() {
    userTotal = userTotal + gem1;
    console.log("New userTotal = " + userTotal); // for testing only

    $("#loseOrWinMessage").html("");

    $("#finalTotal").html(userTotal); 

          //sets win/lose conditions
        if (userTotal == randomNumber) {
          winner();
        }
        else if ( userTotal > randomNumber)  {
          loser();
        }   
  })  

  $("#green_gem").on ("click", function() {
    userTotal = userTotal + gem2;
    console.log("New userTotal= " + userTotal); // for testing only

    $("#loseOrWinMessage").html("");

    $("#finalTotal").html(userTotal); 
        if (userTotal == randomNumber) {
          winner();
        }
        else if ( userTotal > randomNumber) {
          loser();
        } 
  })  

  $("#red_gem").on ("click", function() {
    userTotal = userTotal + gem3;
    console.log("New userTotal= " + userTotal); // for testing only
    $("#loseOrWinMessage").html("");

    $("#finalTotal").html(userTotal);

//sets win/lose conditions
          if (userTotal == randomNumber) {
          winner();
        }
        else if ( userTotal > randomNumber) {
          loser();
        } 
  })  

  $("#orange_gem").on ("click", function() {
    userTotal = userTotal + gem4;
    console.log("New userTotal= " + userTotal);// for testing only
    
    $("#loseOrWinMessage").html("");

    $("#finalTotal").html(userTotal); 
      
          if (userTotal == randomNumber) {
          winner();
        }
        else if (userTotal > randomNumber) {
          loser();
        }
  });   
}); 