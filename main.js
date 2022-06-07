const inputText = document.getElementById("input");
let trainingText = document.getElementById("training-text");
let count = 0;
trainingText.innerText = "Hello world";


inputText.addEventListener("keypress", (event) => {
  if (event.key == trainingText.innerText[count]) {
    // trainingText.innerHTML = trainingText.innerHTML.replace(
    //   trainingText.innerText[count],
    //   '<span style="color: red;">' + trainingText.innerText[count] + "</span>"
    // );
    inputText.value += event.key;
    count++;
  }
  event.preventDefault();
});

window.onload = () => (inputText.value = "");
