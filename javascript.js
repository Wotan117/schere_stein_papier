const choice_number_computer = math.randome();

/*assigning the randome number rock, paper, scissors*/
if (choice_number_computer < 0.3) {
    const choice_computer = "rock"
} else if (choice_number_computer >0.6) {
    const choice_computer = "paper"
} else { const choice_computer = "scissors"
}

let choice_human = prompt("chose your weapon")
let choice_human_clean = choice_human.toLowerCase();

/*I need an if not and or statement in javascript*/

/*pseudo code*/

/*if not (choice_human_clean = "rock" or choice_human_clean = "paper" or choice_human_clean = "scissor") {
    let choice_human = prompt("chouse rock, paper or scissors") 
loop back to 12}
*/

/*not shure if a function inside the same function workes*/
function weapon_of_choice() {
    let choice_human = prompt("please chose roch, paper or scissors")
    let choice_human_clean = choice_human.toLowerCase();
    if (choice_human_clean == "rock" | choice_human_clean == "paper" | choice_human_clean == "scissors") {
      let choice_message = "you have chosen" + choice_human_clean + ". Truely a great choice! But will it be enoth.";
      console.log(choice_message)
    } else {
      weapon_of_choice()
    }
  }