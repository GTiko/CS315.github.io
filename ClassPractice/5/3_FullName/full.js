
function fullName(){

    let fName = document.getElementById("f").value;
    let lName = document.getElementById("l").value;

    let wholeName = document.getElementById("fn");

    // wholeName.setAttribute("value", fName + " " + lName);        //optional

    wholeName.value = fName + " " + lName;
    
}