const add = function(a, b) {
    return a + b
};

const subtract = function(a, b) {
    return a - b
};

const muliply = function(a, b) {
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

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll(".button")
    buttons.forEach(element => {
        element.addEventListener('click', button => {
            console.log(button.target)
        })
    });
});
