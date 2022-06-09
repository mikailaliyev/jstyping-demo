const inputText = document.getElementById("input");
const divs = document.querySelectorAll("div");
const mistakesPlace = document.getElementById("mistakes");
let trainingText = document.getElementById("training-text");
let mistakesCount = 0;
let count = 0;

//Setting up some training text,
//but it is better to fetch some text from online resources in the future
trainingText.innerText = "hello world";

//Main event listener
inputText.addEventListener("keydown", (event) => {
  if (event.key == trainingText.innerText[count]) {
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
