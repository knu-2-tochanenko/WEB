let items = [
    {image: "images/iphonexs.png", price: 1199, name: "iPhone Xs"},
    {image: "images/iphonexr.png", price: 749, name: "iPhone XR"},
    {image: "images/pixel3.png", price: 989, name: "Pixel 3"},
    {image: "images/galaxys10.jpg", price: 899, name: "Galaxy S10"},
    {image: "images/galaxys10e.jpg", price: 750, name: "Galaxy S10e"},
    {image: "images/iphonese.jpg", price: 449, name: "iPhone SE"},
    {image: "images/iphonex.jpeg", price: 959, name: "iPhone X"},
    {image: "images/iphonexsmax.png", price: 1499, name: "iPhone Xs Max"},
    {image: "images/galaxys10plus.jpg", price: 999, name: "Galaxy S10 Plus"},
    {image: "images/pixel3a.png", price: 399, name: "Pixel 3a"},
    {image: "images/iphone8.png", price: 759, name: "iPhone 8"},
];

let elements = document.getElementById("elements");

function createElementsList() {
    for (let i = 0; i < items.length; i++) {
        console.log(i);
        let div = document.createElement("div");
        div.classList.add("element");

        let img = document.createElement("img");
        img.src = items[i].image;

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