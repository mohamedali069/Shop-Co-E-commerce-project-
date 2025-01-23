import '../singleproduct/singleproduct.css'
import { products } from "../../products";
export const singleproductPage = ()=> {
    const singleproductPage = document.createElement("singleproductPage"); 
    singleproductPage.innerHTML = `
    <section id="single product">
      <div class="container">
        <div class="line">
        </div>
        <div class="pagetitles">
            <span>Home</span> 
            <img src="/public/Vector (21).png" alt="icon">
            <span>Shop</span>
            <img src="/public/Vector (21).png" alt="icon">
            <span>Men</span>
            <img src="/public/Vector (21).png" alt="icon">
            <span>T-shirts</span>
        </div>
        <div class="singleproduct">
          <div class="productimages">
            <div class="smallimages">
              <img class="smallimage" src="/public/productimge1.png" alt="smallimage">
              <img class="smallimage" src="/public/productimage2.png" alt="smallimage">
              <img class="smallimage" src="/public/productimage3.png" alt="smallimage">
            </div>
            <img class="bigimage" src="/public/productimge1.png" alt="productimage">
          </div>
          <div class="productdetails">
            <p class="productname">${products[0].productname}</p>
            <div class="product-rating">
              <img src="/public/Star 1.png" alt="rating">
              <img src="/public/Star 1.png" alt="rating">
              <img src="/public/Star 1.png" alt="rating">
              <img src="/public/Star 1.png" alt="rating">
              <img src="/public/Star 5.png" alt="rating">
              <span>4.5/5</span>
            </div>
            <div class="price">
                <span class="new-price">$260</span>
                <span class="old-price">$300</span>
                <span class="discount">$40%</span>
            </div>
            <div class="productdesc">
              <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
            </div>
            <div class="line">
            </div>
            <div class="productcolors">
              <p>Select Colors</p>
              <div class="colors">
                <div class="color"><img src="/public/Vector (22).png" alt="icon"></div>
                <div class="color"></div>
                <div class="color"></div>
              </div>
            </div>
            <div class="line">
            </div>
            <div class="productsizes">
              <p>Choose size</p>
              <div class="sizes">
                <div class="size">small</div>
                <div class="size">medium</div>
                <div class="size">large</div>
                <div class="size">x-large</div>
              </div>
            </div>
            <div class="line">
            </div>
            <div class="addtocart">
              <div class="count">
                <img src="/public/Vector (19).png" alt="icon">
                <span class="number">1</span>
                <img src="/public/Vector (20).png" alt="icon">
              </div>
              <div class="btns addtocart-btn" data-id="${products[0].id}">
            <a href="#">add to cart</a>
          </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    `;
    const bigImage = singleproductPage.querySelector(".bigimage");
    const smallImage = singleproductPage.getElementsByClassName("smallimage")
    for(let i=0 ; i< smallImage.length ;i++){
    smallImage[i].onclick = function () {
    bigImage.src = smallImage[i].src;
}
};
 //zizes
  const choosensize = singleproductPage.getElementsByClassName("size");

  for (let i = 0; i < choosensize.length; i++) {
    choosensize[i].onclick = function () {
    
      for (let i = 0; i < choosensize.length; i++) {
      choosensize[i].classList.remove("active");
    }
    choosensize[i].classList.add("active");
  };
};





  return singleproductPage;
}

