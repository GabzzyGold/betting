function betting(){
    let bettingStake = Number(document.getElementById("stake").value);
    let bettingNum = Number(document.getElementById("num").value);
    let play = Math.floor(Math.random()*10) + 1;
    let multiply = bettingStake * 2;
    if(bettingNum === play){
        document.getElementById("answer").innerHTML = "Congratulation! You won $" + multiply + ".";
        document.getElementById("answer4").innerHTML = "The number is " + play + ".";
    } else{
        document.getElementById("answer").innerHTML = "Sorry, You Lost .";
        document.getElementById("answer4").innerHTML = "The number is " + play + ".";
    }
}
function betting1(){
    let bettingStake1 = Number(document.getElementById("stake1").value);
    let bettingNum1 = Number(document.getElementById("num1").value);
    let play1 = Math.floor(Math.random()*10) + 1;
    let multiply1 = bettingStake1 * 4;
    if(bettingNum1 === play1){
        document.getElementById("answer1").innerHTML = "Congratulation! You won $" + multiply1 + ".";
        document.getElementById("answer5").innerHTML = "The number is " + play1 + ".";
    } else{
        document.getElementById("answer1").innerHTML = "Sorry, You Lost .";
        document.getElementById("answer5").innerHTML = "The number is " + play1 + ".";
    }
}
function betting2(){
    let bettingStake2 = Number(document.getElementById("stake2").value);
    let bettingNum2 = Number(document.getElementById("num2").value);
    let play2 = Math.floor(Math.random()*10) + 1;
    let multiply2 = bettingStake2 * 8;
    if(bettingNum2 === play2){
        document.getElementById("answer2").innerHTML = "Congratulation! You won $" + multiply2 + ".";
        document.getElementById("answer6").innerHTML = "The number is " + play2 + ".";
    } else{
        document.getElementById("answer2").innerHTML = "Sorry, You Lost .";
        document.getElementById("answer6").innerHTML = "The number is " + play2 + ".";
    }
}
function betting3(){
    let bettingStake3 = Number(document.getElementById("stake3").value);
    let bettingNum3 = Number(document.getElementById("num3").value);
    let play3 = Math.floor(Math.random()*10) + 1;
    let multiply3 = bettingStake3 * 16;
    if(bettingNum3 === play3){
        document.getElementById("answer3").innerHTML = "Congratulation! You won $" + multiply3 + ".";
        document.getElementById("answer7").innerHTML = "The number is " + play3 + ".";
    } else{
        document.getElementById("answer3").innerHTML = "Sorry, You Lost .";
        document.getElementById("answer7").innerHTML = "The number is " + play3 + ".";
    }
}
