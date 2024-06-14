//  start mune 
var bar = document.getElementById("bar-mune");
var ulAaa = document.getElementById("ula");
// var navIconX = document.getElementById("nav-icon-x"); لو تبي دير x
isClaced = false;

bar.onclick = function () {
  if (isClaced == false) {
    isClaced = true;
    ulAaa.style.display = "initial";
     } 
     
  else if (isClaced == true) {
    isClaced = false;
    ulAaa.style.display = "none";
  }
};
// 
