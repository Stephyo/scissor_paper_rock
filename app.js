function init() {
  var choices = Array.from(document.getElementsByClassName('player'));

  for (var i = 0; i < choices.length; i++){
    choices[i].addEventListener('click', evaluate);
  }

  function evaluate(event){
    var itemClicked = event.target.parentElement.id;
    console.log(itemClicked);
    hideUnchosen(itemClicked);
    getWinner(itemClicked, getComputerChoice());
  }

  function hideUnchosen(chosen){
    if(chosen === "rock"){
      //hide scissors and paper
      document.getElementById("scissor").firstChild.style.display="none";
      document.getElementById("paper").firstChild.style.display="none";
    } else if (chosen === "scissor"){
      //hide rock and paper
      document.getElementById("paper").firstChild.style.display="none";
      document.getElementById("rock").firstChild.style.display="none";
    } else {
      //hide scissors and rock
      document.getElementById("scissor").firstChild.style.display="none";
      document.getElementById("rock").firstChild.style.display="none";
    }
  }


  function getComputerChoice(){
    var randomNum = Math.random();
    var computerChoice;
    	if (computerChoice <= 0.33) {
    		computerChoice = "rock";
    	}else if (computerChoice <= 0.67) {
    		computerChoice = "paper";
    	}else {
    		computerChoice = "scissor";
    	}
    	console.log(computerChoice);
    	document.getElementById('computer-choice').innerHTML= 'Computer Choice : ' + computerChoice;
      return computerChoice;
  }


  function getWinner(playerChoice, computerChoice){
    var winner;
    if(playerChoice === computerChoice){
      winner="Result : Its a tie!";
    } else if(playerChoice === 'rock' && computerChoice === 'scissor'){
      winner="Result : Player Wins";
    } else if (playerChoice === 'scissor' && computerChoice === 'paper'){
      winner="Result : Player wins!";
    } else if (playerChoice === 'paper' && computerChoice === 'rock'){
      winner="Result : Player wins";
    } else {
      winner="Result : Computer wins";
        }
    document.getElementById('result').innerHTML= winner;
  }



} // end of init
window.addEventListener('load', init, false);
