import './newsletter.css'
export const newsletter = () => {
    const newsletter = document.createElement("newsletter");
    newsletter.innerHTML = `
    <!--subscribtion to newsletter section-->
    <section id="newsletter">
      <div class="container bg">
        <div class="newsletter">
          <div class="sub-text">
            <p>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
          </div>
          <div class="sub-email">
            <div class="email-box">
              <img src="/public/Vector (15).png" alt="icon">
              <input type="email" name="email" id="email" placeholder="Enter your email address">
            </div>
            <button type="submit">Subscribe to Newsletter</button>
          </div>
        </div>
      </div>
    </section>
    `;
    return newsletter;
}