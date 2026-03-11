document.getElementById("elzero");
document.getElementsByClassName("element")[0];
document.getElementsByName("js")[0];
document.getElementsByTagName("div")[0];
document.querySelector(".element");
document.querySelector("#elzero");
document.querySelector("div");
document.querySelector("[name = 'js']");
document.querySelectorAll("#elzero")[0];
document.querySelectorAll(".element")[0];
document.querySelectorAll("div")[0];
document.querySelectorAll("[name ='js']")[0];
window.elzero;



document.querySelectorAll("img").forEach(function(img){
    img.src ="https://elzero.org/wp-content/themes/elzero/imgs/logo.png"; 
    img.alt="Elzero Logo";
});


const dollarInput = document.querySelector('[name="dollar"]');
const resultDiv = document.querySelector(".result");
dollarInput.addEventListener("input", function () {
    let usdValue = dollarInput.value || 0;
    let egpValue = usdValue * 15.6;
    resultDiv.innerHTML = `${usdValue} USD Dollar = ${egpValue.toFixed(2)} Egyptian Pound`;
});


let firstDiv = document.querySelector(".one");
let secondDiv = document.querySelector(".two");

let firstDivTitle = firstDiv.title ;
let secondDivText = secondDiv.innerHTML ;
 
firstDiv.title = secondDiv.title ;
firstDiv.innerHTML = secondDiv.innerHTML ;
 
secondDiv.title = firstDivTitle;
secondDiv.innerHTML = firstDivText + " " + secondDiv.attributes.length;