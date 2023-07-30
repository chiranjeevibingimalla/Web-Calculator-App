let screen = document.getElementById("display");
let currentInput = "";
let result = 0;
// let operator = "";

function clearDisplay(){
    screen.value = "";
    currentInput = "";
    result = 0;
    operator = "";
}

function appendOperator(value){
    if (currentInput !== ""){
        // operator = value;
        currentInput += ` ${value} `;
        screen.value = currentInput;
    }
    
}

function appendDigit(value){
    currentInput += value;
    screen.value = currentInput;
}

function deleteDigit(){
    currentInput = currentInput.slice(0,-1);
    screen.value = currentInput;
}

function calculate(){
    const exp = currentInput.split(" ");
    const num1 = parseInt(exp[0]);
    const  op = exp[1];
    const num2 = parseInt(exp[2]);

    if (!op || isNaN(num1) || isNaN(num2)){
        return;
    }

    switch (op){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/": 
            result = num1 / num2;
            break;
        default:
            break;

    }
    screen.value = result;
    currentInput = result.toString();
}