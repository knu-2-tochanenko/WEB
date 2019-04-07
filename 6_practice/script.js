// In wrapping paper : +20%

// Название товара, количество, цена, стоимость доставки, ну крч подробное все

// Відновити початкові значення полів - все очистити. input type="reset"
var books = [
    { name: 'Bjarne Stroustrup : The C++ Programming Language', price: 1100 },
    { name: 'Дмитрий Жемеров : Kotlin в действии', price: 1006 },
    { name: 'Пол Дейтел : Android для программистов', price: 442 },
    { name: 'Томас Кормен : Алгоритмы. Построение и анализ', price: 1440 },
    { name: 'Apple : Designed by Apple in California', price: 8046 }
];

var numberOfBooks = document.getElementById('number-of-items');
var list = document.getElementById('books');
var numberOfBooksPrice = document.getElementById('price-result');
var resetButton = document.getElementById('resetButton');
var sendButton = document.getElementById('sendButton');
var totalCount = document.getElementById('total-count');

var postCheck = document.getElementById('post');
var homeCheck = document.getElementById('home');
var wrapping = document.getElementById('wrapping');

var nameField = document.getElementById('nameField');
var adress = document.getElementById('adress');

var check = document.getElementById('check');

var errorString = '<p class="error"> Будь ласка, заповність всі поля! </p>';

window.onload = function() {
    for (var book in books) {
        list.innerHTML += '<option value="' + books[book].name + '">' + books[book].name + ' - ' + books[book].price + ' грн.</option>';
    }
}

function updateData() {
    var booksTotal;
    var wrappingTotal = 0;
    var number = Math.floor(Number(numberOfBooks.value));
    numberOfBooks.value = number;
    
    var res = books[list.selectedIndex].price * number;
    numberOfBooksPrice.innerHTML = res;
    booksTotal = res;

    if (wrapping.checked) {
        wrappingTotal = res * .2;
        res *= 1.2;
    }
    if (postCheck.checked)
        res += 30;
    if (homeCheck.checked)
        res += 160;

    res = res.toFixed(2);
    booksTotal = booksTotal.toFixed(2);
    wrappingTotal = wrappingTotal.toFixed(2);

    totalCount.innerHTML = res;

    return new Array(booksTotal, wrappingTotal, res);
}

list.addEventListener('change', (event) => updateData());

function reset() {
    numberOfBooks.value = 0;
    list.selectedIndex = 0;
    numberOfBooksPrice.innerHTML = 0;
    totalCount.innerHTML = 0;

    nameField.value = '';
    adress.value = '';

    postCheck.checked = true;
    homeCheck.checked = false;
    wrapping.checked = false;
}

//  This function returns new row which contains new two cells
function appendTr(first, second) {
    var newTr = document.createElement('tr');
    var newTd = document.createElement('td');
    newTd.innerHTML = first;
    newTr.appendChild(newTd);
    newTd = document.createElement('td');
    newTd.innerHTML = second;
    newTr.appendChild(newTd);
    return newTr;
}

function createElementWithClass(tagName, tagHTML, tagClass) {
    var newElement = document.createElement(tagName);
    newElement.classList.add(tagClass);
    newElement.innerHTML = tagHTML;
    return newElement;
}

function submit() {
    var nameString = nameField.value;
    var adressString = adress.value;

    if (nameString == '' || adressString == '' || numberOfBooks.value == '0')
        check.innerHTML = errorString;
    else {
        check.innerHTML = '';
        
        var results = updateData();
        var booksTotal = results[0];
        var wrappingTotal = results[1];
        var res = results[2];

        check.appendChild(createElementWithClass('h4', 'Налоговий чек', 'big-text'));
        
        var resTable = document.createElement('table');
        resTable.setAttribute('border', '0');

        resTable.appendChild(appendTr('<b>Назва товару:</b>', books[list.selectedIndex].name));
        resTable.appendChild(appendTr('<b>Кількість товару:</b>', numberOfBooks.value));
        resTable.appendChild(appendTr('<b>Спосіб доставки:</b>', postCheck.checked == false ? 'На дом' : 'Поштою'));
        resTable.appendChild(appendTr('<b>Ім\'я заповника</b>', nameString));
        resTable.appendChild(appendTr('<b>Адреса замовника:</b>', adressString));

        resTable.appendChild(appendTr('<b>Вартість товару:</b>', booksTotal + ' грн.'));
        resTable.appendChild(appendTr('<b>Вартість доставки:</b>', postCheck.checked == false ? '160 грн.' : '30 грн.'));
        if (wrapping.checked)
            resTable.appendChild(appendTr('<b>Вартість упаковки:</b>', wrappingTotal + ' грн.'));
        resTable.appendChild(appendTr('<h3>Загальна вартість замовлення:</h3>', '<h3>' + res + ' грн.</h3>'));
        
        check.appendChild(resTable);
    }
}