import './header.css'
import { products } from '../../products';


const promotion = [
  {
      id:0,
      promoo: "Sign up and get 20% off to your first order.",
      key:"Sign Up Now",
      key_action:"https://google.com"
  }
]


export const header = () => {
    const header = document.createElement("header");
    header.innerHTML = `
    <!--header-->
    <header>
      <div class="container">
        
          <!--promo nav-->
          <div class="promo">
            
          </div>
          <nav>
            <img class="menuicon" src="/public/menuicon.png" alt="menuicon">
            <a href="home"><img class="logo" src="/public/SHOP.CO.png" alt="logo"></a>
          <ul class="sidenav">
            <li><img class="navcloseicon" src="/public/xicon.png" alt="close-icon"></li>
            <li><div class="navshop-box">
              <div class="shop-btn">
                <p>Shop</p>
                  <img src="/public/downarrow.png" alt="shopbtn-icon">
              </div>
              <div class="shop-list">
                <a class="shop-products">Casual</a>
                <a href="#">Formal</a>
                <a href="#">Party</a>
                <a href="#">Gym</a>
              </div>
              </div></li>
            <li><a id="on-sale">On Sale</a></li>
            <li><a id="new-arrival">New Arrivals</a></li>
            <li><a id="single-prduct"> Single Product</a></li>
          </ul>
          <div class="search-box">
            <img src="/public/search.png" alt="search-icon">
            <input type="text" name="search" class="search" placeholder="Search for products" >
            <div class="searchresult">
              <!--
              <div class="searchproduct">
                <a href="#">
                  <img src="/public/skinyjenns.png">
                  <div class="searchprodetaila">
                    <p>t-shirt</p>
                    <span>10$</span>
                  </div>

                </a>
              </div>
              <div class="searchproduct">
                <a href="#">
                  <img src="/public/skinyjenns.png">
                  <div class="searchprodetaila">
                    <p>t-shirt</p>
                    <span>10$</span>
                  </div>

                </a>
              </div>
              <div class="searchproduct">
                <a href="#">
                  <img src="/public/skinyjenns.png">
                  <div class="searchprodetaila">
                    <p>t-shirt</p>
                    <span>10$</span>
                  </div>

                </a>
              </div>
              <div class="searchproduct">
                <a href="#">
                  <img src="/public/skinyjenns.png">
                  <div class="searchprodetaila">
                    <p>t-shirt</p>
                    <span>10$</span>
                  </div>
                </a>
              </div>
              <div class="searchproduct">
                <a href="#">
                  <img src="/public/skinyjenns.png">
                  <div class="searchprodetaila">
                    <p>t-shirt</p>
                    <span>10$</span>
                  </div>
                </a>
              </div>
              <div class="searchproduct">
                <a href="#">
                  <img src="/public/skinyjenns.png">
                  <div class="searchprodetaila">
                    <p>t-shirt</p>
                    <span>10$</span>
                  </div>
                </a>
              </div>
            -->
            </div>
          </div>
          <div class="header-icons">
            <div  class="icon">
              <a id="cart">
                <img  src="/public/cart.png" alt="chart-icon">
                <span class="cartcount">0</span>
              </a>
            </div>
            <div class="icon">
              <a href="#">
                <img src="/public/profile.png" alt="profile-icon">
              </a>
            </div>
          </div>
          </nav>
      
    </header>
    `;
    const navPromo =header.querySelector(".promo");

//test if there is promotion
const promotionValue= promotion[0].promoo ? `
<p>
${promotion[0].promoo} <a href="${promotion[0].key_action}">
${promotion[0].key}</a></p>
` : `${navPromo.style.display= "none"}`;


//promo component

navPromo.innerHTML =`
<div class="text">
            ${promotionValue}
            </div>
            <img class="closeicon" src="/public/xicon.png" alt="close-icon">
`


//close promo by icon//
const closePromo= header.querySelector('.closeicon');

closePromo.addEventListener("click", () => {
  navPromo.style.display= "none";
});

// navshop-box
    const shopBtn = header.querySelector(".shop-btn");
    const shopList = header.querySelector(".shop-list");
    //console.log(shopBtn);

    shopBtn.addEventListener("click", () => {
      shopList.classList.toggle("active");
    });
    //side nav in responsive
const menuicon =header.querySelector(".menuicon");
const navcloseicon =header.querySelector(".navcloseicon");
const sidenav =header.querySelector(".sidenav");
navcloseicon.addEventListener("click", () => {
  sidenav.style.left = "-250px"
})

menuicon.addEventListener("click", () => {
  sidenav.style.left = "0"
})
    //search through
const searchInput = header.querySelector(".search");
const searchResult = header.querySelector(".searchresult");


function displayRearchResult(searchedproducts) {
  searchResult.innerHTML = searchedproducts.map(product => `
    <div class="searchproduct">
                <a href="#">
                  <img src="${product.productimg}">
                  <div class="searchprodetaila">
                    <p>${product.productname}</p>
                    <div class="price">
                ${product.oldprice ?`
                  <span class="new-price">${product.price}</span>
                  <span class="old-price">${product.oldprice}</span>
                  <span class="discount">-${product.discountper}%</span>
                  ` : 
                  `
                  <span class="new-price">${product.price}</span>
                  `
                }
                </div>
                  </div>

                </a>
              </div>
    `).join("");
}
//displayRearchResult(products);

searchInput.addEventListener("input" , () => {
  searchResult.classList.toggle("active");
  const searchInputValue = searchInput.value.toLowerCase();
  //console.log(searchInputVlue)
  const searchedproducts = products.filter(product => product.productname.toLowerCase().includes(searchInputValue)
);
  displayRearchResult(searchedproducts);
});

    return header;
}










