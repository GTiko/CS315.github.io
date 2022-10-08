
function change(){

    let getName = document.getElementById("name");
    let copyName = document.getElementById("copy");

    copyName.setAttribute("value", getName.value);

    let anchor = document.createElement('a');
    document.getElementById("ol").append(anchor);
    anchor.outerHTML = '<br><a href="https://www.google.com">Google</a>';

}