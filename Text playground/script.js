function loadPage() {
    document.getElementById("string-type").innerHTML = typeof("Hello");
    document.getElementById("number-type").innerHTML = typeof(65536);
}

//  Load page context after loading page
window.onload = loadPage;

//  Function to change text in <p> tag
function changeName() {
    document.getElementById("text-item").innerHTML = 'Hello World!';
}

//  Enlarge text
function enlargeText() {
    var textElement = document.getElementById("text-size");
    var style = window.getComputedStyle(textElement, null).getPropertyValue('font-size');
    textElement.style.fontSize = ((parseFloat(style) + 1) + 'px');
}

//  Not enlarge text
function notEnlargeText() {
    var textElement = document.getElementById("text-size");
    var style = window.getComputedStyle(textElement, null).getPropertyValue('font-size');
    var newSize = parseFloat(style);
    if (newSize <= 1) {
        newSize = 1 + 'px';
        window.alert('font-size is too small!');
    }
    textElement.style.fontSize = ((newSize - 1) + 'px');
}

function writeArray() {
    var str = "";
    whatIWant = ['cheese', 'relationship', 'to sleep'];
    for(var i = 0; i < 3; i++) {
        str += whatIWant[i] + '<br>';
    }
    document.getElementById("write-here").innerHTML = str;
}

function hideName() {
    document.getElementById("text-item").style.display = "none"
}

function showName() {
    document.getElementById("text-item").style.display = "block"
}

function calculate() {
    var firstNumber = parseInt(document.getElementById("first-number").value);
    var secondNumber = parseInt(document.getElementById("second-number").value);
    var dropDown = document.getElementById("operation");
    var selectedValue = dropDown[dropDown.selectedIndex].text;
    var res;
    switch (selectedValue) {
    case "+":
        res = firstNumber + secondNumber;
        break;
    case "-":
        res = firstNumber - secondNumber;
        break;
    case "*":
        res = firstNumber * secondNumber;
        break;
    case "/":
        if (secondNumber == 0) {
            window.alert("Can't divide by zero!");
            console.log("Something went wrong in '/' method");
            res = "Try again";
        }
        else
            res = firstNumber / secondNumber;
        break;
    case "!":
        res = 1;
        for (i = 2; i <= firstNumber; i++)
            res *= i;
        break;
    case "%":
        if (secondNumber == 0) {
            window.alert("Can't divide by zero!");
            console.log("Something went wrong in '%' method");
            res = "Try again";
        }
        else
            res = firstNumber % secondNumber;
        break;
    default:
        res = "Try again";
    }
    document.getElementById("res").innerHTML = res;
}