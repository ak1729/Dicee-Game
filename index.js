var randomvariable1=Math.random()*(5);
randomvariable1=Math.floor(randomvariable1)+1;
var randomDice1="dice"+randomvariable1+".png";
var imge1="images/"+randomDice1;
document.querySelectorAll("img")[0].setAttribute("src", imge1);

var randomvariable2=Math.random()*(5);
randomvariable2=Math.floor(randomvariable2)+1;
var randomDice2="dice"+randomvariable2+".png";
var imge2="images/"+randomDice2;
document.querySelectorAll("img")[1].setAttribute("src", imge2);

if(randomvariable1===randomvariable2){
    document.querySelector("h1").innerHTML="Draw";
}
else if(randomvariable1>randomvariable2){
    document.querySelector("h1").innerHTML="Player 1 Won";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Won";
}