// alert("Hey");

var randomnumber1 = Math.floor(Math.random() * 6) + 1;


var randomDiceImage = "dice" + randomnumber1 + ".png";   //dice1 to dice6

var randomImageSource = "images/" + randomDiceImage;    //images/dice1.png till dice6

// document.querySelector(".img1").setAttribute("dice6.png", "randomImageSource");
// document.querySelector(".img2").setAttribute("dice6.png", "randomImageSource");

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomnumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);



if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").textContent = "Player 1 wins";
}
else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").textContent = "Player 2 wins";
}
else {
    document.querySelector("h1").textContent = "Draw";
}