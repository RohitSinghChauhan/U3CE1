//store the products array in localstorage as "products"

document.querySelector('#add_product').addEventListener('click', submitFunc);

function Product(type, desc, price, image) {

    this.type = type;
    this.desc = desc;
    this.price = price;
    this.image = image;

}

let data = JSON.parse(localStorage.getItem('products')) || [];

function submitFunc() {
    event.preventDefault();

    let form = document.querySelector('#products');
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let productsRef = new Product(type, desc, price, image);

    data.push(productsRef);
    localStorage.setItem('products', JSON.stringify(data));

    //After submit input values gets empty again
    document.querySelector("#type").value = null;
    document.querySelector("#desc").value = null;
    document.querySelector("#price").value = null;
    document.querySelector("#image").value = null;
}


//If "Show Products" trigger than page will redirect to "Inventory.html"
document.querySelector('#show_products').addEventListener('click', toInventory);

function toInventory() {
    window.location.href = 'inventory.html';
}