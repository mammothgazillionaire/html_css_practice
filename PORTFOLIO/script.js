
var openButton = document.querySelector(".toggler");
var closeButton = document.querySelector(".closebtn");

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

openButton.addEventListener("click", openNav);
// closeButton.addEventListener("click", closeNav);
