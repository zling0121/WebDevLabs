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

function addYear() {
    var d = new Date();
    var y=d.getFullYear();
    var E=document.getElementById("copyYear");
    E.innerHTML+=y;
    console.log("year added")
}

function showList() {
    var list = document.getElementById("FavList");
    list.style.display = "block"; 
    var button = document.getElementById("SeeMoreBTN");
    button.style.display = "none"; 
}

$(document).ready(function() {
    $("#readMore").click(function() {
        $("#longIntro").show();
        $("#readLess").show();
        $("#readMore").hide();
    });

    $("#readLess").click(function() {
        $("#longIntro").hide();
        $("#readLess").hide();
        $("#readMore").show();
    });
});

function validateForm() {
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");
    var commentField = document.getElementById("comments");
    var validationMessage = document.getElementById("validationMessage");
    var formMessage = document.getElementById("formMessage");
  
    if (!nameField.checkValidity()) {
        formMessage.innerHTML = "Please give me a valid name";
    }
    else if (!emailField.checkValidity()) {
        formMessage.innerHTML = "Please give me a valid email";
    }
    else if (!commentField.checkValidity()) {
        formMessage.innerHTML = "Please comment";
    }
    else {
        validationMessage.innerHTML = "";
    }
  }