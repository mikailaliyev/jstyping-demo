const inputText = document.getElementById("input");
const divs = document.querySelectorAll("div");
const mistakesPlace = document.getElementById("mistakes");
let trainingText = document.getElementById("training-text");
let mistakesCount = 0;
let count = 0;

trainingText.innerText = "hello world";

inputText.addEventListener("keypress", (event) => {
  if (event.key == trainingText.innerText[count]) {
    // trainingText.innerHTML = trainingText.innerHTML.replace(
    //   trainingText.innerText[count],
    //   '<span style="color: red;">' + trainingText.innerText[count] + "</span>"
    // );
    for (let i = 0; i < divs.length; i++) {
      if (event.key == divs[i].innerText) {
        divs[i].style.backgroundColor = "red";
        divs[i].style.color = "white";
        divs[i].style.borderColor = "gray";
      }
    }
    inputText.value += event.key;
    count++;
  } else if (event.key != trainingText.innerText[count]) {
    mistakesCount++;
    mistakesPlace.innerText = `Mistakes: ${mistakesCount}`;
  }
  event.preventDefault();
});

window.onload = () => (inputText.value = "");
