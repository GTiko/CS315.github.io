let shoppingCart = [];
if (localStorage.getItem("cart") == null) {
  localStorage.setItem("cart", JSON.stringify(shoppingCart));
}

const urlParams = new URLSearchParams(window.location.search);

const title = urlParams.get("title");
const price = urlParams.get("price");
const image = urlParams.get("image");
const rating = urlParams.get("rating");
const quantity= urlParams.get("quantity");

function rateMe(rateValue) {
  let rate = "";
  for (let i = 0; i < rateValue; i++) {
    rate +=
      `<span class='fa fa-star checked' style='color:orange'></span>` + `\n`;
  }
  return rate;
}

let container = document.getElementsByClassName("container")[0];
container.innerHTML = 
    `<div>
        <img src="/FinalProject/Images/${image}"> 
    </div>
    <div>

        <div class="fs-2 fw-bolder">${title}</div> <br><br>

        <div class="fs-2 fw-bolder">More than (${quantity}) of this are available</div> <br><br>
        <div><label class="fs-2 fw-bold">Price : </label><label style='color:blue;font-size:50px'>${price}</label></div>  <br><br>
        
        <div class="fs-2 fw-bolder">${rateMe(rating)} - ${rating}</div>
    </div>
        <div>
        <a href="/FinalProject/Cart/cart.html?image=${image}&title=${title}&quantity=${quantity}&price=${price}&rating=${rating}">
        <button id='btn'>Add to cart</button></a>
             
        </div>
    </div>`;
