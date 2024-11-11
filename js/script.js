const ListaNumeri = document.getElementById("numbers-list");
const countdown = document.getElementById("countdown");
const formAnswer = document.getElementById("answers-form");
const message = document.getElementById("message");
const instruction = document.getElementById("instructions");
let userNumber = [];
let numberGuess = [];
let elementiCom = [];


// countdown
let seconds = 10;
const timer = setInterval(function () {
    if (seconds > 3) {
        countdown.innerHTML = seconds--;
    } else if (seconds <= 3 && seconds > 0) {
        countdown.innerHTML = seconds--;
        countdown.className = "countRed";
    } else {
        clearInterval(timer);
        formAnswer.classList.remove("d-none");
        ListaNumeri.remove();
        countdown.remove();
        instruction.innerHTML = "Digita i numeri"
    }
}, 1000);

// lista numeri
function appendLi() {
    for (let i = 0; i < 5; i++) {
        let newLi = document.createElement("li");
        newLi.textContent = random(1, 100);
        ListaNumeri.appendChild(newLi);
        numberGuess.push(newLi.textContent);
    }
    // let newLi = document.createElement("li");
    // while(ListaNumeri.length < 5){
    //     newLi.textContent = random(1, 100);
    //     ListaNumeri.appendChild(newLi);
    //     if (!numberGuess.includes(newLi.textContent)) {
    //         numberGuess.push(newLi.textContent);
    //       }
    // }
    // return numberGuess;
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
});

