import '../stylingsection/styling.css'
export const styling = () => {
    const styling = document.createElement("styling");
    styling.innerHTML = `
     <!--stylings section-->
    <section id="stylings">
      
      <div class="container">
        <div class="stylings">
          <h2>BROWSE BY DRESS STYLE</h2>
          <div class="stylings-cat">
            <div class="row">
              <div class="casual" >
                
                <img src="/public/a32d9a769caba77c08e107a9198dcd6d.png" alt="styleimage">
              
                <a class="shop-products">Casual</a>
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
          </div>
        </div>
      </div>
    
    </section>

    `;
    return styling;
}