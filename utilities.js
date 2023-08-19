// first function for getValue
function calledInputFeildById(inputFeild) {
    const firstInputFeild = document.getElementById(inputFeild);
    const firstInputFeildValue = firstInputFeild.value;
    const firstInputFeildValueConvert = parseFloat(firstInputFeildValue);
    return firstInputFeildValueConvert;
}

// 2nd function for inner
function valuePlace(element, inner) {
    const calledElement = document.getElementById(element);
    calledElement.innerText = inner
}

// 3rd function for calculation entry
function addToCalculationEntry(shapeType, areaCalculation){
    const storage = document.querySelector('#store-all-area-calculate');
    const p = document.createElement('p');
    const count = storage.childElementCount;
    p.classList.add('my-4')
    p.innerHTML=`${count + 1} ${shapeType} ${areaCalculation}`
    storage.appendChild(p)
}