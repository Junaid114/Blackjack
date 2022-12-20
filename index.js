
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
    console.log(firstCard)
    console.log(lastCard)
    // console.log(rendergame())
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
        console.log(BlackJack)

    } else if (sum > 21) {
        message = 'you out of the game';
        isAlive = false;

    }
    console.log(BlackJack)
    console.log(message)
    console.log(isAlive)
    msg.textContent = message


}

function New() {

    if (isAlive === true && BlackJack === false) {
        let card = getrandom()
        sum += card
        cards.push(card)
        console.log(cards)
        rendergame();
    }

}




// console.log(arr.length)
// console.log(arr[1])
// console.log(arr[0])

// let arr = ['Junaid', 20, true]
// console.log(arr)

// let message = "I'm New Here";

// arr.push(message)

// console.log(arr)


// arr.pop()
// console.log(arr)