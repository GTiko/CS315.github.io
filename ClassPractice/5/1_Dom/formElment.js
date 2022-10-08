function alertTheText() {
  let elm = document.getElementById("name");
  let elval = elm.value;
  let copy = document.getElementById("copy");
  copy.setAttribute("value", elval);

  let div = document.getElementById("div");
  div = "Set Text ";
  document.getElementById("myD").append(div);
}
