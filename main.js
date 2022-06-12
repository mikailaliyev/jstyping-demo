const inputText = document.getElementById("input");
const divs = document.querySelectorAll("div");
const mistakesPlace = document.getElementById("mistakes");
const typingSpeed = document.getElementById("typing-speed");
const keyCodes = [
  " ",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "g",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  ".",
  ",",
];
let trainingText = document.getElementById("training-text");
let mistakesCount = 0;
let count = 0;
let allKeysSum = 0;

//Setting up some training text,
//but it is better to fetch some text from online resources in the future
trainingText.innerText = "hello world brothers how are you doing.";

//Main event listener
inputText.addEventListener("keydown", (event) => {
  getSec = new Date().getSeconds();

  if (!keyCodes.includes(event.key)) {
    alert("Not US Layout");
  }
  if (event.key == trainingText.innerText[count]) {
    event.key == " " ? allKeysSum++ : allKeysSum;
    console.log(allKeysSum, getSec);
    typingSpeed.innerText = `Speed: ${Math.ceil(
      allKeysSum / (getSec / 60)
    )} wps`;
    //Changing the color of training text if it is typed right
    trainingText.innerHTML =
      "<span style = 'color: green'>" +
      trainingText.innerText.slice(0, inputText.value.length + 1) +
      "</span>" +
      trainingText.innerText.slice(inputText.value.length + 1);

    //Changing the color of pressed keys on the virtual keyboard
    for (let i = 0; i < divs.length; i++) {
      if (event.key == divs[i].innerText) {
        divs[i].style.backgroundColor = "red";
        divs[i].style.color = "white";
        divs[i].style.borderColor = "gray";
      }
    }
    inputText.value += event.key;
    count++;
  }

  //Counting mistakes
  else if (event.key != trainingText.innerText[count]) {
    mistakesCount++;
    mistakesPlace.innerText = `Mistakes: ${mistakesCount}`;
  }

  //The results. It should designed better rather than a simple alert box!
  if (trainingText.innerText == inputText.value) {
    alert(`You did it!\nYou have ${mistakesCount} mistakes`);
    location.reload();
  }
  event.preventDefault();
});

//Styles when keys are up
inputText.addEventListener("keyup", (event) => {
  for (let i = 0; i < divs.length; i++) {
    if (event.key == divs[i].innerText) {
      divs[i].style.backgroundColor = "white";
      divs[i].style.color = "black";
      divs[i].style.borderColor = "black";
    }
  }
});

//Clearing input on reload
window.onload = () => (inputText.value = "");
