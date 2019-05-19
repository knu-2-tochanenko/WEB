let items = [
    {image: "images/iphonexs.png", price: 1199, name: "iPhone Xs", id: 58069},
    {image: "images/iphonexr.png", price: 749, name: "iPhone XR", id: 58070},
    {image: "images/pixel3.png", price: 989, name: "Pixel 3", id: 59550},
    {image: "images/galaxys10.jpg", price: 899, name: "Galaxy S10", id: 59560},
    {image: "images/galaxys10e.jpg", price: 750, name: "Galaxy S10e", id: 59601},
    {image: "images/iphonese.jpg", price: 449, name: "iPhone SE", id: 60023},
    {image: "images/iphonex.jpeg", price: 959, name: "iPhone X", id: 60078},
    {image: "images/iphonexsmax.png", price: 1499, name: "iPhone Xs Max", id: 60156},
    {image: "images/galaxys10plus.jpg", price: 999, name: "Galaxy S10 Plus", id: 61998},
    {image: "images/pixel3a.png", price: 399, name: "Pixel 3a", id: 62554},
    {image: "images/iphone8.png", price: 759, name: "iPhone 8", id: 65485},
];

let elements = document.getElementById("elements");

function createTable() {
    let table = document.createElement("table");
    table.classList.add("pricelist-table");

    let tableHead = document.createElement("tr");
    tableHead.classList.add("table-header");
    let tableId = document.createElement("td");
    tableId.innerHTML = "ID";
    let tableName = document.createElement("td");
    tableName.innerHTML = "Наименование";
    let tablePrice = document.createElement("td");
    tablePrice.innerHTML = "Цена";
    tableHead.appendChild(tableId);
    tableHead.appendChild(tableName);
    tableHead.appendChild(tablePrice);

    table.appendChild(tableHead);

    for (let i = 0; i < items.length; i++) {
        let newTr = document.createElement("tr");

        let newId = document.createElement("td");
        newId.innerHTML = items[i].id;

        let newName = document.createElement("td");
        newName.innerHTML = items[i].name;

        let newPrice = document.createElement("td");
        newPrice.innerHTML = items[i].price;

        newTr.appendChild(newId);
        newTr.appendChild(newName);
        newTr.appendChild(newPrice);

        table.appendChild(newTr);
    }

    elements.appendChild(table);
}

function createElementsList() {
    for (let i = 0; i < items.length; i++) {
        console.log(i);
        let div = document.createElement("div");
        div.classList.add("element");

        let img = document.createElement("img");
        img.src = items[i].image;
        img.alt = items[i].name;

        let name = document.createElement("h2");
        name.classList.add("name-element");
        name.innerHTML = items[i].name;

        let price = document.createElement("h3");
        price.classList.add("price");
        price.innerHTML = items[i].price;

        let shoppingCart = document.createElement("i");
        shoppingCart.classList.add("material-icons");
        shoppingCart.innerHTML = "shopping_cart";

        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(price);
        div.appendChild(shoppingCart);
        elements.appendChild(div);
    }

    let hiddenElement = document.createElement("div");
    hiddenElement.classList.add("element");
    hiddenElement.classList.add("hid");

    elements.appendChild(hiddenElement);
}