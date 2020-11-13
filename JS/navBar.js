function navBarFunction() {
  var x = document.getElementById("myNavBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}