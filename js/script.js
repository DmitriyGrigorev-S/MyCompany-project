menu.onclick = function myFunction() {
  console.log('G');
  var x = document.getElementById('myTopnav');
  
  if (x.className =="topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}