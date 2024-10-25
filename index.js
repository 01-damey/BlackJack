let btnStartEL = document.getElementById("btn-start");
let cardsEL = document.getElementById("cards-el");
let sumEL= document.getElementById("sum-el");
let btnNewEL = document.getElementById("btn-new");
let firstCard = "";
let secondCard = "";

function getRandomCard(){
    let a = Math.floor((Math.random() * 13 + 1));
    return a;
}

let cards = [];


btnStartEL.addEventListener("click", function startGame(){
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    let sum=0;
    cards = [firstCard, secondCard];
    for (let i=0; i<cards.length; i++){
    cardsEL.textContent += cards[i] + " ";
    sum += cards[i];
    }
    cardsEL.innerHTML = "Cards: " + cardsList;
    sumEL.innerHTML = "Sum: "+ sum;
})

function newCard(){
    let nCard = a;
    cards.Push(a);
    startGame();
}
