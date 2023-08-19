// Ekta array jeta shesh 5 ta history rakhar jonno use hobe
const historyLimit = 5;
const calculationHistory = [];

function addToCalculationEntry(shapeType, areaCalculation) {
    const storage = document.querySelector('#store-all-area-calculate');
    const count = calculationHistory.push({ shapeType, areaCalculation });
    
    // Jokhon historyLimit er besi hoy
    if (count > historyLimit) {
        calculationHistory.shift(); // Prothom gulo remove kore dibe
        storage.removeChild(storage.firstElementChild); // DOM thekeo remove korbe
    }
    
    const p = document.createElement('p');
    p.classList.add('my-5');
    p.innerHTML = `${count} ${shapeType} ${areaCalculation} <span class='font-semibold text-red-500'>cm<sup>2</sup></span>`;
    storage.appendChild(p);
}
