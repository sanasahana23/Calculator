function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function calculate() {
    const display = document.getElementById('display');
    
    try {
        display.innerText = eval(display.innerText) || '';
    } catch (error) {
        display.innerText = 'Error';
    }
}
