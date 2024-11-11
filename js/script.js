const ListaNumeri = document.getElementById("numbers-list");
const countdown = document.getElementById("countdown");
const formAnswer = document.getElementById("answers-form");
const message = document.getElementById("message");
let userNumber = [];
let numberGuess = [];

// countdown
let seconds = 10;
const timer = setInterval(function () {
    if (seconds > 0) {
        countdown.innerHTML = seconds;
    } else {
        clearInterval(timer);
        formAnswer.classList.remove("d-none");
        ListaNumeri.remove();
        countdown.remove();
    }
}, 1000);

// lista numeri
function appendLi() {
    for(let i = 0; i < 5; i++) {
        let newLi = document.createElement("li");
        newLi.textContent = random(1, 100);
        ListaNumeri.appendChild(newLi);
        numberGuess.push(newLi.textContent);
    }
}
appendLi();

// input numeri
function inputs() {
    const input = document.querySelectorAll("input");
    for (let i = 0; i < input.length; i++) {
        userNumber.push(input[i].value);
    }
}



