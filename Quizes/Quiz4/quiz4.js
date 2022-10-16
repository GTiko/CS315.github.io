let div = document.createElement("div");
document.querySelector("button").after(div);

function showText() {
  let list = document.querySelectorAll("select option");

  let selectedValue;

  for (let each of list) {
    if (each.selected) {
      selectedValue = each.innerHTML;
    }
  }

  div.innerHTML = "<div>" + "SelectedText: " + selectedValue + "</div>";
}
