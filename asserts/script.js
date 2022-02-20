var inputNumber = document.getElementById("input_number");
    var currentCalculation = document.getElementById("current-Calculation");
    var currentResult = document.getElementById("current-result");
    var btnAdd=document.getElementById("btn-add");
    var btnSub=document.getElementById("btn-subtract");
    var btnMultiPly=document.getElementById("btn-multiply");
    var btnDivision=document.getElementById("btn-divide");
    

 
function add(){
    if(isNaN(parseInt(inputNumber.value)))
     alert("Please enter a numeric value");
    else{
        var inputValue = parseInt(inputNumber.value);
    var outputValue = parseInt(currentResult.innerHTML);
    outputValue += inputValue;
    currentResult.innerHTML = outputValue.toString();
    currentCalculation.innerHTML +=`+ ${inputValue}`;
    }
    
}
function sub(){
    if(isNaN(parseInt(inputNumber.value)))
    alert("Please enter a numeric value");
    else{
        var inputValue = parseInt(inputNumber.value);
    var outputValue = parseInt(currentResult.innerHTML);
    outputValue -= inputValue;
    currentCalculation.innerHTML +=`- ${inputValue}`;
    currentResult.innerHTML = outputValue.toString();
    }
    
}
function multiply(){
    if(isNaN(parseInt(inputNumber.value)))
     alert("Please enter a numeric value");
   else{
    var inputValue=parseInt(inputNumber.value);
    var outputValue=parseInt(currentResult.innerHTML);
    outputValue = outputValue * inputValue;//6
    currentCalculation.innerHTML +=`* ${inputValue}`;   
    currentResult.innerHTML = outputValue.toString();
   }
}
function division(){
    if(isNaN(parseInt(inputNumber.value)))
     alert("Please enter a numeric value");
    else{
        var inputValue=parseInt(inputNumber.value); 
    var outputValue=parseInt(currentResult.innerHTML);
    outputValue = outputValue/inputValue;//1
    currentCalculation.innerHTML += `/ ${inputValue}`;
    currentResult.innerHTML=outputValue.toString();
    }


}

