/*jshint esversion:6*/
let BasicCard = require("./BasicCard");
let ClozeCard = require("./ClozeCard");
let inquirer = require('inquirer');
let basic = require("./basic");
let cloze = require("./cloze");
let count = 0;


function init() {
  inquirer.prompt([ /* Pass your questions in here */
    {
  type: "list",
  name: "pick",
  message: "Pick a flash card game",
  choices: [
    "Basic Cards",
    "Cloze Cards"
   ]
}
  ]).then(function(answers) {
    // Use user feedback for... whatever!!
    switch (answers.pick) {
      case "Basic Cards":
        askQuestionBasic();
        break;
      case "Cloze Cards":
        askQuestionCloze();
        break;
    }
  });
}
function askQuestionBasic() {
  if (count < basic.length) {
    let history = new BasicCard(basic[count].front, basic[count].back);
    inquirer.prompt([ /* Pass your questions in here */ {
      name: 'question',
      message: history.front
    }]).then(function(answers) {
      // Use user feedback for... whatever!!
      if (answers.question.toLowerCase() == history.back.toLowerCase()) {
        console.log('You are Correct');
      } else {
        console.log('You are Wrong');
      }
      count++;
      console.log('==================================================');
      askQuestionBasic();
    });

  }else{
    playAgain();
  }
}

function askQuestionCloze() {
  if (count < cloze.length) {
    let history = new ClozeCard(cloze[count].text, cloze[count].cloze);
    inquirer.prompt([ /* Pass your questions in here */ {
      name: 'question',
      message: history.partial
    }]).then(function(answers) {
      // Use user feedback for... whatever!!
      if (answers.question.toLowerCase() == history.cloze.toLowerCase()) {
        console.log('You are Correct');
        console.log(history.fullText);
      } else {
        console.log('You are Wrong');
      }
      count++;
      console.log('==================================================');
      askQuestionCloze();
    });

  }else{
    playAgain();
  }
}
function playAgain(){
  inquirer.prompt({
      name: "again",
      type: "confirm",
      message: "Would you like to play again"
    }).then(function(answer) {
      if (answer.again) {
        // restarts
        init();
      }
      else {
        console.log('Thanks For playing!');
      }
    });
}
init();

// let firstPresidentCloze = new ClozeCard(
//   "George Washington was the first president of the United States.", "George Washington");
//
// console.log(firstPresidentCloze.cloze);
// console.log(firstPresidentCloze.partial);
// console.log(firstPresidentCloze.fullText);
// console.log('==================================================');
//
// let lastPresidentCloze = new ClozeCard(
//   "Donald Trump was the first president of the United States.", "Donald Trump");
//
// console.log(lastPresidentCloze.cloze);
// console.log(lastPresidentCloze.partial);
// console.log(lastPresidentCloze.fullText);
// console.log('==================================================');
//
// let brokenCloze = new ClozeCard("This doesn't work", "oops");
// console.log(brokenCloze.cloze);
// console.log(brokenCloze.partial);
// console.log(brokenCloze.fullText);
// console.log('==================================================');
//
// let favPresidentCloze = new ClozeCard(
//   "John F. Kennedy was the first president of the United States.", "John F. Kennedy");
//
// console.log(favPresidentCloze.cloze);
// console.log(favPresidentCloze.partial);
// console.log(favPresidentCloze.fullText);
// console.log('==================================================');
