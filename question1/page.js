var timer;
const waitTime = 500;

function onInputText(value) {

    clearTimeout(timer);
    timer = setTimeout(() => {
        process()
    }, waitTime);
}

function onSelectionChanged() {
    process()
}

function process() {
    var input = document.getElementById('value')
    var type = getType()
    if (type === 'isPrime') {
        updateText(isPrime(input.value))
    } else {
        updateText(isFibonacci(input.value))
    }
}

function getType() {
    var typeSelector = document.getElementById('typeSelection')
    console.log(typeSelector.value)
}

function updateText(text) {
    var right = document.getElementById('right')
    right.innerHTML = text;
}


function isSquare(x) {
    var s = parseInt(Math.sqrt(x));
    return (s * s == x);
}


function isFibonacci(value) {
    return isSquare(5 * (value * value) - 4) || isSquare(5 * (value * value) + 4);
}

function isPrime(value) {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
}