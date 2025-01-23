
import './css/index.css'
import './css/style.css'
import {header} from './homecomponents/header/header'
import { Router } from './router'
import { home } from './home';
import { singleproductPage } from './pagescomponents/singleproduct/singleproduct';
import { newsletter } from './homecomponents/newsletter/newsletter';
import { footer } from './homecomponents/footer/footer';
import { cart, cartPage } from './pagescomponents/cart/cart';


 const apptoheader= document.getElementById("apptoheader")
 apptoheader.appendChild(header())

const apptofooter =document.getElementById("apptofooter")
apptofooter.appendChild(newsletter())
apptofooter.appendChild(footer());

const app = document.getElementById('app');
 //app.appendChild(home());
//app.appendChild(header());
//cart()
Router();


const shopLink = document.querySelectorAll(".shop-products");
const onSSaleLink = document.getElementById('on-sale');
const cartLink =  document.getElementById("cart");
const singleproductLink =  document.getElementById("single-prduct");
const newarrivalLink =  document.getElementById("new-arrival");

shopLink.forEach(link => {
  link.addEventListener('click', (e) => {
    
    console.log('test');
    e.preventDefault();
    window.location.hash = '/shop-products';
    Router();
  });
})

  
  
  onSSaleLink.addEventListener('click', (e) => {
    console.log('test');
  
    e.preventDefault();
    window.location.hash = '/on-sale';
    Router();
  });
  
  cartLink.addEventListener('click', (e) => {
    console.log('test');
  
    e.preventDefault();
    window.location.hash = '/cart';
    Router();
  });

  
  singleproductLink.addEventListener('click', (e) => {
    console.log('test');
    e.preventDefault();
    window.location.hash = '/single-product';
    Router();
  });
  newarrivalLink.addEventListener('click', (e) => {
    console.log('test');
    e.preventDefault();
    window.location.hash = '/new-arrival';
    Router();
  });



// document.body.addEventListener('click', (event) => {
//   if (event.target.matches('.productlink')) {
  
//     console.log("testx");
//     const productId = event.target.getAttribute("data-id");
//     console.log(productId)
//     const selectedProduct = products.find(product => product.id == productId);
//     newnew(selectedProduct);
    
//   }
// });

// export const newnew= function (selectedProduct){
//   const singleproductPage = document.createElement("singleproductPage"); 
//   //const newpage = document.getElementById("apps")
//   //newpage.appendChild(singleproductPage)
//     singleproductPage.innerHTML = `
//     <section id="single product">
//       <div class="container">
//         <div class="line">
//         </div>
//         <div class="pagetitles">
//             <span>Home</span> 
//             <img src="/public/Vector (21).png" alt="icon">
//             <span>Shop</span>
//             <img src="/public/Vector (21).png" alt="icon">
//             <span>Men</span>
//             <img src="/public/Vector (21).png" alt="icon">
//             <span>T-shirts</span>
//         </div>
//         <div class="singleproduct">
//           <div class="productimages">
//             <div class="smallimages">
//               <img class="smallimage" src="/public/productimge1.png" alt="smallimage">
//               <img class="smallimage" src="/public/productimage2.png" alt="smallimage">
//               <img class="smallimage" src="/public/productimage3.png" alt="smallimage">
//             </div>
//             <img class="bigimage" src="/public/productimge1.png" alt="productimage">
//           </div>
//           <div class="productdetails">
//             <p class="productname">selectedProduct.productname}</p>
//             <div class="product-rating">
//               <img src="/public/Star 1.png" alt="rating">
//               <img src="/public/Star 1.png" alt="rating">
//               <img src="/public/Star 1.png" alt="rating">
//               <img src="/public/Star 1.png" alt="rating">
//               <img src="/public/Star 5.png" alt="rating">
//               <span>4.5/5</span>
//             </div>
//             <div class="price">
//                 <span class="new-price">$260</span>
//                 <span class="old-price">$300</span>
//                 <span class="discount">$40%</span>
//             </div>
//             <div class="productdesc">
//               <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
//             </div>
//             <div class="line">
//             </div>
//             <div class="productcolors">
//               <p>Select Colors</p>
//               <div class="colors">
//                 <div class="color"><img src="/public/Vector (22).png" alt="icon"></div>
//                 <div class="color"></div>
//                 <div class="color"></div>
//               </div>
//             </div>
//             <div class="line">
//             </div>
//             <div class="productsizes">
//               <p>Choose size</p>
//               <div class="sizes">
//                 <div class="size">small</div>
//                 <div class="size">medium</div>
//                 <div class="size">large</div>
//                 <div class="size">x-large</div>
//               </div>
//             </div>
//             <div class="line">
//             </div>
//             <div class="addtocart">
//               <div class="count">
//                 <img src="/public/Vector (19).png" alt="icon">
//                 <span class="number">1</span>
//                 <img src="/public/Vector (20).png" alt="icon">
//               </div>
//               <div class="btns addtocart-btn" data-id="products[0].id}">
//             <a href="#">add to cart</a>
//           </div>
//             </div>
//         </div>
//         </div>
//     </div>
//     </section>
//     `;
// return newnew()
// }