
import '../scrollupbtn/scrollupbtn.css'


export const scrollUpButton = () => {
const scrollUpButton = document.createElement("scrollupbutton");
scrollUpButton.classList.add("scrollup");
scrollUpButton.innerHTML =`
<i class="fa-solid fa-arrow-up"></i>
`;
let closescrollup = document.createElement("div");
closescrollup.classList.add("x-icon")
closescrollup.innerHTML =`
<i class="fa-solid fa-xmark"></i>
`;
document.body.appendChild(closescrollup);

window.onscroll = function scrollUp(){
    if(window.scrollY >= 100){
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
  });
  closescrollup.addEventListener("mouseover", () => {
    closescrollup.classList.add("active")
  });
  closescrollup.addEventListener("click",()=> {
    scrollUpButton.classList.remove("active")
    closescrollup.classList.remove("active")
  });
return scrollUpButton;
}
