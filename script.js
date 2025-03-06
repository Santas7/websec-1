function calculate() {
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const operationElement = document.getElementById('operation');
    const historyField = document.getElementById('history');

    if (!num1Element || !num2Element || !operationElement || !historyField) {
        console.error('Один или несколько элементов не найдены.');
        return;
    }

    const val1 = parseFloat(num1Element.value);
    const val2 = parseFloat(num2Element.value);
    const operation = operationElement.value;

    num1Element.classList.remove('error');
    num2Element.classList.remove('error');

    function showError(element) {
        element.classList.add('error');
    }

    if (isNaN(val1)) {
        showError(num1Element);
        return;
    }
    if (isNaN(val2)) {
        showError(num2Element);
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '*':
            result = val1 * val2;
            break;
        case '/':
            if (val2 === 0) {
                historyField.innerHTML = `<p class="error">Ошибка: Деление на ноль!</p>` + historyField.innerHTML;
                return;
            }
            result = val1 / val2;
            break;
        default:
            historyField.innerHTML = `<p class="error">Ошибка: Неизвестная операция!</p>` + historyField.innerHTML;
            return;
    }

    const entry = document.createElement('p');
    entry.textContent = `${val1} ${operation} ${val2} = ${result}`;
    historyField.prepend(entry);
}
