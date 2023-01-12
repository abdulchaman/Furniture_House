const productContainer = document.querySelector(".product-container-box");

// get all products

class Products{
   async getProduct(){
let result = await fetch("products.json");
let data = await result.json();
let product = data.items;
product = product.map((item)=>{
    const {title, price} = item.fields;
    const image = item.fields.image.fields.file.url;
    return {title, price, image};
})
return product;
    }
}

class UI{
    displayProducts(products){
        let result = "";
        products.forEach(product =>{
           
            result += `
            <div class="col-lg-4">
            <div class="product-list-container">
                <div class="product-img">
                    <img src=${product.image} alt="" srcset="">
                </div>
                <div class="product-title">
                    <h3>${product.title}</h3>
                </div>
                <div class="product-price">
                    <h4>$ ${product.price}</h4>
                </div>
            </div>
        </div>`
        })
        productContainer.innerHTML = result;
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    const products = new Products();
    const ui = new UI();
    products.getProduct().then((products)=>{
        console.log(products);
        ui.displayProducts(products)
    })
})