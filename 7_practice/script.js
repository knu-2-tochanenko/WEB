var books = [
    { name: 'Bjarne Stroustrup : The C++ Programming Language', price: 1100 },
    { name: 'Дмитрий Жемеров : Kotlin в действии', price: 1006 },
    { name: 'Пол Дейтел : Android для программистов', price: 442 },
    { name: 'Томас Кормен : Алгоритмы. Построение и анализ', price: 1440 },
    { name: 'Apple : Designed by Apple in California', price: 8046 }
];

//  Shopping cart which contains all 
var shoppingCart = [];

var numberOfBooks = document.getElementById('number-of-items');
var list = document.getElementById('books');
var numberOfBooksPrice = document.getElementById('price-result');
var resetButton = document.getElementById('resetButton');
var sendButton = document.getElementById('sendButton');
var totalCount = document.getElementById('total-count');

var postCheck = document.getElementById('post');
var homeCheck = document.getElementById('home');
var anotherCheck = document.getElementById('another');
var wrapping = document.getElementById('wrapping');

var anotherField = document.getElementById('anotherDelivery');
var toHide = document.getElementById('toHide');

var nameField = document.getElementById('nameField');
var adress = document.getElementById('adress');

var check = document.getElementById('check');

var errorString = '<p class="error"> Будь ласка, заповність всі поля! </p>';

window.onload = function() {
    for (var book in books) {
        list.innerHTML += '<option value="' + books[book].name + '">' + books[book].name + ' - ' + books[book].price + ' грн.</option>';
    }
    anotherField.hidden = true;
}

function showField() {
    if (anotherCheck.checked) {
        console.log('YES');
        anotherField.hidden = false;
    }
    else {
        console.log('NO');
        anotherField.hidden = true;
    }
    updateData();
}

function updateData() {
    var booksTotal;
    var wrappingTotal = 0;
    var number = Math.floor(Number(numberOfBooks.value));
    numberOfBooks.value = number;

    var res = books[list.selectedIndex].price * number;
    numberOfBooksPrice.innerHTML = res;
    booksTotal = res;

    var delivery = 0;

    if (postCheck.checked) {
        res += 30;
        delivery = 30;
    }
    if (homeCheck.checked) {
        res += 160;
        delivery = 160;
    }
    if (anotherCheck.checked) {
        delivery = res * 0.05;
        res *= 1.05;
    }
    if (wrapping.checked) {
        wrappingTotal = res * .2;
        res *= 1.2;
    }

    res = res.toFixed(2);
    booksTotal = booksTotal.toFixed(2);
    wrappingTotal = wrappingTotal.toFixed(2);

    totalCount.innerHTML = res;

    return new Array(booksTotal, wrappingTotal, res, delivery);
}

list.addEventListener('change', (event) => updateData());

function reset() {
    numberOfBooks.value = 0;
    list.selectedIndex = 0;
    numberOfBooksPrice.innerHTML = 0;
    totalCount.innerHTML = 0;

    nameField.value = '';
    adress.value = '';
    check.innerHTML = '';

    postCheck.checked = true;
    homeCheck.checked = false;
    wrapping.checked = false;
    anotherCheck.checked = false;
    anotherField.value = '';
    anotherField.hidden = true;

    shoppingCart = [];
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

function displayCart() {
    check.innerHTML = '';
    check.appendChild(createElementWithClass('h4', 'Налоговий чек', 'big-text'));

    var totalTotal = 0;
    var resTable = document.createElement('table');
    resTable.setAttribute('border', '0');

    for (var i = 0 ; i < shoppingCart.length; i++) {
        resTable.appendChild(appendTr('<b>Назва товару:</b>', shoppingCart[i].book_));
        resTable.appendChild(appendTr('<b>Кількість товару:</b>', shoppingCart[i].count_));
        resTable.appendChild(appendTr('<b>Спосіб доставки:</b>', shoppingCart[i].delivery_));
        resTable.appendChild(appendTr('<b>Ім\'я замовника</b>', shoppingCart[i].name_));
        resTable.appendChild(appendTr('<b>Адреса замовника:</b>', shoppingCart[i].adress_));

        resTable.appendChild(appendTr('<b>Вартість товару:</b>', shoppingCart[i].bookCost + ' грн.'));
        resTable.appendChild(appendTr('<b>Вартість доставки:</b>', shoppingCart[i].deliverCost + ' грн.'));
        if (wrapping.checked)
            resTable.appendChild(appendTr('<b>Вартість упаковки:</b>', shoppingCart[i].wrappingCost + ' грн.'));
        resTable.appendChild(appendTr('<b>Загальна вартість поточного замовлення:</b>', '<b>' + shoppingCart[i].totalCost + ' грн.</b>'));
        totalTotal = Number(totalTotal) + Number(shoppingCart[i].totalCost);
        resTable.appendChild(appendTr('-------------------------------------------------', '--------------------------'));
    }
    totalTotal = totalTotal.toFixed(2);
    resTable.appendChild(appendTr('<h3>Загальна вартість замовлень:</h3>', '<h3>' + totalTotal + ' грн.</h3>'));
    check.appendChild(resTable);
}

function submit() {
    var nameString = nameField.value;
    var adressString = adress.value;

    if (nameString == '' || adressString == '' || numberOfBooks.value == '0')
        check.innerHTML = errorString;
    else {
        var results = updateData();
        var booksTotal = results[0];
        var wrappingTotal = results[1];
        var res = results[2];
        var deliveryValue = results[3];
        deliveryValue = deliveryValue.toFixed(2);

        var deliveryName;
        if (postCheck.checked)
            deliveryName = 'Поштою';
        if (homeCheck.checked)
            deliveryName = 'На дом';
        else
            deliveryName = anotherField.value;
        
        shoppingCart.push({
            book_: books[list.selectedIndex].name,
            count_: numberOfBooks.value,
            delivery_: deliveryName,
            name_: nameString,
            adress_: adressString,
            bookCost: booksTotal,
            deliverCost: deliveryValue,
            wrappingCost: wrappingTotal,
            totalCost: res
        });
        displayCart();
    }

}