const x=5;
const y=7;
const z=x+y;

console.log(z)

const A="Hello ";
const B="world!";
const C= A+B;

console.log(C)

function SumNPrint(x1, x2){
    let x3=x1+x2;
    console.log(x3);
}

SumNPrint(x,y)

SumNPrint(A,B)

if (C.length>z){
    console.log(C);
} else if (C.length<z){
    console.log(z);
} else{
    console.log('good job!');
}

// const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// const L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(a){
//     a.forEach(function(item) {
//         if (item === "Banana") {
//             alert("We found a Banana in the array");
//         }
//     });
// }

// findTheBanana(L1);  
// findTheBanana(L2);


function greetingFunc(){
    let d=new Date();
    let h=d.getHours();
    let greetingMessage = '';

    if (h<12){
        greetingMessage=("Good morning, I am Zoey");
    } else if (h >= 12 && h < 18){
        greetingMessage=("Good afternoon, I am Zoey");
    } else if (h >= 18 && h < 20){
        greetingMessage=("Good evening, I am Zoey");
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)){
        greetingMessage=("Good night, I am Zoey");
    }

    let heading = document.getElementById("greeting");
    if (heading) {
        heading.innerHTML = greetingMessage;
    }
}

if (window.location.href.includes("index.html")) {
    window.onload = greetingFunc; 
} else {
    console.log("Not on index.html page.");
}
