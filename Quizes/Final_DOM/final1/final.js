let branches = {
  Upanishads: ["Aitareya", "Brihadaranyaka", "Chandogya", "Mandukya"],
  Vedas: ["Rig", "Yajur", "Adharvana", "Sama"],
};

let btn = document.getElementById("show");

let div = document.createElement("div");
btn.after(div);

let list = document.querySelectorAll("select option");

btn.onclick = function () {
  for (let each of list) {
    if (each.selected) {
      if (each.innerHTML == "Select") {
        div.innerHTML = '<label style="color:red">*Select valid option</label>';
      }
      if (each.innerHTML == "Vedas") {
        div.innerHTML = "";
        for (let all of branches.Vedas) {
          let chbox = document.createElement("input");
          div.append(chbox);
          chbox.value = all;
          chbox.type = "checkbox";
          chbox.id = "cc";

          let label1 = document.createElement("label");
          chbox.after(label1);
          label1.innerHTML = all;
        }
      }
      if (each.innerHTML == "Upanishads") {
        div.innerHTML = "";
        for (let all of branches.Upanishads) {
          let chbox2 = document.createElement("input");
          div.append(chbox2);
          chbox2.value = all;
          chbox2.type = "checkbox";
          chbox2.id = "cc";

          let label12 = document.createElement("label");
          chbox2.after(label12);
          label12.innerHTML = all;
        }
      }
    }
  }
};

function submitForm() {
  let allOptions = document.querySelectorAll("#cc");
  div.innerHTML = "";
  for (let each of allOptions) {
    if (each.checked) {
      div.innerHTML = div.innerHTML + " " + each.value;
    }
  }
}
