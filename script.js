var walk = document.getElementById("walk");
var counterLeft = 0, direct = false;

window.setInterval( function() {
var width = window.innerWidth
  if (counterLeft > width - 320 && direct === false) {
    direct = true;
    walk.style.transform = "scaleX(-1)"
  }
  if (counterLeft === 0 && direct === true) {
    direct = false;
    walk.style.transform = "scaleX(1)"
  }
  if (direct === false) {
    counterLeft += 2;
    walk.style.marginLeft = counterLeft + "px";
  }
  if (direct === true) {
    counterLeft = counterLeft - 2;
    walk.style.marginLeft = counterLeft + "px";
  }
}, 20);
