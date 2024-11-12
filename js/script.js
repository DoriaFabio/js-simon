const ListaNumeri = document.getElementById("numbers-list");
const countdown = document.getElementById("countdown");
const formAnswer = document.getElementById("answers-form");
const message = document.getElementById("message");
const instruction = document.getElementById("instructions");
const button = document.querySelector("button");
let userNumber = [];
let numberGuess = [];
let elementiCom = [];

// countdown
let seconds = 5;
const timer = setInterval(function () {
    if (seconds > 3) {
        countdown.innerHTML = seconds--;
    } else if (seconds <= 3 && seconds > 0) {
        if(seconds == 3) {
            countdown.classList.add("countRed");
            countdown.classList.remove("text-white");
            console.log(countdown);
        }
        countdown.innerHTML = seconds--;
    } else {
        clearInterval(timer);
        formAnswer.classList.remove("d-none");
        ListaNumeri.remove();
        countdown.remove();
        instruction.innerHTML = "Digita i numeri";
    }
}, 1000);

// lista numeri
function appendLi() {
    // for (let i = 0; i < 5; i++) {
    //     let newLi = document.createElement("li");
    //     newLi.textContent = random(1, 100);
    //     ListaNumeri.appendChild(newLi);
    //     numberGuess.push(newLi.textContent);
    // }
    while (numberGuess.length < 5) {
        let newLi = document.createElement("li");
        newLi.textContent = random(1, 100);
        console.log(newLi.textContent);
        if (!numberGuess.includes(newLi.textContent)) {
            numberGuess.push(newLi.textContent);
            ListaNumeri.appendChild(newLi);
        }
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

// form
formAnswer.addEventListener("submit", function (event) {
    event.preventDefault();
    let counter = 0;
    inputs();
    for (let i = 0; i < userNumber.length; i++) {
        if (numberGuess.includes(userNumber[i])) {
            elementiCom.push(userNumber[i]);
            counter++;
        }
    }
    console.log(message);
    message.innerHTML = "Hai indovinato " + counter + " numeri: " + elementiCom;
    button.disabled = true;
});


