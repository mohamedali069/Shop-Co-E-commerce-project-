
import { products } from"../../products";



    const onsalesec = () => {
    const onsalesec = document.createElement("onsalesec");
    const onsalesecProducts = products.filter(product => product.oldprice);

//console.log( onsalesecProducts);

if(onsalesecProducts.length > 0){
    onsalesec.innerHTML =`
    <div class="container">
        <div class="new-arrival">
          <h2>On Sale</h2>
          <div class="new-products">
            
          </div>
          <div class="btns viewall-btn">
            <a href="#">View All</a>
          </div>
        </div>
      </div>
    `
    onsalesecProducts.forEach(product => { 
        onsalesec.querySelector(".new-products").innerHTML +=`
    <div class="new-product">
      <div class="product-img">
        <img src="${product.productimg}" alt="product-img">
      </div>
        <div class="product-content">
          <p><a href="#">${product.productname}</a></p>
            <div class="product-rating">
              <img src="/public/Star 1.png" alt="rating">
              <img src="/public/Star 1.png" alt="rating">
              <img src="/public/Star 1.png" alt="rating">
              <img src="/public/Star 1.png" alt="rating">
              <img src="/public/Star 5.png" alt="rating">
              <span>${product.rating}</span>
            </div>
            <div class="price">
            ${product.oldprice ?`
              <span class="new-price">$${product.price}</span>
              <span class="old-price">$${product.oldprice}</span>
              <span class="discount">-${product.discountper}%</span>
              ` : 
              `
              <span class="new-price">$${product.price}</span>
              `
            }
            </div>
    </div>
    <div class="btns addtocart-btn all" data-id="${product.id}">
            <a>add to cart</a>
          </div>
    `
    })
    }

    return onsalesec;

}


export const onsale = () => {
    const onsalep = document.createElement("onsalep");
    onsalep.appendChild(onsalesec());
    return onsalep
}
