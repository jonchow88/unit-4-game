$(document).ready(function(){

//Generating a random number between 19-120
    var Random = Math.floor(Math.random() * 101 + 19)

//Appending random to the randomNumber id
    $('#randomNumber').text(Random);
    
//Generating random numbers for each crystal between 1-12  
    var num1= Math.floor (Math.random() * 11 + 1)
    var num2= Math.floor (Math.random() * 11 + 1)
    var num3= Math.floor (Math.random() * 11 + 1)
    var num4= Math.floor (Math.random() * 11 + 1)
    
//Setting the variables for all the counters
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

//RESET
    function reset(){
    Random= Math.floor (Math.random() * 101 + 19);
       $('#randomNumber').text(Random);
        num1= Math.floor(Math.random() * 11 + 1);
        num2= Math.floor(Math.random() * 11 + 1);
        num3= Math.floor(Math.random() * 11 + 1);
        num4= Math.floor(Math.random() * 11 + 1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        }  

//Add to counter and alert (WIN)
  function win(){
  alert("Winner Winner Chicken Dinner!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }

  //Add to counter and alert (LOSS)
  function loser(){
  alert ("Learn to add or use a calculator buddy!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
//using jQuery onclick function --> assign to each crystal

//Blue button
    $('#blue').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 

      // Set the conditions for winning/losing
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  

//Repeat for green button 
    $('#green').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  

//Repeat for red button 
    $('#red').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);

            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  

//Repeat for yellow button
    $('#yellow').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          }

 
    });   
  }); 
