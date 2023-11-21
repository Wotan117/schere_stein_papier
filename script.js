/*function is working but i must work in the return function to retrieve the point count ot of the game function*/
function game(){

  const choice_number_computer = Math.random();
  console.log(choice_number_computer)

  let choice_human = prompt("chose your weapon")
  let choice_human_clean = choice_human.toLowerCase();

  function rock_check() {
    if (choice_human_clean == "rock" | choice_human_clean == "paper" | choice_human_clean == "scissors") {
      let choice_message = "you have chosen " + choice_human_clean + ". Truely a great choice! But will it be enoth.";
      console.log(choice_message);
    } else {
      weapon_of_choice()
    }
  }

  rock_check();

  /*fuction if the first imput is invalid*/
  function weapon_of_choice() {
    choice_human = prompt("please chose rock, paper or scissors");
    console.log(choice_human)
    choice_human_clean = choice_human.toLowerCase();
    console.log(choice_human_clean)
    /*have to check for repeated let statment of a variable*/
    if (choice_human_clean == "rock" | choice_human_clean == "paper" | choice_human_clean == "scissors") {
      let choice_message = "you have chosen " + choice_human_clean + ". Truely a great choice! But will it be enoth.";
      console.log(choice_message);
    } else {
      weapon_of_choice()
    }
  }

  let choice_computer = " "
  let points_computer = 0
  let points_human = 0

  function tie() {
    let vicory_message = "the computer chose " + choice_human_clean +" as well. YOU HAVE TIED"
    points_computer++
    points_human++
    console.log(points_computer)
    console.log(vicory_message)
  }

  function player_wins(){
    let vicory_message = "the computer chose "+ choice_computer +". YOU ARE WINNER !"
    points_human++
    console.log(points_computer)
    console.log(vicory_message)
  }

  function player_loses(){
    let vicory_message = "the computer chose "+ choice_computer +". ALL YOUR BASE ARE BELONG TO US."
    points_computer++
    console.log(points_computer)
    console.log(vicory_message)
  }

  /*assigning the randome number rock, paper, scissors as well as the victory condition logic*/
  if (choice_number_computer < 0.3) {
    choice_computer = "rock"
    if (choice_human_clean == "rock") {
      tie();
    } else if (choice_human_clean == "paper") {
      player_wins();
    } else if (choice_human_clean == "scissors") {
      player_loses();
    } else {
      console.log(choice_computer)
    }
  } else if (choice_number_computer >0.6) {
    choice_computer = "paper"
    if (choice_human_clean == "paper") {
      tie();
    } else if (choice_human_clean == "scissors") {
      player_wins
    }else if (choice_human_clean == "rock") {
      player_loses();
    } else {
      console.log(choice_computer)
    }
  } else { 
    choice_computer = "scissors"
    if (choice_human_clean == "scissors") {
      tie();
    } else if (choice_human_clean == "rock") {
      player_wins();
    } else if (choice_human_clean == "paper") {
      player_loses();
    } else {console.log(choice_computer)
    }
  }
}


for (let i = 0; i < 5; i++) {
  game();
}

console.log(points_computer)
console.log(points_human)