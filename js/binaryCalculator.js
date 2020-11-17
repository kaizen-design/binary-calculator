"use strict";

const buttons = document.querySelectorAll('#btns > button');
const res = document.getElementById('res');

buttons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    const pressedKey = button.innerHTML;
    switch (pressedKey) {
      case '=':
        res.innerHTML = calculate(res.innerHTML);
        break;
      case 'C':
        res.innerHTML = '';
        break;
      default:
        res.innerHTML += pressedKey;
        break;
    }
  })
});

function calculate(str) {
  if (str.indexOf('+') !== -1) {
    const operands = str.split('+');
    return (Number(parseInt(operands[0], 2)) + Number(parseInt(operands[1], 2))).toString(2);
  } else if (str.indexOf('-') !== -1) {
    const operands = str.split('-');
    return (Number(parseInt(operands[0], 2)) - Number(parseInt(operands[1], 2))).toString(2);
  } else if (str.indexOf('*') !== -1) {
    const operands = str.split('*');
    return (Number(parseInt(operands[0], 2)) * Number(parseInt(operands[1], 2))).toString(2);
  } else if (str.indexOf('/') !== -1) {
    const operands = str.split('/');
    return (Number(parseInt(operands[0])) / Number(parseInt(operands[1]))).toFixed();
  } else {
    alert('Invalid input!');
    return str;
  }
}