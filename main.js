const inputText = document.getElementById("input");
const divs = document.querySelectorAll("div");
let trainingText = document.getElementById("training-text");
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
  }
  event.preventDefault();
});

window.onload = () => (inputText.value = "");
