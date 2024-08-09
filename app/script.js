// 'use strict';
const main = document.getElementById('main');
const toggle = document.getElementById('toggle');
const calc = document.getElementById('screen');
const buttons = Array.from(document.querySelectorAll('.calc-button'));
const deleteBtn = document.getElementById('delete-btn');
const resetBtn = document.getElementById('reset-btn');
const enterBtn = document.getElementById('enter-btn');
const topText = document.getElementById('top');
const validKeys = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '*',
  '-',
  '+',
  '/',
  'Shift',
  'Delete',
  'Enter',
  'Backspace',
  'ArrowUp',
  'ArrowRight',
  'ArrowDown',
  'ArrowLeft',
  '.',
  'Tab',
];
const calcButtons = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '*',
  '-',
  '+',
  '/',
  'Shift',
  '.',
];
const operators = ['+', '-', '*', '/', 'Shift'];
let togglePosition;
let answered = false;
// calc.focus();

const toggleFunction = function () {
  togglePosition = +toggle.value;

  if (togglePosition >= 1 && togglePosition <= 33) {
    enterBtn.style.color = '';
    calc.style.color = '';
    topText.style.color = '';
    document.documentElement.id = 'theme1';
  } else if (togglePosition >= 34 && togglePosition <= 66) {
    document.documentElement.id = 'theme2';
    calc.style.color = 'hsl(60, 10%, 19%)';
    topText.style.color = 'hsl(60, 10%, 19%)';
  } else if (togglePosition >= 67 && togglePosition <= 100) {
    document.documentElement.id = 'theme3';
    enterBtn.style.color = 'hsl(198, 20%, 13%)';
    calc.style.color = 'hsl(52, 100%, 62%)';
    topText.style.color = 'hsl(52, 100%, 62%)';
  }
};
toggle.addEventListener('mousemove', toggleFunction);
toggle.addEventListener('mouseup', toggleFunction);
toggle.addEventListener('touchmove', toggleFunction);
toggle.addEventListener('touchend', toggleFunction);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (answered && !button.classList.contains('operator')) calc.value = '';
    answered = false;
    calc.value += button.textContent.trim();
  });
});
deleteBtn.addEventListener('click', () => {
  calc.value = calc.value.slice(0, -1);
  if (answered && !deleteBtn.classList.contains('operator')) calc.value = '0';
  answered = false;
});
resetBtn.addEventListener('click', () => {
  calc.value = '0';
});
enterBtn.addEventListener('click', () => {
  answered = true;
  try {
    calc.value = new Intl.NumberFormat(navigator.language).format(
      math.evaluate(calc.value)
    );
  } catch (error) {
    try {
      calc.value = new Intl.NumberFormat(navigator.language).format(
        eval(calc.value)
      ); // Risky, use with caution
    } catch (evalError) {
      calc.value = 'Error';
    }
  }
});
calc.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    answered = true;
    try {
      calc.value = new Intl.NumberFormat(navigator.language).format(
        math.evaluate(calc.value)
      );
    } catch (error) {
      try {
        calc.value = new Intl.NumberFormat(navigator.language).format(
          eval(calc.value)
        ); // Risky, use with caution
      } catch (evalError) {
        calc.value = 'Error';
      }
    }
    return;
  }
  if (calcButtons.includes(e.key)) {
    if (answered && !operators.includes(e.key)) calc.value = '';
    answered = false;
    return;
  }
});
document.onkeydown = function (e) {
  calc.focus();
  main.onkeydown = function (e) {
    if (validKeys.includes(e.key)) {
      return true;
    }
    return false;
  };
};
document.ondblclick = function (e) {
  e.preventDefault();
};
