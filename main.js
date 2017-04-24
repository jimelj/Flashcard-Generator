/*jshint esversion:6*/
let BasicCard = require("./BasicCard");
let ClozeCard = require("./ClozeCard");

let firstPresident = BasicCard(
  "Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front);
console.log(firstPresident.back);
console.log('==================================================');

let firstPresidentCloze = new ClozeCard(
  "George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.partial);
console.log(firstPresidentCloze.fullText);
console.log('==================================================');

let lastPresidentCloze = new ClozeCard(
  "Donald Trump was the first president of the United States.", "Donald Trump");

console.log(lastPresidentCloze.cloze);
console.log(lastPresidentCloze.partial);
console.log(lastPresidentCloze.fullText);
console.log('==================================================');

let brokenCloze = new ClozeCard("This doesn't work", "oops");
console.log(brokenCloze.cloze);
console.log(brokenCloze.partial);
console.log(brokenCloze.fullText);
console.log('==================================================');

let favPresidentCloze = new ClozeCard(
  "John F. Kennedy was the first president of the United States.", "John F. Kennedy");

console.log(favPresidentCloze.cloze);
console.log(favPresidentCloze.partial);
console.log(favPresidentCloze.fullText);
console.log('==================================================');
