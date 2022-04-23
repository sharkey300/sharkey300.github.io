var username = "Notch";

var skin = "https://minotar.net/skin/" + username;

var img = new Image();
img.src = skin;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

img.onload = function() {
  ctx.drawImage(img, 0, 0);
}

var hat = new Image();
hat.src = "https://sharkey300.github.io/frog-hat.png/";

hat.onload = function() {
  ctx.drawImage(hat, 0, 0);
}
