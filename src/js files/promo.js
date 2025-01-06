const promotion = [
    {
        id:0,
        promoo: "Sign up and get 20% off to your first order.",
        key:"Sign Up Now",
        key_action:"https://google.com"
    }
]


const navPromo =document.querySelector(".promo");

//console.log(promo)
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
const closePromo= document.querySelector('.closeicon');

closePromo.addEventListener("click", () => {
  navPromo.style.display= "none";
});