window.onload = function () {
  let list = document.querySelectorAll("ol li");

  let lastElement = list[list.length - 1];

  let newElement = document.createElement("li");
  lastElement.before(newElement);
  newElement.innerHTML = "Tulip";

  let start = document.getElementById("start");
  let stop = document.getElementById("stop");

  function toggle() {
    if (newElement.style.color == "red") {
      newElement.style.color = "blue";
    } else {
      newElement.style.color = "red";
    }
  }

  let timer;
  start.onclick = function () {
    timer = setInterval(toggle, 1000);
  };

  stop.onclick = function () {
    setTimeout(function () {
      newElement.style.color = "";
      clearInterval(timer);
    });
  };
};
