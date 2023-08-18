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

// Event Listener Triangle
document.querySelector('#triangle-btn').addEventListener('click', function () {
    const firstInputValue = calledInputFeildById('first-input');
    const secondInputValue = calledInputFeildById('second-input');
    const triangleAreaCalculate = 0.5 * firstInputValue * secondInputValue;
    valuePlace('value-inner', triangleAreaCalculate)
})

// Event Listener Rectangle
document.querySelector('#rectangle-btn').addEventListener('click', function () {
    const firstInputValue = calledInputFeildById('rectangle-first-input');
    const secondInputValue = calledInputFeildById('rectangle-second-input');
    const rectangleAreaCAlculate = firstInputValue * secondInputValue;
    valuePlace('rectangle-value-inner', rectangleAreaCAlculate);
})

// Evenet Listener parallelogram
document.querySelector('#parallelogram-btn').addEventListener('click', function () {
    const firstInputValue = calledInputFeildById('parallelogram-first-input');
    const secondInputValue = calledInputFeildById('parallelogram-second-input');
    const parallelogramAreaCalculate = firstInputValue * secondInputValue;
    valuePlace('parallelogram-value-inner', parallelogramAreaCalculate);
})
// Event Listener rhombus
document.querySelector('#rhombus-btn').addEventListener('click', function () {
    const firstInputValue = calledInputFeildById('rhombus-first-input');
    const secondInputValue = calledInputFeildById('rhombus-second-input');
    const rhombusAreaCalculate = 0.5 * firstInputValue * secondInputValue;
    valuePlace('rhombus-value-inner', rhombusAreaCalculate);
})
// Event Listener pentagon
document.querySelector('#pentagon-btn').addEventListener('click', function(){
    const firstInputValue = calledInputFeildById('pentagon-first-input');
    const secondInputValue = calledInputFeildById('pentagon-second-input');
    const pentagonAreaCalculate= 0.5 * firstInputValue * secondInputValue;
    valuePlace('pentagon-value-inner', pentagonAreaCalculate)
})
// Event Listener Ellipse
document.querySelector('#ellipse-btn').addEventListener('click', function(){
    const firstInputValue = calledInputFeildById('ellipse-first-input');
    const secondInputValue = calledInputFeildById('ellipse-second-input');
    const ellipseAreaCalculate = 3.1416 * firstInputValue * secondInputValue;
    valuePlace('ellipse-value-inner', ellipseAreaCalculate)
})