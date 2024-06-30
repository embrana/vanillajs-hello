/* eslint-disable */
import "bootstrap";
import "./style.css";

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let excuse = `${getRandomElement(who)} ${getRandomElement(
    action
  )} ${getRandomElement(what)} ${getRandomElement(when)}.`;
  return excuse;
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.getElementById("excuse").innerHTML = generateExcuse();
};

// window.onload = function() {
//
// };
