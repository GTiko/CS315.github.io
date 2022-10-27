
let urlParams = new URLSearchParams(window.location.search);

let names = urlParams.get('title');
let price = Number(urlParams.get('price'));
let image = urlParams.get('image');
let totalPrice;

let shoppingCardArr = JSON.parse(localStorage.getItem("cart")); 

function addToCart() {
    if (names) {
        shoppingCardArr.push({ name: names, price: price, image: image });
        localStorage.setItem("cart", JSON.stringify(shoppingCardArr));
        totalPrice = shoppingCardArr.reduce((sum, current) => sum + current.price, 0);
    }
}

addToCart();

window.onload = function () {
    displayProduct(shoppingCardArr);
}

let cardPage = document.getElementById("items");
let subtotal = document.getElementById("subtotal")

let originalPrice=0;
let saving=0;


function displayProduct(arr) {
    let previousPrice=0;
    for (let element of arr) {

        
        if(element.price<100){
            previousPrice=(Math.floor(Math.random() * 10)+element.price).toFixed();
        }else if(element.price>100){
            previousPrice=(Math.floor(Math.random() * 100)+element.price).toFixed();
        }

        saving+=Number((previousPrice-element.price).toFixed());
        originalPrice+=Number(previousPrice);

        cardPage.innerHTML += 
 `<div class="main">
    <div>
        <div class="outer">
            <div>
              <img src="/FinalProject/Images/${element.image}" id="addedImg" >
            </div>
        <div>
        <a href="#" ><h5 id="title"> ${element.name}</h5></a>

        </div> 

        <div >
            <input type="radio"> <span id="radios"> Pickup at <a href="#" id="parkLane">Park Lane</a> <br>
            Ready for pickup in 1hr Eligible for curbside pickup </span>
            <br><br>
            <input type="radio"><span id="radios"> FREE Shipping to75201 75201 Get it by Thu, 
            Oct 27 Next-Day Delivery is also available in checkout</span>
        </div>

        <div id="optionContainer">
            <select>
                <option> 1</option>
                <option> 2</option>
                <option> 3</option>
                <option> 4</option>
            </select>
            <br><br>
                <div> <a href="#">Remove </a></div>
                <div> <a href="#">Save </a></div>
        </div>
        
            <div class="col-2 ">
                <div class="fw-bold fs-5">$${element.price}</div>
                <div id="save">Save$${(previousPrice-element.price).toFixed()}</div>
                <div>Was$${previousPrice}</div>
            </div>
        </div>
   </div>
 </div>`

   }

    subtotal.innerHTML += 
 `<div class="proceedToCheckOut">
  <div>
        <div style="display:grid;justify-content:center"><h1>Order Summary<h1>
        <hr>
        </div>

     <div class="chOuBox">

        <div>Original Price <span id="right">$${originalPrice}</span></div>

        <div>Saving <span id="right">$${saving}</span></div>
        <div>Shipping <span id="right">FREE</span></div>
        <a href="#" style="font-size:20px">
        <div>Estimated Sales Tax </a>
        <span id="right">$${(totalPrice*0.06).toFixed(2)}</span></div>
        
        <hr>

         <div id="total"><span>Total (${shoppingCardArr.length} Items):
         <span id="right" >$${(Number(totalPrice)+Number(totalPrice*0.06)).toFixed(2)}</span>
         </div>
         
         <div id="checkOut">
         <button id="checkOutBtn" onclick="checkOutFun()" type="button">Proceed to checkout</button>
         <div>
     </div>

 </div>
</div>`

}

document.addEventListener("input",numberOfItem);
let numbers=document.querySelectorAll("option")
function numberOfItem(){
    for(let each of numbers){
        if(each.selected){
            
        }
    }
}

let numberItems = document.getElementsByClassName("numberItems")[0];

numberItems.innerHTML = `<p class="counter">${shoppingCardArr.length}</p>`;


function checkOutFun() {
    window.location.href = "/FinalProject/ThankYou/ThankYou.html"
    localStorage.clear();
}
