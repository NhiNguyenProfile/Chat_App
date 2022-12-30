// tìm tới thằng có id btnAddChat và thêm sự kiện "click"

let addButton, popUpElement, pingpao, audio;
//DOM
addButton = document.getElementById("btnAddChat");
popUpElement = document.getElementById("popUp");
pingpao = document.getElementById("pingpao");
audio = document.getElementById("audio");

// tham số 1: type
// tham số 2: hành động tương ứng
addButton.addEventListener("click", function () {
  showPopUp();
});

popUpElement.addEventListener("click", function () {
  hidePopUp();
});

function showPopUp() {
  audio.play();
  popUpElement.style.height = "100vh";
  pingpao.style.transform =
    "translateY(-100vh) translateX(40vw) rotate(720deg)";
  pingpao.style.animation = "none";
}

function hidePopUp() {
  popUpElement.style.height = "0";
  pingpao.style.transform = "translateY(0) translateX(0)";
  pingpao.style.animation = "shake 2s infinite ease-in-out";
}
