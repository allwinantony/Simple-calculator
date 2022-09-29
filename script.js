function displayNumber(num){
    result.value +=num;
}
function Allclear(){
    result.value="";
}

function evaluateExp(){
    expression = result.value;
    output = eval(expression); //eval is an inbuilt fn in js to perform calculations
    result.value = output;
}
function backspace(){
    currentExpression = result.value;
    result.value = currentExpression.slice(0,-1);
}