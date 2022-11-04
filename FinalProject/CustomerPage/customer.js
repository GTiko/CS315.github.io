
let originalArr = [
  {
    title: "Bose - Frames Tenor — Rectangular Bluetooth Audio Sunglasses - Black",
    rating: Math.floor(Math.random() * 5)+1,
    price: 29.99,
    image: "Glass/glass1.png",
    category: "glass",
    quantity: Math.floor(Math.random() * 10)+1,
  },
{
  title: "Sony - WH-XB910N Wireless Noise Cancelling Over-The-Ear Headphones - Black",
  rating: Math.floor(Math.random() * 5)+1,
  price: 110.00,
  image: "Headphones/headphone1.png",
  category: "headphone",
  quantity: Math.floor(Math.random() * 10)+1,
},
  {
    title: "Apple iPad Mini 2 16GB with Retina Display Wi-Fi Tablet",
    rating: Math.floor(Math.random() * 5)+1,
    price: 299.99,
    image: "Laptop/lap6.jpg",
    category: "ipad",
    quantity: Math.floor(Math.random() * 10)+1,
  },

  {
    title: "HP - ENVY x360 2-in-1 15.6 Touch-Screen Laptop - AMD Ryzen 5 - 8GB Memory - 256GB SSD - Nightfall Black",
    rating: Math.floor(Math.random() * 5)+1,
    price: 499.99,
    image: "Laptop/lap5.png",
    category:"laptop",
    quantity: Math.floor(Math.random() * 10)+1,
  },
  {
    title: "Apple - iPhone 14 Pro Max 256GB - Deep Purple (AT&T)",
    rating: Math.floor(Math.random() * 5)+1,
    price: 599.99,
    image: "Phones/1.png",
    category: "phone",
    quantity: Math.floor(Math.random() * 10)+1,
  },
  /////////////////////////////////////////////////////////////////////////////////////////
  {
    title: "Bose - Frames Tenor — Rectangular Bluetooth Audio Sunglasses - Black",
    rating: Math.floor(Math.random() * 5)+1,
    price: 39.99,
    image: "Glass/glass2.png",
    category: "glass",
    quantity: Math.floor(Math.random() * 10)+1,
  },
  {
    title: "Sony - WH-XB910N Wireless Noise Cancelling Over-The-Ear Headphones - Black",
    rating: Math.floor(Math.random() * 5)+1,
    price: 123.99,
    image: "Headphones/headphone2.jpg",
    category: "headphone",
    quantity: Math.floor(Math.random() * 10)+1,
  },
    {
      title: "Apple iPad Mini 2 16GB with Retina Display Wi-Fi Tablet",
      rating: Math.floor(Math.random() * 5)+1,
      price: 299.99,
      image: "ipads/ipad2.png",
      category: "ipad",
      quantity: Math.floor(Math.random() * 10)+1,
    },
  
    {
      title: "HP - ENVY x360 2-in-1 15.6 Touch-Screen Laptop - AMD Ryzen 5 - 8GB Memory - 256GB SSD - Nightfall Black",
      rating: Math.floor(Math.random() * 5)+1,
      price: 799.99,
      image: "Laptop/lap6.jpg",
      category:"laptop",
      quantity: Math.floor(Math.random() * 10)+1,
    },
    {
      title: "Samsung - Galaxy S22 Ultra 256GB (Unlocked) - Phantom Black",
      rating: Math.floor(Math.random() * 5)+1,
      price: 399.99,
      image: "Phones/2.png",
      category:"phone",
      quantity: Math.floor(Math.random() * 10)+1,
    }
];

let product=originalArr.slice();

window.onload = function () {
  displayProduct(product);

  let ranVal=document.querySelectorAll("#random");
  for(let each of ranVal){
      each.innerHTML=`(${Math.floor(Math.random() * 1000)+1})`;
  }
};

let dept = document.getElementsByClassName("product")[0];

//============== Products =============================

function rateMe(rateValue) {
  let rate = "";
  for (let i = 0; i < rateValue; i++) {
    rate +=
      `<span class='fa fa-star checked' style='color:orange'></span> `;
  }
  return rate;
}

function displayProduct(arr) {
  for (let element of arr) {
    let newItem = document.createElement("div");
    newItem.className = "box products";

    newItem.innerHTML = 
    `<div id='newItems'>
       
        <a href="selectedProduct.html?image=${element.image}&title=${element.title}&quantity=${element.quantity}&price=${element.price}&rating=${element.rating}">
        <img src='/FinalProject/Images/${element.image}' id='newImages'></a>
          
        <div>

            <div id='offer'>Offers</div><br>
            <a href="selectedProduct.html?image=${element.image}&title=${element.title}&quantity=${element.quantity}&price=${element.price}&rating=${element.rating}">
            ${element.title}</a>

            <br><br>
            ${rateMe(element.rating)}- ${element.rating}

        </div>

        <div style='font-weight:bold'>$ ${element.price} </div>
        
        <div>More than (${element.quantity}) Available</div>
        <a href="selectedProduct.html?image=${element.image}&title=${element.title}&quantity=${element.quantity}&price=${element.price}&rating=${element.rating}">
        <button id='addToCart'>Add to cart</button></a>
    
    </div>`;
    dept.append(newItem);
  }

//  Searching items
let searchBtn=document.getElementById("searchBtn");
let searchItem=document.getElementById("searchItem");

searchBtn.onclick=function(){
  
  let searchArr=product.filter(current=>current.category==searchItem.value);

  if(searchItem.value=="" ){
    dept.innerHTML="";
    displayProduct(product)
  }else if(searchArr.length==0){
    dept.innerHTML="";
    dept.innerHTML=
    "<div style='margin-left:600px;'><h1>No result Found</h1><div>"
  }else{
    dept.innerHTML="";
    displayProduct(searchArr);
  }
}

// Filtering by rate and price
let lowToHight=document.getElementById("lowToHight");
let hightToLow=document.getElementById("hightToLow");
let byRating=document.getElementById("byRating");
let clearFilter=document.getElementById("clearFilter");

lowToHight.onclick=function(){
  product.sort(function(a,b){
    if(a.price > b.price) return 1;
    if(a.price == b.price) return 0;
    if(a.price < b.price) return -1;
  })
  dept.innerHTML="";
  return displayProduct(product);
}  
hightToLow.onclick=function(){
  product.sort(function(a,b){
    if(a.price < b.price) return 1;
    if(a.price == b.price) return 0;
    if(a.price > b.price) return -1;
  })
  dept.innerHTML="";
  return displayProduct(product);
} 
byRating.onclick=function(){
  product.sort(function(a,b){
    if(a.rating < b.rating) return 1;
    if(a.rating == b.rating) return 0;
    if(a.rating > b.rating) return -1;
  })
  dept.innerHTML="";
  return displayProduct(product);
}

clearFilter.onclick=function(){
  dept.innerHTML="";
  return displayProduct(originalArr);
}
  
  // filter by category
function filterMenu(item){
  let myArr=product.filter(current=>current.category==item);
  dept.innerHTML="";
  displayProduct(myArr);
}
  document.addEventListener("input",myFilter);

  function myFilter(){
    let menu = document.querySelectorAll(".menu select option");
    for (let each of menu) {
      if(each.selected){
        if(each.value=="phone"){
          filterMenu("phone");
        }else if(each.value=="laptop"){
          filterMenu("laptop");
        }else if(each.value=="ipad"){
          filterMenu("ipad");
        }else if(each.value=="glass"){
          filterMenu("glass");
        }else if(each.value=="headphone"){
          filterMenu("headphone");
        }else if(each.value=="menu"){
          dept.innerHTML="";
          displayProduct(product)
        }
      }
    }
  }

  // Review

  let review1=document.getElementById("review1");
  let review2=document.getElementById("review2");
  let review3=document.getElementById("review3");
  let review4=document.getElementById("review4");
  let review5=document.getElementById("review5");

  review1.onclick=function(){
    let reviewArr=product.filter(item=>item.rating==1)
    dept.innerHTML="";
    displayProduct(reviewArr);
  }
  review2.onclick=function(){
    let reviewArr=product.filter(item=>item.rating==2)
    dept.innerHTML="";
    displayProduct(reviewArr);
  }
  review3.onclick=function(){
    let reviewArr=product.filter(item=>item.rating==3)
    dept.innerHTML="";
    displayProduct(reviewArr);
  }
  review4.onclick=function(){
    let reviewArr=product.filter(item=>item.rating==4)
    dept.innerHTML="";
    displayProduct(reviewArr);
  }
  review5.onclick=function(){
    let reviewArr=product.filter(item=>item.rating==5)
    dept.innerHTML="";
    displayProduct(reviewArr);
  }
}
