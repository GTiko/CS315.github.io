document.body.innerHTML = '<h1 id="topHead">Inventory</h1>';

let h1 = document.getElementById("topHead");

let btn = document.createElement("div");
btn.innerHTML = '<br><button id="add">Add</button><br><br>';

h1.after(btn);

// Creating upper Elements
let upper = document.createElement("div");
btn.before(upper);

upper.innerHTML =
  '<div id="upper">Item Name</div>' +
  '<input type="text" placeholder="Product Name" id="iName">' +
  "<div>Item Catogory</div>" +
  '<input type="text" placeholder="Catagory" id="iCatagory">' +
  "<div>Quantity</div>" +
  '<input type="number" placeholder="Quantity" id="iQuantity">';

// Creating Lower Elements

let lower = document.createElement("div");
btn.after(lower);
lower.innerHTML =
  "<table id='myTable'>" +
  "<tr>" +
  "<th>Product Name</th>" +
  "<th>Catagory</th>" +
  "<th>Quantity</th>" +
  "</tr>" +
  "</table>";

let itemName = document.getElementById("iName");
let itemCatagory = document.getElementById("iCatagory");
let itemQuantity = document.getElementById("iQuantity");


// Creating function for click button
btn.onclick = function () {
  if (itemName.value == "") {
    itemName.style.border = "solid red 2px";
    itemQuantity.style.border = "";
    itemCatagory.style.border = "";
    alert("Item's Name Can't be empty");
  } else if (itemCatagory.value == "") {
    itemCatagory.style.border = "solid red 2px";
    itemQuantity.style.border = "";
    itemName.style.border = "";
    alert("Catagory Can't be empty");
  } else if (itemQuantity.value == "") {
    itemQuantity.style.border = "solid red 2px";
    itemCatagory.style.border = "";
    itemName.style.border = "";
    alert("Quanitity Can't be empty");
  } else {
    itemName.style.border = "";
    itemQuantity.style.border = "";
    itemCatagory.style.border = "";

    // Creating table to be added to the original table

    let newTable = document.getElementById("myTable");
    newTable.innerHTML += 
        '<tr>'+
            '<td id="byItem">'+itemName.value+'</td>'+
            '<td id="byCatgoty">'+itemCatagory.value+'</td>'+
            '<td id="byQuantity">'+itemQuantity.value+'</td>'+
        '</tr>'
    itemName.value = "";
    itemCatagory.value="";
    itemQuantity.value="";
  }
};

let srt =document.createElement("div");
lower.after(srt);
srt.innerHTML = '</br><button id="sort">Sort By Item</button>';

let sortArea = document.createElement("div");
srt.after(sortArea);
sortArea.innerHTML = '<textArea id="txt" cols="10" rows="10" style="display:none"></textArea>';

// Sorting elements bt there Item Name

srt.onclick = function(){
    document.getElementById("txt").value = "";
    let collection = document.querySelectorAll("#byItem");
    let arr = [];
    
    for(let elm of collection){
        arr.push(elm.innerHTML)
    }
    arr.sort();
    
    for(let all of arr){
        document.getElementById("txt").value += all +'\n';
    }
    document.getElementById("txt").style.display = "block"
}