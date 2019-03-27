// First tried creating an array with variables but that did not work
//var targetNumbers = [29, 39, 52, 68, 80, 95];
//var numberOptions = [1, 7, 10, 6];
//This function will allow our jQuery to work/dispaly
$(function() {


//Create the jQuery that will display on our HTML, the score displays player's score count, the targetNumber will display target score
var targetScore = Math.floor(Math.random() * 102+19);
$("#target").text(targetScore);

var wins = 0;
$("#wins").text(wins);

var losses = 0;
$("#losses").text(losses);

var score = 0;
$("#score").text("Your total score is: " + score);



//create individual values for each crystal

var crystal1 = Math.floor(Math.random() * 12)+1;
var crystal2 = Math.floor(Math.random() * 12)+1;
var crystal3 = Math.floor(Math.random() * 12)+1;
var crystal4 = Math.floor(Math.random() * 12)+1;


//Create a function to reset our target score and player score to 0 when game is over
    function ariseGame() {
        // reset the userScore & update display
        score = 0;
        $("#score").text("Your total score is: " + score);

        // generate a new targetScore & update display 
        targetScore = Math.floor(Math.random() * 102) + 19;
        $("#target").text(targetScore);

        // generate new crystal values
        crystal1 = Math.floor(Math.random() * 12)+1;
        crystal2 = Math.floor(Math.random() * 12)+1;
        crystal3 = Math.floor(Math.random() * 12)+1;
        crystal4 = Math.floor(Math.random() * 12)+1;

    }
    $("#crystal1").on("click", function() {
        score = score + crystal1;
        $("#score").text("Your total score is: " + score);
        
        if (score == targetScore){
            wins++;
            $("#wins").text(wins);
            ariseGame ();
       
        } else if (score > targetScore){
            losses++;
            $("#losses").text(losses);
            ariseGame ();
        }
    });

    $("#crystal2").on("click", function() {
        score = score + crystal2;
        $("#score").text("Your total score is: " + score);
        
        if (score == targetScore){
            wins++;
            $("#wins").text(wins);
            ariseGame ();
       
        } else if (score > targetScore){
            losses++;
            $("#losses").text(losses);
            ariseGame ();
        }
    });

    $("#crystal3").on("click", function() {
        score = score + crystal3;
        $("#score").text("Your total score is: " + score);
        
        if (score == targetScore){
            wins++;
            $("#wins").text(wins);
            ariseGame ();
       
        } else if (score > targetScore){
            losses++;
            $("#losses").text(losses);
            ariseGame ();
        }
    });

    $("#crystal4").on("click", function() {
        score = score + crystal4;
        $("#score").text("Your total score is: " + score);
        
        if (score == targetScore){
            wins++;
            $("#wins").text(wins);
            ariseGame ();
       
        } else if (score > targetScore){
            losses++;
            $("#losses").text(losses);
            ariseGame ();
        }
    });
});























    //Functions I was experimenting with and couldn't get to work
/*$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  });*/
 /* var show = targetNumbers[Math.floor(Math.random() * targetNumbers.length)];
  function myFunction() {
    document.querySelector("#target").innerHTML = targetNumbers;
  }

  /*$("#number-to-guessta").text(targetNumber);

function random_item(targetNumbers) {
return targetNumbers[Math.floor(Math.random()*targetNumbers.length)];
    }
document.getElementById("target").innerHTML = targetNumbers;




document.getElementById("crystal1").onclick = function() {myFunction()};
function myFunction() {
    document.getElementById("crystal1").innerHTML = "YOU CLICKED ME!";
  }




//<p>Math.floor(Math.random() * 100)) returns a random integer between 0 and 99 
//(both included):</p>

//<p id="demo"></p>
