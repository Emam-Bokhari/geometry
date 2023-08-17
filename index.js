// first function for getValue
function calledInputFeildById(inputFeild){
    const firstInputFeild=document.getElementById(inputFeild);
    const firstInputFeildValue=firstInputFeild.value;
    const firstInputFeildValueConvert= parseFloat(firstInputFeildValue);
    return firstInputFeildValueConvert;
}

// 2nd function for inner
function valuePlace(element,inner){
    const calledElement=document.getElementById(element);
    calledElement.innerText=inner
}

// EventListener
document.querySelector('#triangle-btn').addEventListener('click', function(){
const firstInputValue=calledInputFeildById('first-input');
const secondInputValue=calledInputFeildById('second-input');
const triangleAreaCalculate= 0.5 * firstInputValue * secondInputValue;
valuePlace('value-inner', triangleAreaCalculate)
})