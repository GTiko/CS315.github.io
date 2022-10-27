let emailInput=document.getElementById("email");
let emailMsg=document.createElement("div");
emailInput.after(emailMsg);

let passwordInput=document.getElementById("password");
let passwordMsg=document.createElement("div");
passwordInput.after(passwordMsg);

// sing In 

function singIn(){
    if(emailInput.value==""){
        emailInput.style.border="solid red 2px";
        emailMsg.innerHTML="Please enter email";
        emailMsg.style.color="red";
        emailMsg.id="eMsg";
    }else if(passwordInput.value==""){
        emailMsg.innerHTML="";
        emailInput.style.border="";
        passwordInput.style.border="solid red 2px";
        passwordMsg.innerHTML="Please password";
        passwordMsg.style.color="red";
        passwordMsg.id="passMsg"
    }else if(emailInput.value=="manager" && passwordInput.value=="Manager"){
        passwordMsg.innerHTML="";
        passwordInput.style.border="";
        window.location.href="/FinalProject/Inventory/inventory.html";

    }else if(emailInput.value=="customer" && passwordInput.value=="Customer"){
        passwordMsg.innerHTML="";
        passwordInput.style.border="";
        window.location.href="/FinalProject/CustomerPage/customer.html";
        
    }else{
        passwordMsg.innerHTML="";
        passwordInput.style.border="";
        alert("WRONG")
    }
}