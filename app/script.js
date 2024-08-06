// 'use strict';

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
  'shift',
  'Delete',
  'Enter',
  'Backspace',
  'arrowUp',
  'arrowRight',
  'arrowDown',
  'arrowLeft',
  '.',
];
let togglePosition = 0;

toggle.addEventListener('click', () => {
  enterBtn.style.color = '';
  calc.style.color = '';
  topText.style.color = '';
  document.documentElement.id = 'theme1';
  if (togglePosition === 0) {
    toggle.style.transform = `translateX(${(togglePosition += 125)}%)`;
    document.documentElement.id = 'theme2';
    calc.style.color = 'hsl(60, 10%, 19%)';
    topText.style.color = 'hsl(60, 10%, 19%)';
  } else if (togglePosition === 125) {
    toggle.style.transform = `translateX(${(togglePosition += 125)}%)`;
    document.documentElement.id = 'theme3';
    enterBtn.style.color = 'hsl(198, 20%, 13%)';
    calc.style.color = 'hsl(52, 100%, 62%)';
    topText.style.color = 'hsl(52, 100%, 62%)';
  } else if (togglePosition === 250) {
    document.documentElement.id = 'theme1';
    toggle.style.transform = `translateX(${(togglePosition -= 250)}%)`;
  }
});
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    calc.value += button.textContent.trim();
  });
});
deleteBtn.addEventListener('click', () => {
  calc.value = calc.value.slice(0, -1);
});
resetBtn.addEventListener('click', () => {
  calc.value = '';
});
enterBtn.addEventListener('click', () => {
  calc.value = eval(calc.value);
});
calc.addEventListener('keydown', (e) => {
  e.key === 'Enter' ? (calc.value = eval(calc.value)) : '';
});

calc.onkeydown = function (e) {
  if (validKeys.includes(e.key)) {
    return true;
  }
  return false;
};
document.ondblclick = function (e) {
  e.preventDefault();
};
