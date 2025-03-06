function calculate() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let operation = document.getElementById('operation').value;
    let historyField = document.getElementById('history');
    let val1 = parseFloat(num1.value);
    let val2 = parseFloat(num2.value);
    let result;

    num1.classList.remove('error');
    num2.classList.remove('error');

    if (isNaN(val1)) {
        num1.classList.add('error');
        return;
    }
    if (isNaN(val2)) {
        num2.classList.add('error');
        return;
    }
    
    switch (operation) {
        case '+': result = val1 + val2; break;
        case '-': result = val1 - val2; break;
        case '*': result = val1 * val2; break;
        case '/': 
            if (val2 === 0) {
                return;
            }
            result = val1 / val2; 
            break;
        default: result = 'Ошибка';
    }

    historyField.innerHTML = `<p>${val1} ${operation} ${val2} = ${result}</p>` + historyField.innerHTML;
}