$(document).ready(function(){
 $("#answer").hide();
    var magic8Ball = {};

    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];

    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
 		    $("#answer").fadeIn(4000);
        $("#answer").text( answer );

        console.log(question);
        console.log(answer);
    };
 $("#answer").hide();
 $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
    var onClick = function() {
      $("#8ball").effect( "shake" );
      //wait half a second before showing prompt
         setTimeout(
             function() {
                 //show prompt
                 var question = prompt("Ask a yes or no question")
                 magic8Ball.askQuestion(question)
             }, 500);
    };

    $("#questionButton").click( onClick );

});
