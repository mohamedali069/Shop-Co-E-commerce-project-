import './footer.css'
export const footer = () => {
    const footer = document.createElement("footer");
    footer.innerHTML = `
    <footer>
      <div class="container">
        <nav class="footer-nav">
          <div class="col col1">
            <img class="logo" src="/public/SHOP.CO.png" alt="logo">
            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div class="social-icons">
              <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-github"></i></a>
          </div>
          </div>
          <div class="col">
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Works</a>
            <a href="#">career</a>
          </div>
          <div class="col">
            <h3>HELP</h3>
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div class="col">
            <h3>FAQ</h3>
            <a href="#">Account</a>
            <a href="#">Manage Deliveries</a>
            <a href="#">Orders</a>
            <a href="#">Payments</a>
          </div>
          <div class="col">
            <h3>Resources</h3>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
        </nav>
        <div class="line">
        </div>
        <div class="copy-right">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div class="payments">
            <div class="payment">
              <img src="/public/Visa.png" alt="icon">
            </div>
            <div class="payment">
              <img src="/public/Mastercard.png" alt="icon">
            </div>
            <div class="payment">
              <img src="/public/Paypal.png" alt="icon">
            </div>
            <div class="payment">
              <img src="/public/ Pay.png" alt="icon">
            </div>
            <div class="payment">
              <img src="/public/G Pay.png" alt="icon">
            </div>
          </div>
        </div>
      </div>
    </footer>
    `;
    return footer;

}