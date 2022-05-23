
let data = JSON.parse(localStorage.getItem('products'));

for (let i = 0; i < data.length; i++) {

    let div = document.createElement('div');
    div.setAttribute('class', 'productDiv');

    let img = document.createElement('img');
    img.src = data[i].image;

    let type = document.createElement('h3');
    type.innerText = data[i].type;

    let desc = document.createElement('p');
    desc.innerText = data[i].desc;

    let price = document.createElement('h5');
    price.innerText = data[i].price;

    //To remove specific products
    let removeBtn = document.createElement('button');
    removeBtn.setAttribute("id", "remove_product");
    removeBtn.innerText = "Remove";
    removeBtn.style.cursor = "pointer";

    div.append(img, type, desc, price, removeBtn);

    let allProducts = document.querySelector('#all_products');

    allProducts.append(div);

}

//To remove specific products
document.querySelector('#remove_product').addEventListener('click', removeFunc);

function removeFunc() {
    let div = document.querySelector('.productDiv').innerHTML = null;
}


//"Add More Button" redirects to "Index.html"
function toIndex() {
    window.location.href = "index.html";
}