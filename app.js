let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 

const userscorepara =document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const showWinner = (userWin,Userchoice,computer_choice) => {
  if (userWin) {
    userScore++;
    userscorepara.textContent= userScore;
    msg.textContent = `You win  🏆 , Your ${Userchoice} beats ${computer_choice}`;
    msg.style.backgroundColor="#659157";
  } else {
    compScore++;
    compscorepara.textContent= compScore;
    msg.textContent = `You Lose 😴 , ${computer_choice} beats your ${Userchoice}`;
    msg.style.backgroundColor="#FFCAB1";
    msg.style.color="black";
  }
};

const genCompchoice = () => {
  const options = ['rock','scissors','paper'];
  const randindx = Math.floor(Math.random() * 3);
  return options[randindx];
};

const Draw_game = () => {
  msg.textContent = "Game was draw 😁";
  msg.style.backgroundColor="yellow";
  msg.style.color="black";

};

const playgame = (Userchoice) => {
  console.log("User choice = ", Userchoice);
  const computer_choice = genCompchoice();
  console.log('Computer choice = ', computer_choice);

  if (Userchoice === computer_choice) {
    Draw_game();
  } else {
    let userWin = true;
    if (Userchoice === "rock") {
      userWin = computer_choice === "paper" ? false : true;
    } else if (Userchoice === "paper") {
      userWin = computer_choice === "scissors" ? false : true;
    } else {
      userWin = computer_choice === "rock" ? false : true;
    }
    showWinner(userWin,Userchoice,computer_choice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const Userchoice = choice.getAttribute("id");
    playgame(Userchoice);
  });
});