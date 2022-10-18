let table = document.querySelector("table");
let td = document.querySelectorAll("td");

let btn = document.createElement("div");
table.after(btn);
btn.innerHTML = "<br><button>Swith to unorder List</button>";

console.log(td);

let unorderList = document.createElement("ul");
btn.after(unorderList);

let list = document.createElement("div");
unorderList.after(list);

btn.onclick = function () {
  unorderList.innerHTML = "";
  list.innerHTML = "";
  for (let rows of td) {
    unorderList.innerHTML += "<li>" + rows.innerHTML + "\n" + "</li>";
    list.innerHTML += rows.innerHTML + " ";
  }
};
