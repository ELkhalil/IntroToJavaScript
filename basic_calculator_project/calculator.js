let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector(".screen");


function buttonClick(value) {
    console.log("you clicked");
    // if (isNaN(parseInt(value)))
    //     handleSymbole(value);
    // else
    //     handleNumber(value);
    // rerender();
}

function handleNumber(number) {
    if (buffer === '0')
        buffer = number;
    else
        buffer += number;
}

function flushOperation(intBuffer) {
    if (previousOperator === "+")
      runningTotal += intBuffer;
    else if (previousOperator === "-")
      runningTotal -= intBuffer;
    else if (previousOperator === "×")
      runningTotal *= intBuffer;
    else
      runningTotal /= intBuffer;
}

function handleMath(value) {
    if (buffer === "0")
      return;
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0)
      runningTotal = intBuffer;
    else
      flushOperation(intBuffer);
    previousOperator = value;
    buffer = "0";
}

function handleSymbole( symbole ){
    switch(symbole)
    {
        case 'c':
            buffer = '0';
            break;
        case '←':
            if (buffer.length === 1)
                buffer = '0';
            else
                buffer = buffer.substring(0, buffer.length - 1);
            break;
        case '=':
            if (previousOperator === null)
                return;
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = +runningTotal;
            runningTotal = 0;
            break;
        case '+':
        case '-':
        case '÷':
        case '×':
            handleMath(symbole);
            break;
    }
}

function init() {
    document
    .querySelector('.calc-buttons')
    .addEventListener("click", function(event) {
        buttonClick(event.target.innerText);
    })
}

function rerender () {
    screen.innerText = buffer;
}

init();