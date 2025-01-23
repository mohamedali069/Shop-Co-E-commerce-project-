import './landing.css'

export const landing = () => {
    const landing = document.createElement("landing");
    landing.innerHTML = `
    <!--landing-->
    <section id="landing">
        <div class="container">
            <div class="landing">
            <div class="landing-content">
                <div class="landing-text">
                    <span>FIND CLOTHES THAT MATCHES YOUR STYLE</span>
                    <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                </div>
                <div class="btns shopnow-btn">
                    <a class="shop-products">Shop Now</a>
                </div>
                <div class="statistics">
                    <div class="stat-brands">
                        <span>200+</span>
                        <p>International Brands</p>
                    </div>
                    <div class="stat-products">
                        <span>2,000+</span>
                        <p>High-Quality Products</p>
                    </div>
                    <div class="stat-customers">
                        <span>30,000+</span>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>
            <div class="landing-images">
                <img class="landing-img" src="/public/ccfd8aa5825862cdb9604a4fb4930464.jpeg" alt="landingimage">
                <img class="iconstar1" src="/public/Vector (10).png" alt="icon">
                <img class="iconstar2" src="/public/Vector (11).png" alt="icon">
            </div>
        </div>
            <div class="nav-brands">
                <a href="#"><img src="/public/Group (1).png" alt="versacelogo"></a>
                <a href="#"><img src="/public/zara-logo-1 1.png" alt="versacelogo"></a>
                <a href="#"><img src="/public/gucci-logo-1 1.png" alt="versacelogo"></a>
                <a href="#"><img src="/public/prada-logo-1 1.png" alt="versacelogo"></a>
                <a href="#"><img src="/public/Group (2).png" alt="versacelogo"></a>
            </div>
        </div>
    </section>
    `;
    return landing;
}