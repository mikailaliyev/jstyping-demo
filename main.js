const inputText = document.getElementById("input");
let trainingText = document.getElementById("training-text");
const resultText = document.getElementById("paragraph");
let count = 0;
trainingText.innerText = "Hello world";
inputText.addEventListener("keypress", (event) => {
  if (event.key == trainingText.innerText[count]) {
    inputText.value += event.key;
    resultText.innerText = inputText.value;
    count++;
    console.log(event.key == " ");
  }
  event.preventDefault();
});

window.onload = () => (inputText.value = "");
