
const products = [
    {
        id:0,
        productname:"T-SHIRT WITH TAPE DETAILS",
        rating:"4.3/5",
        price:"$192",
        oldprice:"$240",
        discountper:20,
        category:"casual",
        collection:"new",
        brand:"zara",
        productimg:"/public/skinyjenns.png",
    },
    {
        id:1,
        productname:"SKINNY FIT JEANS",
        rating:"4.5/5",
        price:"$208",
        oldprice:"$260",
        discountper:20,
        category:"casual",
        collection:"new",
        brand:"zara",
        productimg:"/public/skinyjenns.png",
    },
    {
        id:2,
        productname:"CHECKERED SHIRT",
        rating:"4.1/5",
        price:"$208",
        
        category:"casual",
        collection:"new",
        brand:"zara",
        productimg:"/public/5fc84f87eeac1062fbe47f49c192d4f2.png",
    },
    {
        id:3,
        productname:"SLEEVE STRIPED T-SHIRT",
        rating:"4.3/5",
        price:"$130",
        oldprice:"$160",
        discountper:30,
        category:"casual",
        collection:"new",
        brand:"zara",
        productimg:"/public/7cc557f42cf1d489f7cc811856b90e9f.png",
    },
    {
      id:4,
      productname:"T-SHIRT WITH TAPE DETAILS",
      rating:"4.3/5",
      price:"$192",
      oldprice:"$240",
      discountper:20,
      category:"casual",
      collection:"topsellings",
      brand:"zara",
      productimg:"/public/skinyjenns.png",
  },
  {
    id:5,
    productname:"T-SHIRT WITH TAPE DETAILS",
    rating:"4.3/5",
    price:"$192",
    category:"casual",
    collection:"topsellings",
    brand:"zara",
    productimg:"/public/skinyjenns.png",
},
{
  id:6,
  productname:"T-SHIRT WITH TAPE DETAILS",
  rating:"4.3/5",
  price:"$192",
  oldprice:"$240",
  discountper:20,
  category:"casual",
  collection:"topsellings",
  brand:"zara",
  productimg:"/public/skinyjenns.png",
},
{
  id:7,
  productname:"T-SHIRT WITH TAPE DETAILS",
  rating:"4.3/5",
  price:"$192",
  category:"casual",
  collection:"topsellings",
  brand:"zara",
  productimg:"/public/skinyjenns.png",
}
]





//search through
const searchInput = document.getElementById("search");
const searchResult =document.querySelector(".searchresult");


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





//items

const productItem = document.querySelector(".new-products");

const topSellings = document.querySelector(".top-sellings");


//new arrivels
products.forEach(product => {
    productItem.innerHTML +=
`
<div class="new-product">
<div class="product-img">
                <img src="${product.productimg}" alt="product-img">
              </div>
              <div class="product-content">
                <p><a href="../../product.html">${product.productname}</a></p>
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
              </div>

`

})


const topSellingsSectionProducts = products.filter(product => product.collection == "topsellings");
//console.log(topSellingssection)


if(topSellingsSectionProducts.length > 0){
   topSellings.innerHTML =`
    <div class="container">
        <div class="top-selling">
          <h2>Top Selling</h2>
          <div class="new-products">
            
          </div>
          <div class="btns viewall-btn">
            <a href="#">View All</a>
          </div>
        </div>
      </div>
    `
  topSellingsSectionProducts.forEach(product => { 
    topSellings.querySelector(".new-products").innerHTML +=`
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
    `

    })


}


//styling section
/*
const stylingsCategories = [
  {
    id:0,
    categoryname:"casual",
    categorycoverimg:"/public/a32d9a769caba77c08e107a9198dcd6d.png",
    categorylink:"https://google.com"
  },
  {
    id:1,
    categoryname:"Formal",
    categorycoverimg:"/public/8bdbe2c750dcc6e834bf1d98a4a73b29.png",
    categorylink:"https://google.com"
  },
  {
    id:2,
    categoryname:"Party",
    categorycoverimg:"/public/82cd85a823c989c1c8631bd976e2cbfb.png",
    categorylink:"https://google.com"
  },
  {
    id:3,
    categoryname:"Gym",
    categorycoverimg:"/public/c17a220fe8bfb1126626f3ab58a761ec.png",
    categorylink:"https://google.com"
  }
]

const stylingSection = document.getElementById("stylings");

if(stylingsCategories.length > 0){
  stylingSection.innerHTML = `
<div class="container">
        <div class="stylings">
          <h2>BROWSE BY DRESS STYLE</h2>
          <div class="stylings-cat">
            
          </div>
        </div>
      </div>
`
  stylingSection.querySelector(".stylings-cat").innerHTML = `
  <div class="row">
              <div class="casual" >
                
                <img src="${category.categorycoverimg}" alt="styleimage">
              
                <a href="#">${category.categoryname}</a>
              </div>
              <div class="formal" >
                
                <img src="/public/8bdbe2c750dcc6e834bf1d98a4a73b29.png" alt="styleimage">
              
                <a href="#">Formal</a>
              </div>
            </div>
            <div class="row">
              <div class="party" >
                
                <img src="/public/82cd85a823c989c1c8631bd976e2cbfb.png" alt="styleimage">
              
                <a href="#">Party</a>
              </div>
              <div class="gym" >
                
                <img src="/public/c17a220fe8bfb1126626f3ab58a761ec.png" alt="styleimage">
              
                <a href="#">Gym</a>
              </div>
            </div>
  
  
  `

}
*/