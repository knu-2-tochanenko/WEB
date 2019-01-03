//  Load page context after loading page
window.onload = function() {
    document.getElementById('string-type').innerHTML = typeof('Hello');
    document.getElementById('number-type').innerHTML = typeof(65536);
}

//  Function to change text in <p> tag
document.getElementById('typeItButton').onclick = function() {
    document.getElementById('text-item').innerHTML = 'Hello World!';
}

//  Enlarge text
document.getElementById('enlargeText').onclick = function() {
    var textElement = document.getElementById('text-size');
    var style = window.getComputedStyle(textElement, null).getPropertyValue('font-size');
    textElement.style.fontSize = ((parseFloat(style) + 1) + 'px');
}

//  Not enlarge text
document.getElementById('notEnlargeText').onclick = function() {
    var textElement = document.getElementById('text-size');
    var style = window.getComputedStyle(textElement, null).getPropertyValue('font-size');
    var newSize = parseFloat(style);
    if (newSize <= 1) {
        newSize = 1 + 'px';
        window.alert('font-size is too small!');
    }
    textElement.style.fontSize = ((newSize - 1) + 'px');
}

document.getElementById('writeArray').onclick = function() {
    var str = '';
    whatIWant = ['cheese', 'relationship', 'to sleep'];
    for(var i = 0; i < 3; i++) {
        str += whatIWant[i] + '<br>';
    }
    document.getElementById('write-here').innerHTML = str;
}

dumbValue = 0;

document.getElementById('showHide').onclick = function() {
    if (dumbValue === 1) {
        document.getElementById('text-item').classList.add('is-visible');
        dumbValue = 0;
    }
    else {
        document.getElementById('text-item').classList.remove('is-visible');
        dumbValue = 1;
    }
}

document.getElementById('calculate').onclick = function() {
    var firstNumber = Number(document.getElementById('first-number').value);
    var secondNumber = Number(document.getElementById('second-number').value);
    var dropDown = document.getElementById('operation');
    var selectedValue = dropDown[dropDown.selectedIndex].text;
    var res;
    switch (selectedValue) {
    case '+':
        res = firstNumber + secondNumber;
        break;
    case '-':
        res = firstNumber - secondNumber;
        break;
    case '*':
        res = firstNumber * secondNumber;
        break;
    case '/':
        if (secondNumber == 0) {
            window.alert('Can\'t divide by zero!');
            console.log('Something went wrong in '/' method');
            res = 'Try again';
        }
        else
            res = firstNumber / secondNumber;
        break;
    case '!':
        res = 1;
        for (i = 2; i <= firstNumber; i++)
            res *= i;
        break;
    case '%':
        if (secondNumber == 0) {
            window.alert('Can\'t divide by zero!');
            console.log('Something went wrong in '%' method');
            res = 'Try again';
        }
        else
            res = firstNumber % secondNumber;
        break;
    default:
        res = 'Try again';
    }
    document.getElementById('res').innerHTML = res;
}

document.getElementById('leftShift').onclick = function () {
    var number = Number(document.getElementById('number').textContent);
    var newNumber = number << 1;
    document.getElementById('number').innerHTML = newNumber;
}

document.getElementById('rightShift').onclick = function () {
    var number = Number(document.getElementById('number').textContent);
    var newNumber = 1;
    if (number > 1) newNumber = number >> 1;
    document.getElementById('number').innerHTML = newNumber;
}

document.getElementById('submitNumber').onclick = function() {
    var number = Number(document.getElementById('number-to-shift').value);
    document.getElementById('number').innerHTML = number;
}

themeValue = 0;

document.getElementById('themeButton').onclick = function() {
    if (themeValue == 1) {
        document.getElementById('theme').href = "light.css";
        themeValue = 0;
    } else {
        document.getElementById('theme').href = "dark.css";
        themeValue = 1;
    }
}