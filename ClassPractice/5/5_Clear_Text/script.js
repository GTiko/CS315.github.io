
function add(){

    let input = document.getElementById("input");
    let output = document.getElementById("output");

    output.value += input.value +" ";
    input.value = "";
}

function cl(){
    
    let output = document.getElementById("output");
    output.value = "";
}
