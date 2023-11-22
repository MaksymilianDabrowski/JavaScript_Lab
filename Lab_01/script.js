
// dodawanie pola tekstowego
function addField() {
    const calc = document.getElementById('calc');
    const input = document.createElement('input');
    input.type = 'number';
    calc.appendChild(input);
}

// kalkulator
function calculate() {
    const inputs = document.querySelectorAll('#calc input');
    const result = document.getElementById('result');
    
    if(inputs.length === 0) {
        result.innerHTML = 'Dodaj jedno pole tekstowe';
        return;
    }

    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    inputs.forEach((input) => {
        const value = parseFloat(input.value);
        if(!isNaN(value)) {
            sum += value;
            min = Math.min(min, value);
            max = Math.max(max, value);
        }
    });

    const avg = sum / inputs.length;

    // innerHTML
    result.innerHTML = `
    <p>Suma: ${sum}</p>
    <p>Średnia: ${avg.toFixed(2)}</p>
    <p>Min: ${min}</p>
    <p>Max: ${max}</p>
    `;

    document.getElementById('calc').addEventListener('input', calc);
}