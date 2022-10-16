function addRow() {
  let table = document.getElementById("myTable");

  let row = table.insertRow();
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();

  cell1.setAttribute("id", "last");
  cell2.setAttribute("id", "last");

  cell1.innerHTML = "Grapes";
  cell2.innerHTML = "Black";

  //   cell1.outterHTML = "last";
  //   cell2.setAttribute([id], "last");
}
function changeColor() {
  let col = document.getElementById("inputColor");
  let elm = (document.getElementById("last").style.color = col.value);
}
