randomnumber1=Math.floor((Math.random() * 6) + 1);
randomnumber2=Math.floor((Math.random() * 6) + 1);
source1=document.querySelectorAll("img")[0];
source1.setAttribute("src","images/"+"dice"+randomnumber1+".png");

source2=document.querySelectorAll("img")[1];
source2.setAttribute("src","images/"+"dice"+randomnumber2+".png");

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else{
  document.querySelector("h1").innerHTML="DRAW";
}
