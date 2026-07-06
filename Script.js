let display = document.querySelector(".display");
function appendValue(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    }
    catch (error) { 
        display.value = "Error";
    }
}
function deletelast() { 
 display.value=display.value.slice(0,-1);
}
function change(value) {
    display.value=parseFloat(display.value)*-1;  
}   