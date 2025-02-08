let mycircle = document.querySelector(".circle");
let buttonON = document.querySelector(".btn");
let buttonOFF = document.querySelector(".btn1");

const lightON = () => {
  mycircle.style.backgroundColor = "orange";
  mycircle.innerText = "Light ON";
}

const lightOFF = () => {
  mycircle.style.backgroundColor = "skyblue";
  mycircle.innerText = "Light OFF";
}

buttonON.addEventListener("click", lightON);
buttonOFF.addEventListener("click", lightOFF);