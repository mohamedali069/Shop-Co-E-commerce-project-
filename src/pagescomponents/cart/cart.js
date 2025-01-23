import './cart.css'
import { products } from "../../products";


export const cart = () => {
    const cart = document.createElement("cart");
    cart.innerHTML = `
    <section id="cart">
      <div class="container">
        <div class="linecart">
        </div>
        <div class="pagetitles">
            <span>Home</span> 
            <img src="/public/Vector (21).png" alt="icon">
            <span>T-shirts</span>
        </div>
        <div class="cartcontent">
          <h2>Your cart</h2>
          
          <div class="cartdetails">
            <div class="cartproducts">
              
              
            </div>
            <div class="ordersummary">
              <h2>order Summary</h2>
              <p class="subtotal"></p>
              <p class="cartdiscountt"> Discount (-20%) <span class="cartdiscount"></span></p>
              <p> Delivery Fee <span class="delivery">$15</span></p>
              <p class="carttotal"></p>
              <div class="cartpromo">
                <div class="cartpromoinput">
                  <img src="/public/Vector (24).png" alt="icon">
                  <input type="text" placeholder="Add promo code">
                </div>
                <div class="btns cartapply-btn">
                  <a href="#">Apply</a>
                </div>
              </div>
              <div class="btns checkout-btn">
                <a href="#">Go to Checkout</a>
                <img src="/public/Vector (25).png" alt="icon">
              </div>
            </div>
          </div>
      </div>
    </section>
    `;
    
    document.body.addEventListener('click', (event) => {
      if (event.target.matches('.addtocart-btn')) {
      
        event.target.classList.add("active")
        const productId = event.target.getAttribute("data-id");
        const selectedProduct = products.find(product => product.id == productId);
        addTocart(selectedProduct);
        
      }
    });

    const updateCart= function updateCart(){
      
      const cartbox = JSON.parse(localStorage.getItem('basket')) || []

      const allcart = cart.querySelector(".cartdetails")

      if(cartbox.length == 0){
        //console.log("here")
        allcart.innerHTML = ` 
        <div class="emptycart">
          <h3>Your Cart Is Empty </h3>
          <div class="btns continue-btn">
            <a class="shop-products"> Continue Shopping</a>
          </div>
        </div>
        `
      }else{
        const cartItemscontainer = cart.querySelector(".cartproducts")
        const subTotal = cart.querySelector(".subtotal");
        const caryTotal = cart.querySelector(".carttotal");
        const cartcount = document.body.querySelector(".cartcount");
        const cartDiscount = cart.querySelector(".cartdiscountt");
        const delivery= cart.querySelector(".delivery")
        
     
        let total_price = 0 ;
        let total_count = 0 ;
        let total_discount=0;
        let deliveryvalue = 15;
        let discountper = 0;

  
        cartItemscontainer.innerHTML= '';
  
        
  
        cartbox.forEach((product,index) => {
          if(product.oldprice){
            let total_price_product = product.oldprice * product.quantity
            let discountvalue = (product.oldprice - product.price) * product.quantity
  
                total_discount += discountvalue
                total_price += total_price_product
                discountper = parseInt( (total_discount / total_price ) * 100)
          } else{
             let total_price_product = product.price * product.quantity
                total_price += total_price_product
          }
  
          total_count += product.quantity 
          
  
          subTotal.innerHTML = ` Subtotal <span >$${total_price}</span>`
          caryTotal.innerHTML = `Total<span>$${total_price - total_discount + deliveryvalue }</span>`
          cartDiscount.innerHTML = ` Discount (-${discountper}%) <span class="cartdiscount">-$${total_discount}</span>`
          cartcount.innerHTML = `${total_count }`
          delivery.innerHTML = `$${deliveryvalue}`
  
          cartItemscontainer.innerHTML += `
          <div class="cartproduct">
                  <img class="cartproductimg" src="${product.productimg}" alt="productimage">
                  <div class="product-details">
                    <div class="cartproductdetails">
                      <p class="productname">${product.productname}</p>
                      <p>Size:<span> Large</span></p>
                      <p>color:<span> White</span></p>
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
                    <div class="cartbtns">
                      <img class="delete-items" data-index=${index} src="/public/Vector (23).png" alt="icon">
                      <div class="count">
                        <img class="decrease_quantity" data-index=${index} src="/public/Vector (19).png" alt="icon">
                        <span class="number">${product.quantity}</span>
                        <img class="Increase_quantity" data-index=${index} src="/public/Vector (20).png" alt="icon">
                      </div>
                    </div>
                  </div>
                </div>
          `
          
  
  
        });
      }
      

      const increaseButtons = cart.querySelectorAll(".Increase_quantity")
      const decreaseButtons = cart.querySelectorAll(".decrease_quantity")
      
      increaseButtons.forEach(button => {
        button.addEventListener("click" , (event) =>{
            const itemIndex = event.target.getAttribute("data-index")
            increaseQuantity(itemIndex)
        })
    })


    decreaseButtons.forEach(button => {
        button.addEventListener("click" , (event) =>{
            const itemIndex = event.target.getAttribute("data-index")
            decreaseQuantity(itemIndex)
        })
    })

    function increaseQuantity(index){
      let basket = JSON.parse(localStorage.getItem('basket')) || []
      basket[index].quantity += 1
      localStorage.setItem('basket' , JSON.stringify(basket))
      updateCart()
  }
  
  function decreaseQuantity(index){
      let basket = JSON.parse(localStorage.getItem('basket')) || []
  
      if (basket[index].quantity > 0){
          basket[index].quantity -= 1
          if (basket[index].quantity === 0){
            const removeProduct = basket.splice(index,1)[0]
            localStorage.setItem('basket',JSON.stringify(basket))
            
            updateCart()

          }
      }
      localStorage.setItem('basket' , JSON.stringify(basket))
      updateCart()
  }

  const deleteButtons = cart.querySelectorAll(".delete-items");
  deleteButtons.forEach(button => {
    button.addEventListener("click" , (event) =>{
        const itemIndex = event.target.getAttribute("data-index")
        removeFromcart(itemIndex)
    })
})
  function removeFromcart(index){
    let basket = JSON.parse(localStorage.getItem('basket')) || []
    const removeProduct = basket.splice(index,1)[0]
    localStorage.setItem('basket',JSON.stringify(basket))
    updateCart()
  }


    }

    function addTocart(product){
      //console.log(product)
      let basket = JSON.parse(localStorage.getItem('basket')) || [];
      basket.push({...product, quantity:1})
      localStorage.setItem('basket' , JSON.stringify(basket))
      
      updateCart()
    }

    updateCart()
    return cart;
}




export  const cartPage = ()=> {
  const cartPage = document.createElement("cartpage");
  cartPage.appendChild(cart());
  return cartPage;
  
}