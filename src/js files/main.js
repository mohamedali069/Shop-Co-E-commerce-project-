
import '../css/index.css'
import '../css/style.css'
import './components'
import './promo'
import './home'


//scroll up button

let scrollUpButton = document.createElement("div");
let closescrollup = document.createElement("div");
scrollUpButton.classList.add("scrollup");
closescrollup.classList.add("x-icon")
closescrollup.innerHTML =`

<i class="fa-solid fa-xmark"></i>

`

scrollUpButton.innerHTML =`

<i class="fa-solid fa-arrow-up"></i>
`
document.body.appendChild(scrollUpButton);
document.body.appendChild(closescrollup);


closescrollup.addEventListener("click",()=> {
  scrollUpButton.classList.remove("active")
})


window.onscroll = function scrollUp(){
  if(window.scrollY >= 600){
    scrollUpButton.classList.add("active")
    
  }else{
    scrollUpButton.classList.remove("active")
    closescrollup.classList.remove("active")
  }
};


scrollUpButton.onclick = function (){
  window.scrollTo({
    top:0,
  })
}

scrollUpButton.addEventListener("mouseover", () => {
  closescrollup.classList.add("active")
})

/*
scrollUpButton.addEventListener("mouseout", () => {
  closescrollup.classList.remove("active")
});
*/
closescrollup.addEventListener("click",()=> {
  scrollUpButton.classList.remove("active")
  closescrollup.classList.remove("active")
})


/*navshop-box*/

const shopBtn = document.querySelector(".shop-btn");
const shopList = document.querySelector(".shop-list");

shopBtn.addEventListener("click", () => {
  shopList.classList.toggle("active");
})




//side nav in responsive
const menuicon =document.querySelector(".menuicon");
const navcloseicon =document.querySelector(".navcloseicon");
const sidenav =document.querySelector(".sidenav");
navcloseicon.addEventListener("click", () => {
  sidenav.style.left = "-250px"
})

menuicon.addEventListener("click", () => {
  sidenav.style.left = "0"
})
//testmonials

const forwardBtn = document.querySelector(".forward");
const backwardBtn = document.querySelector(".backward");
const testslider = document.querySelectorAll(".test");
console.log(testslider)
let currentIndex = 0;


function updateSlider() {
    testslider.forEach((test, index) => {
      
    
        test.style.transform = `translateX(${-400 * currentIndex}px)`;
      
    });
}


forwardBtn.addEventListener("click", () => {
    if (currentIndex < testslider.length-3) { 
        currentIndex++;
        updateSlider();
    }
});

backwardBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});


