let values = [];
let display = undefined;

document.addEventListener('DOMContentLoaded', () => {
    display = document.querySelector("#display");
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(element => {
        element.addEventListener('click', button => {
            clickedButton(button.target)
        })
    })
});



const add = function(a, b) {
    return a + b
};

const subtract = function(a, b) {
    return a - b
};

const multiply = function(a, b) {
    return a * b
};

const divide = function(a, b) {
    return a / b
};

const operate = function(a, b, operation) {
    switch (operation){
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "/":
            return divide(a, b)
        case "*":
            return multiply(a, b)
        default: 
            return "ERROR"
    }
}

const clearDisplay = function() {
    display.textContent = 0;
}

const showOnDisplay = function(result) {
    display.textContent = result;
}

const calculateEquation = function() {
    let numbers = "";
    const newArray = [];
    let divide = '/';
    let mult = '*';
    let add = '+';
    let sub = '-';

    // first join values together
    // change ['1', '2', '+', '3', '4'] to ['12', '+', '34']
    for (const element of values) {
        if (Number.isInteger(Number(element))) {
            numbers += element;
        } else {
            newArray.push(numbers);
            if (element !== 'Calc!') {newArray.push(element)};
            numbers = "";
        }
    }
    
    // remove all values that were stored before
    // so as to allow more calculations without previous values
    values.splice(0);

    // using BODMAS (brackets of division, multiplication, addition, and subtraction)
    // find the most important/preceding values
    // then operate on them first and change original array
    while (newArray.includes(divide)) {
        const indexOfOperator = newArray.indexOf(divide);
        const indexOfPreNum = indexOfOperator - 1;
        const indexOfNextNum = indexOfOperator + 1;

        const preNum = newArray[indexOfPreNum];
        const nextNum = newArray[indexOfNextNum];

        const result = operate(Number(preNum), Number(nextNum), divide);
        newArray.splice(indexOfPreNum, 3, result);
    } 

    while (newArray.includes(mult)) {
        const indexOfOperator = newArray.indexOf(mult);
        const indexOfPreNum = indexOfOperator - 1;
        const indexOfNextNum = indexOfOperator + 1;

        const preNum = newArray[indexOfPreNum];
        const nextNum = newArray[indexOfNextNum];

        const result = operate(Number(preNum), Number(nextNum), mult);
        newArray.splice(indexOfPreNum, 3, result);
    } 

    while (newArray.includes(add)) {
        const indexOfOperator = newArray.indexOf(add);
        const indexOfPreNum = indexOfOperator - 1;
        const indexOfNextNum = indexOfOperator + 1;

        const preNum = newArray[indexOfPreNum];
        const nextNum = newArray[indexOfNextNum];

        const result = operate(Number(preNum), Number(nextNum), add);
        newArray.splice(indexOfPreNum, 3, result);
    } 

    while (newArray.includes(sub)) {
        const indexOfOperator = newArray.indexOf(sub);
        const indexOfPreNum = indexOfOperator - 1;
        const indexOfNextNum = indexOfOperator + 1;

        const preNum = newArray[indexOfPreNum];
        const nextNum = newArray[indexOfNextNum];

        const result = operate(Number(preNum), Number(nextNum), sub);
        newArray.splice(indexOfPreNum, 3, result);
    }   

    // return single value
    return newArray;
};

const clickedButton = function(button) {
    const buttonValue = button.textContent;

    showOnDisplay(buttonValue);
    if (buttonValue !== 'CLEAR') {
        values.push(buttonValue);
    }
    
    if (buttonValue === 'CLEAR') {clearDisplay()};
    
    if (buttonValue === 'Calc!') {
        clearDisplay(); 
        let result = calculateEquation();
        showOnDisplay(result);
    };
}



