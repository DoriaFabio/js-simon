const ListaNumeri = document.getElementById("numbers-list");
const countdown = document.getElementById("countdown");
const formAnswer = document.getElementById("answers-form");
let userNumber = [];
let randomNumber = [];

// countdown
let seconds = 10;
const timer = setInterval(function () {
    if (seconds > 0) {
        countdown.innerHTML = seconds;
    } else {
        clearInterval(timer);
    }
}, 1000);

// lista numeri
function appendLi() {
    for(let i = 0; i < 5; i++) {
        let numR = random(1, 100);
        randomNumber.push(numR);  
        console.log(randomNumber);
    }
}

appendLi();

function inputs() {
    const input = document.querySelectorAll("input");
    for (let i = 0; i < input.length; i++) {
        userNumber.push(input[i].value);
    }
}

