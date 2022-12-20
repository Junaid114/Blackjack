
let cards = []
let sum = 0;
let BlackJack = false;
let isAlive = false;
let message = '';

let msg = document.getElementById('message-el');
let Sum = document.getElementById('Sum');
let cardEl = document.getElementById('card');
let playerEl = document.getElementById('player');

let player = {
    name: 'Jhon',
    chips: 145
}
playerEl.textContent = player.name + ": $" + player.chips

function getrandom() {

    let randomnumber = Math.floor(Math.random() * 13) + 1;
    if (randomnumber == 1) {
        return 11
    } else if (randomnumber > 10) {
        return 10
    }
    return randomnumber
}
function startgame() {
    isAlive = true;
    let firstCard = getrandom();
    let lastCard = getrandom();
    cards = [firstCard, lastCard]
    sum = firstCard + lastCard;
    rendergame()

}
function rendergame() {

    cardEl.textContent = 'Cards:'

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    Sum.textContent = 'Sum:' + sum;
    if (sum < 21) {
        message = 'Do you want to draw  new card ?';

    } else if (sum === 21) {
        message = 'woho! you got BlackJack';
        BlackJack = true;


    } else if (sum > 21) {
        message = 'you out of the game';
        isAlive = false;

    }
    msg.textContent = message


}

function New() {

    if (isAlive === true && BlackJack === false) {
        let card = getrandom()
        sum += card
        cards.push(card)
        rendergame();
    }

}


