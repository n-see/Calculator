let oneBtn = document.getElementById("oneBtn");
let twoBtn = document.getElementById("twoBtn");
let threeBtn = document.getElementById("threeBtn");
let fourBtn = document.getElementById("fourBtn");
let fiveBtn = document.getElementById("fiveBtn");
let sixBtn = document.getElementById("sixBtn");
let sevenBtn = document.getElementById("sevenBtn");
let eightBtn = document.getElementById("eightBtn");
let nineBtn = document.getElementById("nineBtn");
let zeroBtn = document.getElementById("zeroBtn");
let plusBtn = document.getElementById("plusBtn");
let minusBtn = document.getElementById("minusBtn");
let divideBtn = document.getElementById("divideBtn");
let multiplyBtn = document.getElementById("multiplyBtn");
let equalBtn = document.getElementById("equalBtn");
let clearBtn = document.getElementById('clearBtn');


let inputField = document.getElementById("inputField");

let results = document.getElementById("results");

let factA = "";
let factB = "";
let inputFactA;
let inputFactB;
let answer;
let counter = 0;
let plusPress = false;
let minusPress = false;
let multiplyPress = false;
let dividePress = false;


clearBtn.addEventListener("click", function(event){
    factA = "";
    factB = "";
    counter = 0;
    plusPress = false;
    minusPress = false;
    multiplyPress = false;
    dividePress = false;
    Run(factA, factB);
});

plusBtn.addEventListener("click", function(event){
    counter++;
    plusPress = true;
    minusPress = false;
    multiplyPress = false;
    dividePress = false;
    // if(a==""){
    //     inputRun(inputFactA, inputFactB)
    // }

});
minusBtn.addEventListener("click", function(event){
    counter++;
    minusPress = true;
    multiplyPress = false;
    dividePress = false;
    addPress = false;

});
multiplyBtn.addEventListener("click", function(event){
    counter++;
    multiplyPress = true;
    minusPress = false;
    plusPress = false;
    dividePress = false;
});
divideBtn.addEventListener("click", function(event){
    counter++;
    dividePress = true;
    multiplyPress = false;
    minusPress = false;
    plusPress = false;
});
equalBtn.addEventListener("click", function(event){
    counter++;
    calculate(factA, factB);
});

oneBtn.addEventListener("click", function(event){
    if(counter == 0){
        factA = factA + "1";
    } else{
        factB = factB + "1";
    }
    Run(factA, factB);
});
twoBtn.addEventListener("click", function(event){
    if(counter == 0){
        factA = factA + "2";
    } else{
        factB = factB + "2";
    }
    Run(factA, factB);
});
threeBtn.addEventListener("click", function(event){
    if(counter == 0){
        factA = factA + "3";
    } else{
        factB = factB + "3";
    }
    Run(factA, factB);
});
fourBtn.addEventListener("click", function(event){
    if(counter == 0){
        factA = factA + "4";
    } else{
        factB = factB + "4";
    }
    Run(factA, factB);
});
fiveBtn.addEventListener("click", function(event){
    if(counter == 0){
        factA = factA + "5";
    } else{
        factB = factB + "5";
    }
    Run(factA, factB);
});
sixBtn.addEventListener("click", function(event){
    if(counter == 0){
        factA = factA + "6";
    } else{
        factB = factB + "6";
    }
    Run(factA, factB);
});
sevenBtn.addEventListener("click", function(event){
    if(counter == 0){
        factA = factA + "7";
    } else{
        factB = factB + "7";
    }
    Run(factA, factB);
});
eightBtn.addEventListener("click", function(event){
    if(counter == 0){
        factA = factA + "8";
    } else{
        factB = factB + "8";
    }
    Run(factA, factB);
});
nineBtn.addEventListener("click", function(event){
    if(counter == 0){
        factA = factA + "9";
    } else{
        factB = factB + "9";
    }
    Run(factA, factB);
});
zeroBtn.addEventListener("click", function(event){
    if(counter == 0){
        factA = factA + "0";
    } else{
        factB = factB + "0";
    }
    Run(factA, factB);
});


function Run(a, b){
    if(counter == 0){
        results.innerText = a;
    }else if(counter == 2){
        counter == 0;
    }
    else{
        results.innerText = b;
    }
};
// function Run(ia, ib){
//     if(counter == 0){
//         results.innerText = a;
//     }else if(counter == 2){
//         counter == 0;
//     }
//     else{
//         results.innerText = b;
//     }
// };
function calculate(a, b){

    if(plusPress == true){
        answer = Number(a) + Number(b);
    }else if(minusPress == true){
        answer = Number(a) - Number(b);
    }else if(multiplyPress == true){
        answer = Number(a) * Number(b);
    }else if(dividePress == true){
        answer = Number(a) / Number(b);
    }else{
        answer = "No operator inputted"
    }
    // if(a == 0 && b == 0 && Number(a) / Number(b)){
    //     answer = "Cannot divide 0 and 0"
    // }
    if(a == 0 && b ==0 && dividePress == true){
        answer = "Cannot compute";
    }
    results.innerText = answer;
};
