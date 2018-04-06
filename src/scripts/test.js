//Testing random script
let selectWord = document.querySelector("#wordFlash");

let words = [
    "Listen()", 
    "Meet()",
     "Know()", 
     "Learn()", 
     "Connect()", 
     "Develop()", 
     "Read()",  
     "HireMe()"
    ]


let rng = ((max) =>{
        return Math.floor(Math.random() * Math.floor(max))
    }); //used numerous times
    console.log(words[rng(words.length)], "rng");

let randomItem = words[Math.floor(Math.random()*words.length)];

    console.log(randomItem, "random");
    randomItem;
