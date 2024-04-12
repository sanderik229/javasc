let firsnum = parseFloat(prompt('Введите первую цифру: '));
let operat = prompt('выберите операцию: +,-,*,/ :');
let Secnum = parseFloat(prompt('Введите вторую цифру: '));
let result;

if (operat === '+') {
    result = firsnum + Secnum;
} else if (operat === '-') {
    result = firsnum - Secnum;
} else if (operat === '*') {
    result = firsnum * Secnum;
} else if (operat === '/' && Secnum !== 0) {
    result = firsnum / Secnum;
} else {
    alert("Ошибка ввода");
}
alert(`${firsnum} ${operat} ${Secnum} = ${result}`);

