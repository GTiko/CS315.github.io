let me = document.createElement("div");
me.innerHTML = "Me";
me.style.color = "green";
me.style.visibility="visible";
document.body.append(me);

let you = document.createElement("div");
you.innerHTML = "You";
you.style.color = "blue";
you.style.visibility="hidden";
document.body.append(you);

function tickTick(){
    if(me.style.visibility=="visible"){
        me.style.visibility="hidden";
        you.style.visibility="visible";
    }
   else if(me.style.visibility=="hidden"){
        me.style.visibility="visible";
        you.style.visibility="hidden"
    }
}

setInterval(tickTick, 1000);
