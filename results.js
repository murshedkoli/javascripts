var bangla = 90;
var english = 80;
var math = 70;
var islam = 60;



if(bangla => 90){

    console.log("A+");

}
else if(bangla > 80){
    console.log("A");
}

else if(bangla > 70){
    console.log("A-");
}

else if(bangla > 60){
    console.log("B");
}

else if(bangla > 50){
    console.log("B-");
}

else if(bangla > 40){
    console.log("C");
}

else if(bangla > 32){
    console.log("C-");
}

else{
    console.log("You are Fail");
}


if(bangla >32 && english > 32 && math > 32 && islam > 32){

    console.log("You are pass the Exam");

}

else {
    console.log("You are fail the Exam");
}

console.log(Date());