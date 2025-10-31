let display = document.getElementById('display');
function cleardisplay(){
    display.value = "";
}
function num(a){
    display.value+=a;
}
function Del(){
    display.value=display.value.slice(0,-1);
}
function cal(){
    let x = eval(display.value);
    display.value = x;
}