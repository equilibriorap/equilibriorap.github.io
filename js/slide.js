var slideIndex = 1;
showDivs(slideIndex);

var myVar = setTimeout(myFunction, 5000);
function plusDivs(n) {
  clearTimeout(myVar);
  showDivs(slideIndex += n);
  myVar = setTimeout(myFunction, 5000);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.opacity= "0";
  }
  x[slideIndex-1].style.opacity = "0.8";
}

function myFunction() {
    plusDivs(1);
}
