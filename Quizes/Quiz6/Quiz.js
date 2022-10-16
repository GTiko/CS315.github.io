let flowers = [
  { name: "rose", color: "pink" },
  { name: "rose", color: "red" },
  { name: "lily", color: "white" },
];

creatRadio(flowers);

function creatRadio(list) {
  let div = document.createElement("div");
  document.body.append(div);

  for (let i = 0; i < list.length; i++) {
    let radioButton = document.createElement("input");
    div.append(radioButton);
    radioButton.type = "radio";
    radioButton.id = i;
    radioButton.value = list[i].name + "-" + list[i].color;

    label = document.createElement("label");
    radioButton.after(label);
    label.innerHTML = list[i].name + "-" + list[i].color;
  }
}

function deleteRadio() {
  let radioSelection = document.querySelectorAll("input");
  for (let each of radioSelection) {
    if (each.checked) {
      flowers.splice(each.id, 1);

      creatRadio(flowers);

      document.querySelector("div").remove();
    }
  }
}
