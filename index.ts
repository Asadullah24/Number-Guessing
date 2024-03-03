import inquirer from "inquirer";

type usertype = {
  Userguess: number;
};

const Generatedno = Math.floor(Math.random() * 10);

const answer: usertype = await inquirer.prompt([
  {
    type: "number",
    name: "Userguess",
    message: "Guess a number between 0 and 10",
  },
]);
const { Userguess } = answer;

console.log(`Generated Number is ${Generatedno} and you Guess ${Userguess}`);
if (Userguess === Generatedno) {
  console.log("you Guess a correct number \n Congratulations, You win");
} else {
  console.log("You Lose \n please try again");
}
