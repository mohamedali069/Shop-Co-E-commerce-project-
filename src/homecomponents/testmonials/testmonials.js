
import './testmonials.css'
export const testmonials = () => {
    const testmonials = document.createElement("testmonials");
    testmonials.innerHTML = `
    <!--testimonials section-->
    <section id="testimonials">
      <div class="container">
        <div class="testimonials-box">
          <div class="test-head">
            <h2>
              OUR HAPPY CUSTOMERS
            </h2>
            <div class="arrow-btns">
              <img class="forward" src="/public/Vector (14).png" alt="">
              <img class="backward" src="/public/Vector (13).png" alt="">
            </div>
          </div>
          <div class="testimonials">
            <div class="test">
              <div class="product-rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
              </div>
              <div class="test-content">
                <div class="test-name">
                  <span>Sara1h M.</span>
                <img src="/public/Vector (12).png" alt="test-icon">
                </div>
                <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi delectus similique assumenda consectetur dolor optio laboriosam harum, quas quaerat?</q>
              </div>
            </div>
            <div class="test">
              <div class="product-rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
              </div>
              <div class="test-content">
                <div class="test-name">
                  <span>Sarah M.</span>
                <img src="/public/Vector (12).png" alt="test-icon">
                </div>
                <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi delectus similique assumenda consectetur dolor optio laboriosam harum, quas quaerat?</q>
              </div>
            </div>
            <div class="test">
              <div class="product-rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
              </div>
              <div class="test-content">
                <div class="test-name">
                  <span>Sarah M.</span>
                <img src="/public/Vector (12).png" alt="test-icon">
                </div>
                <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi delectus similique assumenda consectetur dolor optio laboriosam harum, quas quaerat?</q>
              </div>
            </div>
            <div class="test">
              <div class="product-rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
              </div>
              <div class="test-content">
                <div class="test-name">
                  <span>Sarah M.</span>
                <img src="/public/Vector (12).png" alt="test-icon">
                </div>
                <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi delectus similique assumenda consectetur dolor optio laboriosam harum, quas quaerat?</q>
              </div>
            </div>
            <div class="test">
              <div class="product-rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
                <img src="/public/Star 1.png" alt="rating">
              </div>
              <div class="test-content">
                <div class="test-name">
                  <span>Sarah M.</span>
                <img src="/public/Vector (12).png" alt="test-icon">
                </div>
                <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi delectus similique assumenda consectetur dolor optio laboriosam harum, quas quaerat?</q>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
    `;


//testmonials

const forwardBtn = testmonials.querySelector(".forward");
const backwardBtn = testmonials.querySelector(".backward");
const testslider = testmonials.querySelectorAll(".test");
//console.log(testslider)
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
    return testmonials;
}

/*
//testmonials

const forwardBtn = .querySelector(".forward");
const backwardBtn = testmonials.querySelector(".backward");
const testslider = testmonials.querySelectorAll(".test");
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
 */