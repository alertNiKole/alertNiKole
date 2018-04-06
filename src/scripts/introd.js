let selectWord = document.querySelector("#wordFlash");

let colors = [
    "#ff4b82",
    "#8b084b",
    "#6f19f9",
    "#6ebffd",
    "#02ff00",
    "#02ff99",
    "#fbff00",
    "#6ebffd"
];

let colors2 = [
    "#e30bab",
    "#e30b47",
    "#990be3",
    "#220be3",
    "#0bd0e3",
    "#0be393",
    "#0fe30b",
    "#b8e30b",
    "#e3780b",
    "#e30b0b"
];


let words = [
    "Understand()", 
    "Listen()", 
    "Meet()",
     "Know()", 
     "Learn()", 
     "Connect()", 
     "Develop()", 
     "Read()",  
     "HireMe()"
    ]

//inal else = "HireMe()"

let rng = ((max) =>{
    return Math.floor(Math.random() * Math.floor(max))
}); //used numerous times

/*
function wordFlash (rng(words.length//rng(colors.length)  -->> select a random of the total number OR do a for each in
*/

//update the rng and do color rbg set first
/*
let select = rng(words.length);
let flash = 0;
    for(i = flash; i < words.length; i++) {
        words[select];
        tada (() => {

        }
        tada ( (words[select) => {
            if (words[select] ==words[select]) {
                    selectWord.innerHTML = words[select];
            } else selectWord.style.color ="red";
                };
            };
        });
            });
        flash ++;
    }  */


function wordFun () {   //Word change 
 let select = rng(words.length);  // number from the array - random
 let flash = 0;  //counter
        //for each count in the array
       /* for(i = flash; i < words.length; i++) { */
            //choose a random word from the list
            words[select];
            //store the value to the new variable
            let revisedWord = words[select];
            selectWord.innerHTML = revisedWord;
            flash ++;
            console.log(words[select], "words");
    };

function colorFunOne () {
//  Color Change One
let colorChange = rng(colors.length);
let illuminate = 0;

for(i = illuminate; i < colors.length; i++) {
    words[colorChange]
   // change color;
    selectWord.style.color = colors[colorChange];
    illuminate ++;
}
console.log(colors[colorChange], "a Tier 1 color");

}

//  Color Change Two
function colorFunTwo() {
    let colorChange2 = rng(colors2.length);
    let illuminate2 = 0;

    for(i = illuminate2; i < colors2.length; i++) {
        words[colorChange2]
    // change color;
        selectWord.style.color = colors[colorChange2];
        illuminate2 ++;
    }

    console.log(colors2[colorChange2], "a Tier 2 color", words[colorChange2]);
}



//Try to compare within the function before ever printing 

      //  i is 0, while i is less than the count of the array, increase i
            //**** Is flash increasing twice???? WTH */
           //      no because i is =flash but flash is not equal to i
 /*       for(i = flash; i < words.length; i++) {
            // create function to house function
            function updateWord (randomWord) {
                if (pick != randomWord) {  //if placeholder does not = randomWord
                    selectWord.innerHTML = words[select];
                    words[select];
                    pick;
                    console.log(pick, "new pick");
                    flash ++;
                    console.log(words[select], "A new word was generated")
                    console.log(words[select], "words were updated", flash);                    
                    randomWord = words[select];
        } else {
            updateWord();
            console.log(words[select], "  words were not updated", flash);
            flash --;
                }
            }
        } 
        updateWord();  //run updateWord
};  */

/*
function wordFun () {
    //Word change 
    let select = rng(words.length);
    let flash = 0;
    let setWord = "Understand";  
    let pick = words[select]; //placeholder





wordFun();  //run WordFun
console.log("wordFun() was run");
 *//*
function altogether () {
    console.log("this and that");
    wordFun();
    console.log("wordFun - this and that");
    if(wordFun().flash() === words[select] ) {
        console.log("Duplicate",wordFun().flash());
    } else {
        colorFunOne();
        console.log("colorFunOne this and that");
        colorFunTwo();
        console.log("colorFunTwo - this and that");
        };
};

altogether();  /*

// one = word change
// goal = don't double up
/*

let select = rng(words.length);  //get rng #
let flash = 0;  //set count
let one = words[select]  //starting rng number


for(i = flash; i < words.length; i++) {
    if (one === word[select] ) {
        selectWord.innerHTML =  words[select];
        flash ++;
        set.one
    } else { console.log ("the rng word was a duplicate, rerunning script", words[select]);
        flash --;
};
};
s
        words[select];
        selectWord.innerHTML = words[select];
        flash ++;
    } 
    console.log(words[select], "words");

/*
let stylez = //custom stuff that needs to be done for each one.
//add class = wordFlashFinal to the end to change color set to yellow
/*.wordFlashFinal {
    font-family: 'Advent Pro', sans-serif;
    letter-spacing: 10px;
    float: right;
    margin-top: 4.5em;
    margin-right: 5em;
    font-size: 5em;
    position: relative;
    z-index: 85;
    color: #fbff0098;
    text-shadow: 2px 3px 2px #fffcfc, 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777;
}
//change text-shadow to remove the blur (clarify)
//text-shadow: 2px 3px 2px #fffcfc, 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777

//remove the italics
//fontStyle: none;

let getPic = document.querySelector("bannerPic");
let movePic = ("onload" () => {

}


//words.length


/*
Script plan

unhide
change to random word in Array
add random color,
tailor style settings if needed (size, position, text-shadow); */

