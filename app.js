import Calculatrice from './calculatrice.js';

const calc = new Calculatrice();
const display = document.getElementById('display');
const historyList = document.getElementById('history-list');
const clearHistoryButton = document.getElementById('clear-history');

let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function updateHistory() {
    historyList.innerHTML = '';
    calc.getHistorique().forEach(entry => {
        let opSymbol;
        if (entry.operation === 'addition') {
            opSymbol = '+';
        } else if (entry.operation === 'soustraction') {
            opSymbol = '–';
        } else if (entry.operation === 'multiplication') {
            opSymbol = '×';
        }
        const li = document.createElement('li');
        li.textContent = `${entry.a} ${opSymbol} ${entry.b} = ${entry.result}`;
        historyList.appendChild(li);
    });
}

// Gestion des boutons chiffres
document.querySelectorAll('.digit').forEach(button => {
    button.addEventListener('click', () => {
        const digit = button.getAttribute('data-digit');
        if (waitingForSecondOperand) {
            display.textContent = digit;
            waitingForSecondOperand = false;
        } else {
            display.textContent = display.textContent === '0' ? digit : display.textContent + digit;
        }
    });
});

// Gestion des boutons opérateurs
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        firstOperand = parseFloat(display.textContent);
        operator = button.getAttribute('data-operator');
        waitingForSecondOperand = true;
    });
});

// Bouton "=" pour effectuer le calcul
document.getElementById('equals').addEventListener('click', () => {
    if (firstOperand !== null && operator !== null) {
        const secondOperand = parseFloat(display.textContent);
        let result;
        if (operator === 'add') {
            result = calc.add(firstOperand, secondOperand);
        } else if (operator === 'subtract') {
            result = calc.subtract(firstOperand, secondOperand);
        } else if (operator === 'multiply') {
            result = calc.multiply(firstOperand, secondOperand);
        }
        display.textContent = result;
        firstOperand = null;
        operator = null;
        waitingForSecondOperand = false;
        updateHistory();
    }
});

// Bouton "C" pour réinitialiser l'affichage et les variables
document.getElementById('clear').addEventListener('click', () => {
    display.textContent = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
});

// Bouton pour effacer l'historique
clearHistoryButton.addEventListener('click', () => {
    calc.clearHistorique();
    updateHistory();
});
