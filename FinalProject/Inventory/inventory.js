var array = [];
var index = 0;
var idsOfInputs = ["itemName", "category","price","selRate","image", "quantity"];

function createEditButton(){
  let editTd = document.createElement("td");
  let button = document.createElement("button");
  button.id="editbutton"
  button.innerHTML = "Edit";
  button.setAttribute("myId", index);
  button.onclick = function () {
    let childNodes = this.parentNode.parentNode.childNodes;
    this.parentNode.parentNode.setAttribute("editing","true");
    for (let i = 0;i<=5;i++) {
      document.getElementById(idsOfInputs[i]).value= childNodes[i].innerHTML
    }
    document.getElementById("mode").value = "Edit";
    let myId = this.getAttribute("myId");
    array.forEach(function (item) {
      if (item.id == myId) {
        item.name = document.getElementById("itemName").value;
        item.category = document.getElementById("category").value;
        item.price = document.getElementById("price").value;
        item.rate = document.getElementById("selRate").value;
        item.image = document.getElementById("image").value;
        item.quantity = document.getElementById("quantity").value;
      }
    })

  }
  editTd.append(button);
  return editTd;
}
function createDeleteButton(){
  let td = document.createElement("td");
  let deleteButton = document.createElement("button");
  deleteButton.id="deletebutton"
  deleteButton.setAttribute("myId", index);
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function () {
    document.getElementById("mode").value = "";
    let myId = this.getAttribute("myId")
    array = array.filter((item) => item.id != myId);
    this.parentNode.parentNode.remove();
  }
  td.append(deleteButton);
  return td;
}
function add() {

  let items = document.getElementById("items");
  let itm=document.getElementById("itemName").value;
  let cat=document.getElementById("category").value;
  let pri=document.getElementById("price").value;
  let rat=document.getElementById("selRate").value;
  let img=document.getElementById("image").value;
  let qua=document.getElementById("quantity").value;
if(itm==""){
  document.getElementById("itemName").style.border="solid red"
  document.getElementById("category").style.border=""
  document.getElementById("price").style.border=""
  document.getElementById("selRate").style.border=""
  document.getElementById("image").style.border=""
  document.getElementById("quantity").style.border=""
}
else if(cat==""){
  document.getElementById("category").style.border="solid red"
  document.getElementById("itemName").style.border=""
  document.getElementById("price").style.border=""
  document.getElementById("selRate").style.border=""
  document.getElementById("image").style.border=""
  document.getElementById("quantity").style.border=""
}

else if(pri==""){
  document.getElementById("price").style.border="solid red"
  document.getElementById("itemName").style.border=""
  document.getElementById("category").style.border=""
  document.getElementById("selRate").style.border=""
  document.getElementById("image").style.border=""
  document.getElementById("quantity").style.border=""
}

else if(rat=="" || rat>5 || rat<1){
  document.getElementById("selRate").style.border="solid red"
  document.getElementById("itemName").style.border=""
  document.getElementById("category").style.border=""
  document.getElementById("price").style.border=""
  document.getElementById("image").style.border=""
  document.getElementById("quantity").style.border=""
  // alert("Please enter number between 0 and 6")
}

else if(img==""){
  document.getElementById("image").style.border="solid red"
  document.getElementById("itemName").style.border=""
  document.getElementById("category").style.border=""
  document.getElementById("price").style.border=""
  document.getElementById("selRate").style.border=""
  document.getElementById("quantity").style.border=""
}

else if(qua==""){
  document.getElementById("quantity").style.border="solid red"
  document.getElementById("itemName").style.border=""
  document.getElementById("category").style.border=""
  document.getElementById("price").style.border=""
  document.getElementById("image").style.border=""
  document.getElementById("selRate").style.border=""
}
 
    if (document.getElementById("mode").value == "Edit") {
    document.getElementById("mode").value=""
    let editTr = getEditedRow().childNodes;
    for (let i = 0;i<=2;i++) {
      editTr[i].innerHTML = document.getElementById(idsOfInputs[i]).value;
    }
  } else {
    index++;
    var item = {
      id: index, name: document.getElementById("itemName").value,
      category: document.getElementById("category").value,
      price: document.getElementById("price").value,
      rate: document.getElementById("selRate").value,
      image: document.getElementById("image").value,
      quantity: document.getElementById("quantity").value
    };
    array.push(item);
    let tr = document.createElement("tr");
    for (let eachInput of idsOfInputs) {
      
      items.append(tr);
      let td = document.createElement("td");
      td.innerHTML = document.getElementById(eachInput).value;
      tr.append(td);
    }
    tr.append(createEditButton());
    tr.append(createDeleteButton());
  }
  
    document.getElementById("itemName").value="";
    document.getElementById("category").value="";
    document.getElementById("price").value="";
    document.getElementById("selRate").value="";
    document.getElementById("image").value="";
    document.getElementById("quantity").value="";
}

function filter() {
  document.getElementById("mode").value = "";
  console.log(array);
  let filteredArray = array.filter((item) => Number(item.quantity) > 100);
  let children = document.getElementById('items').childNodes;
  for (let i = 2; i < children.length; i++) {
    let eachTr = children[i];
    console.log(eachTr.children[2]);
    if (Number(eachTr.children[2].innerHTML) < 100) {
      eachTr.style.display = "none";
    }
  }
}

function getEditedRow(){
  let children = document.getElementById('items').childNodes;
  for (let i = 2; i < children.length; i++) {
    let eachTr = children[i];
    if(eachTr.getAttribute("editing")==="true"){
      eachTr.setAttribute("editing","");
      return eachTr;
    }
  }
}

function clearFilter() {
  document.getElementById("mode").value = "";
  console.log(array);
  let filteredArray = array.filter((item) => Number(item.quantity) > 100);
  let children = document.getElementById('items').childNodes;
  for (let i = 2; i < children.length; i++) {
    let eachTr = children[i];
    console.log(eachTr.children[2]);
    eachTr.style.display = "";
  }

}
