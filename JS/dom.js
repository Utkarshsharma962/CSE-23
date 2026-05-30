function result (){
    let inputData=document.getElementById("inputText").value;
    
    let changeColor=document.getElementById('text');
    changeColor.style.color="red";
    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor="blue";
}
let para=document.getElementById("paratext");
function changeColor(){
    para.style.backgroundColor="red";
}
para.addEventListener('mouseover', changetextColor);