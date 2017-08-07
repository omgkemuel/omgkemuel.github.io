var $main = document.querySelector("main");

var opacity = 0;

window.addEventListener("DOMContentLoaded", function() {
  
  var interval = setInterval(function() {
    opacity += 0.07;
    if (opacity >= 1.0) {
      clearInterval(interval);
    }
    
    $main.style.opacity = opacity;
  }, 100);
  
});