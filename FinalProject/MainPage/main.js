document.addEventListener("input", changeMenu);
let glass =document.querySelectorAll("#glass");
let phone  =document.querySelectorAll("#phone");
let laptop =document.querySelectorAll("#laptop");
let headphone =document.querySelectorAll("#headphone");
let images= document.querySelectorAll("#phone");
let mainPage=document.querySelector("main");

let div=document.createElement("div");
document.querySelector("#mydiv").after(div);
div.style.display="flex";
div.style.gap="20px"
div.style.padding="30px";

function changeMenu() {
  let menu = document.querySelectorAll(".menu select option");
  for (let each of menu) {
    if (each.selected && each.value == "phone") {
      document.querySelector(".images").style.display = "none";
      document.getElementById("newArrival").style.display = "none";
      document.getElementById("hr1").style.display = "none";
      document.getElementById("hr2").style.display = "none";
      document.getElementById("advert").style.display = "none";
      document.getElementById("ad2").style.display = "none";
      document.getElementById("ipads").style.display = "none";
    
      for(let all of phone){
        div.append(all);
        all.style.display="block";
        all.style.border="none"; 
      }
      for(let all of glass){
        all.style.display="none";
      }
      for(let all of laptop){
        all.style.display="none";
      }
      for(let all of headphone){
        all.style.display="none";
      }
    }
    if (each.selected && each.value == "laptop") {
      document.querySelector(".images").style.display = "none";
        document.getElementById("newArrival").style.display = "none";
        document.getElementById("hr1").style.display = "none";
        document.getElementById("advert").style.display = "none";
        document.getElementById("hr2").style.display = "none";
        document.getElementById("ad2").style.display = "none";
        document.getElementById("ipads").style.display = "none";
        for(let all of laptop){
            div.append(all);
        all.style.display="block";
        all.style.border="none";
          }
        
        for(let all of glass){
          all.style.display="none";
        }
        for(let all of phone){
          all.style.display="none";
        }
        for(let all of headphone){
          all.style.display="none";
        }
      }
      if (each.selected && each.value == "glass") {
        document.querySelector(".images").style.display = "none";
        document.getElementById("newArrival").style.display = "none";
        document.getElementById("hr1").style.display = "none";
        document.getElementById("advert").style.display = "none";
        document.getElementById("hr2").style.display = "none";
        document.getElementById("ad2").style.display = "none";
        document.getElementById("ipads").style.display = "none";
        for(let all of glass){ 
            div.append(all);
            all.style.display="block";
            all.style.border="none";
          }
        for(let all of phone){
          all.style.display="none";
        }
        for(let all of laptop){
          all.style.display="none";
        }
        for(let all of headphone){
          all.style.display="none";
        }
      }
      if (each.selected && each.value == "headphone") {
        document.querySelector(".images").style.display = "none";
        document.getElementById("newArrival").style.display = "none";
        document.getElementById("hr1").style.display = "none";
        document.getElementById("advert").style.display = "none";
        document.getElementById("hr2").style.display = "none";
        document.getElementById("ad2").style.display = "none";
        document.getElementById("ipads").style.display = "none";
        for(let all of headphone){ 
            div.append(all);
            all.style.display="block";
            all.style.border="none";
          }
        for(let all of glass){
          all.style.display="none";
        }
        for(let all of laptop){
          all.style.display="none";
        }
        for(let all of phone){
          all.style.display="none";
        }
      }
      if (each.selected && each.value == "menu") {
        //   FIXME:
        location.reload();
        
      }
  }
}
