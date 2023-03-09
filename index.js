var randomNumber1 = Math.ceil(Math.random() * 6);

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll(".img1")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.ceil(Math.random() * 6);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll(".img2")[0].setAttribute("src", randomImageSource2);

if( randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else if( randomNumber2 > randomNumber1 ){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw";
}
