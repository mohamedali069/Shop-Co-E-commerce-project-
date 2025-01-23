import '../shoproducts/shopproducts.css'
import { products } from "../../products";


const shopproductssection = () => {
    const shopproductssection = document.createElement ("shopproductssection");
    shopproductssection.innerHTML = `
    <section id="shop-products">
        <div class="container">
        <div class="line"></div>
        <div class="pagetitles">
            <span>Home</span> 
            <img src="/public/Vector (21).png" alt="icon">
            <span>Casual</span>
        </div>
        <div class="productshop">
            <div class="products-filters">
                <div class="filters-head main">
                <h2>Filters</h2>
                <img class="hidefilters" src="/public/Vector (26).png" alt="icon">
                </div>
                <div class="filterby">
                    <div class="filtersbytype">
                        <div class="type">
                            <p>T-shirts</p>
                            <img src="/public/Vector (21).png" alt="icon">
                        </div>
                        <div class="type">
                            <p>shorts</p>
                            <img src="/public/Vector (21).png" alt="icon">
                        </div>
                        <div class="type">
                            <p>shirts</p>
                            <img src="/public/Vector (21).png" alt="icon">
                        </div>
                        <div class="type">
                            <p>hoodie</p>
                            <img src="/public/Vector (21).png" alt="icon">
                                    </div>
                        <div class="type">
                            <p>jeans</p>
                            <img src="/public/Vector (21).png" alt="icon">
                        </div>
                    </div>
                    <hr>
                    <div class="filterbyprice">
                    <div class="filters-head">
                    <h2>Price</h2>
                    <img src="/public/Vector (27).png" alt="icon">
                    </div>
                    <div class="range-slider">
                        <div class="range">
                        <input class="min-input" type="range"  value="50" min="1" max="500">
                        <input class="max-input" type="range" value="200" min="1" max="500">
                        <div class="slider">
                        <div class="progress"></div>
                        </div>
                    </div>
                    <span>$ <input class="min-price" type="number" value="50" min="1" max="500"></span>
                    <span>$ <input class="max-price" type="number" value="200" min="1" max="500"></span>
                    </div>
                    </div>
                    <hr>
            <div class="filterbycolor">
                <div class="filters-head">
                <h2>Color</h2>
                <img src="/public/Vector (27).png" alt="icon">
                </div>
                <div class="option">
                <input type="radio" name="colors" checked id="colors1" />
                <label for="colors1" class="green"></label>
                <input type="radio" name="colors" id="colors2" />
                <label for="colors2" class="red"></label>
                <input type="radio" name="colors" id="colors3" />
                <label for="colors3" class="yellow"></label>
                <input type="radio" name="colors" id="colors4" />
                <label for="colors4" class="orange"></label>
                <input type="radio" name="colors" id="colors5" />
                <label for="colors5" class="whiteblue"></label>
                <input type="radio" name="colors" id="colors6" />
                <label for="colors6" class="blue"></label>
                <input type="radio" name="colors" id="colors7" />
                <label for="colors7" class="purple"></label>
                <input type="radio" name="colors" id="colors8" />
                <label for="colors8" class="pink"></label>
                <input type="radio" name="colors" id="colors9" />
                <label for="colors9" class="white"></label>
                <input type="radio" name="colors" id="colors10" />
                <label for="colors10" class="black"></label>
                </div>
            </div>
            <hr>
            <div class="filterbysize">
                <div class="filters-head">
                <h2>Size</h2>
                <img src="/public/Vector (27).png" alt="icon">
                </div>
                <div class="sizes">
                <div class="size">XX-Small</div>
                <div class="size">x-small</div>
                <div class="size">Small</div>
                <div class="size">Medium</div>
                <div class="size">Large</div>
                <div class="size">x-Large</div>
                <div class="size">XX-Large</div>
                <div class="size">3X-Large</div>
                <div class="size">4X-Large</div>
              </div>
            </div>
            <hr>
            <div class="filterbystyle">
              <div class="filters-head">
                <h2>Dress style</h2>
                <img src="/public/Vector (27).png" alt="icon">
              </div>
              <div class="type">
                <p>casual</p>
                <img src="/public/Vector (21).png" alt="icon">
              </div>
              <div class="type">
                <p>formal</p>
                <img src="/public/Vector (21).png" alt="icon">
              </div>
              <div class="type">
                <p>party</p>
                <img src="/public/Vector (21).png" alt="icon">
              </div>
              <div class="type">
                <p>gym</p>
                <img src="/public/Vector (21).png" alt="icon">
              </div>
            </div>
            
            </div>
            <div class="btns filter-btn">
              <a href="#">Apply Filter</a>
            </div>
          </div>
          <div class="allproducts">
            <div class="shopproductshead">
              <h2>Casual</h2>
              <div class="showingtitle">Showing 1-10 of 100 Products 
                Sort by: 
                <select name="" id="">
                  <option value="">Most Popular</option>
                  <option value="">Most Popular</option>
                  <option value="">Most Popular</option>
                  <option value="">Most Popular</option>
                </select>
              </div>
            </div>
            <div class="new-products">
              
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
    products.forEach(product => { 
        shopproductssection .querySelector(".new-products").innerHTML +=`
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
        });
        //zizes
const choosensize = shopproductssection.getElementsByClassName("size");

for (let i = 0; i < choosensize.length; i++) {
  choosensize[i].onclick = function () {
   
    for (let i = 0; i < choosensize.length; i++) {
      choosensize[i].classList.remove("active");
    }
    choosensize[i].classList.add("active");
  };
}
        // price range

const slider = shopproductssection.querySelector(".range-slider");
const progress = slider.querySelector(".progress");
const minPriceInput = slider.querySelector(".min-price");
const maxPriceInput = slider.querySelector(".max-price");
const minInput = slider.querySelector(".min-input");
const maxInput = slider.querySelector(".max-input");

minInput.addEventListener("input", () => {
  if (parseInt(minInput.value) >= parseInt(maxInput.value)) {
    maxInput.value = minInput.value;
  }
  updateProgress();
});

maxInput.addEventListener("input", () => {
  if (parseInt(maxInput.value) <= parseInt(minInput.value)) {
    minInput.value = maxInput.value;
  }
  updateProgress();
});
const updateProgress = () => {
  const minValue = parseInt(minInput.value);
  const maxValue = parseInt(maxInput.value);

  const range = maxInput.max - minInput.min;
  const valueRange = maxValue - minValue;
  const width = (valueRange / range) * 100;
  const minOffset = ((minValue - minInput.min) / range) * 100;

  progress.style.width = width + "%";
  progress.style.left = minOffset + "%";

  
  minPriceInput.value = minValue;
  maxPriceInput.value = maxValue;
};
const updateRange = (event) => {
  const input = event.target;

  let min = parseInt(minPriceInput.value);
  let max = parseInt(maxPriceInput.value);

  if (input === minPriceInput && min > max) {
    max = min;
    maxPriceInput.value = max;
  } else if (input === maxPriceInput && max < min) {
    min = max;
    minPriceInput.value = min;
  }

  minInput.value = min;
  maxInput.value = max;

  updateProgress();
};

minPriceInput.addEventListener("input", updateRange);
maxPriceInput.addEventListener("input", updateRange);

    //hide filters

const hideFilters = shopproductssection.querySelector(".hidefilters");
const filtersection = shopproductssection.querySelector(".filterby");

hideFilters.addEventListener("click", () => {
  filtersection.classList.toggle("hide");
})


    return shopproductssection;
}



export const shopproductspage = () => {
    const shopproductspage =document.createElement("shopproductspage");
    shopproductspage.appendChild(shopproductssection());
    return shopproductspage;
}