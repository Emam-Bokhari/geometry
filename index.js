// Event Listener Triangle
function triangle(){
    const firstInputValue = calledInputFeildById('first-input');
    const secondInputValue = calledInputFeildById('second-input');
    if(isNaN(firstInputValue) || isNaN(secondInputValue)){
       return alert('Please insert a number');
    }
    const triangleAreaCalculate = 0.5 * firstInputValue * secondInputValue;
    const twoDecimal=triangleAreaCalculate.toFixed(2);
    valuePlace('value-inner', twoDecimal)
    addToCalculationEntry('Triangle', twoDecimal)
}

document.querySelector('#triangle-btn').addEventListener('click', triangle) 

document.querySelector('#first-input').addEventListener('keyup', function(event) {
    if (event.key==='Enter') {
        triangle()
    }
});
document.querySelector('#second-input').addEventListener('keyup',function(event){
    if(event.key==='Enter'){
        triangle()
    }
})


// Event Listener Rectangle
document.querySelector('#rectangle-btn').addEventListener('click', function () {
    const firstInputValue = calledInputFeildById('rectangle-first-input');
    const secondInputValue = calledInputFeildById('rectangle-second-input');
    if(isNaN(firstInputValue) || isNaN(secondInputValue)){
        return alert('Please insert a number');
     }
    const rectangleAreaCAlculate = firstInputValue * secondInputValue;
    const twoDecimal=rectangleAreaCAlculate.toFixed(2);
    valuePlace('rectangle-value-inner', twoDecimal);
    addToCalculationEntry('Rectangle', twoDecimal)
})

// Evenet Listener parallelogram
document.querySelector('#parallelogram-btn').addEventListener('click', function () {
    const firstInputValue = calledInputFeildById('parallelogram-first-input');
    const secondInputValue = calledInputFeildById('parallelogram-second-input');
    if(isNaN(firstInputValue) || isNaN(secondInputValue)){
        return alert('Please insert a number');
     }
    const parallelogramAreaCalculate = firstInputValue * secondInputValue;
    const twoDecimal=parallelogramAreaCalculate.toFixed(2);
    valuePlace('parallelogram-value-inner', twoDecimal);
    addToCalculationEntry('Parallelogram', twoDecimal)
})
// Event Listener rhombus
document.querySelector('#rhombus-btn').addEventListener('click', function () {
    const firstInputValue = calledInputFeildById('rhombus-first-input');
    const secondInputValue = calledInputFeildById('rhombus-second-input');
    if(isNaN(firstInputValue) || isNaN(secondInputValue)){
        return alert('Please insert a number');
     }
    const rhombusAreaCalculate = 0.5 * firstInputValue * secondInputValue;
    const twoDecimal=rhombusAreaCalculate.toFixed(2);
    valuePlace('rhombus-value-inner', twoDecimal);
    addToCalculationEntry('Rhombus', twoDecimal)
})
// Event Listener pentagon
document.querySelector('#pentagon-btn').addEventListener('click', function(){
    const firstInputValue = calledInputFeildById('pentagon-first-input');
    const secondInputValue = calledInputFeildById('pentagon-second-input');
    if(isNaN(firstInputValue) || isNaN(secondInputValue)){
        return alert('Please insert a number');
     }
    const pentagonAreaCalculate= 0.5 * firstInputValue * secondInputValue;
    const twoDecimal=pentagonAreaCalculate.toFixed(2);
    valuePlace('pentagon-value-inner', twoDecimal);
    addToCalculationEntry('Pentagon', twoDecimal)
})
// Event Listener Ellipse
document.querySelector('#ellipse-btn').addEventListener('click', function(){
    const firstInputValue = calledInputFeildById('ellipse-first-input');
    const secondInputValue = calledInputFeildById('ellipse-second-input');
    if(isNaN(firstInputValue) || isNaN(secondInputValue)){
        return alert('Please insert a number');
     }
    const ellipseAreaCalculate = 3.1416 * firstInputValue * secondInputValue;
    const twoDecimal=ellipseAreaCalculate.toFixed(2);
    valuePlace('ellipse-value-inner', twoDecimal);
    addToCalculationEntry('Ellipse', twoDecimal)
})