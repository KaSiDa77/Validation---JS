function setScreenValue(val){
    document.getElementById("result").value+=val;
}
function clearScreen(){
    document.getElementById("result").value="";
}
function calculateResult(){
    const resultelement=document.getElementById("result");
    const expression=resultelement.value.trim();
    if (expression===''){
        resultelement.value="enter an expression to work";
        return;
    }
    try{
        resultelement.value=eval(expression);

    }
catch(err){
    resultelement.value="Invalid Input Given"
}

}