document.body.innerHTML = "<br><label>TICK-TIMER-1</label>";

let label2 = document.createElement("label");
document.querySelector("label").after(label2);
label2.innerHTML = "TICK-TIMER-2";

let txtArea = document.createElement("div");
label2.after(txtArea);
txtArea.innerHTML = 'Set time <input type="number" id="id">';

let btn = document.createElement("button");
txtArea.after(btn);
btn.innerHTML = "submit";

let tick1 = document.querySelector("label");
let tick2 = label2;

let inputArea = document.getElementById("id");

function ticker() {
  if (tick1.style.visibility == "visible") {
    tick1.style.visibility = "hidden";
    tick2.style.backgroundColor = "yellow";
    tick2.style.visibility = "visible";
  } else {
    tick1.style.visibility = "visible";
    tick1.style.backgroundColor = "yellow";
    tick2.style.visibility = "hidden";
  }
}

btn.onclick = function () {
  if (document.querySelector("input").value == "") {
    inputArea.style.border = "solid red 1px";
  } else {
    inputArea.style.border = "";
    let time = Number(document.querySelector("input").value);

    let stop = setInterval(ticker, 1000);

    setTimeout(function () {
      tick1.style.visibility = "visible";
      tick2.style.visibility = "visible";
      tick1.style.backgroundColor = "";
      tick2.style.backgroundColor = "";
      clearInterval(stop);
    }, time * 1000);
  }
};
