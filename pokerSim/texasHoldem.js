const deck = [
    "aceSpades", "twoSpades", "threeSpades", "fourSpades", "fiveSpades", "sixSpades", "sevenSpades", "eightSpades", "nineSpades", "tenSpades", "jackSpades", "queenSpades", "kingSpades", 
    "aceHearts", "twoHearts", "threeHearts", "fourHearts", "fiveHearts", "sixHearts", "sevenHearts", "eightHearts", "nineHearts", "tenHearts", "jackHearts", "queenHearts", "kingHearts",
    "aceClubs", "twoClubs", "threeClubs", "fourClubs", "fiveClubs", "sixClubs", "sevenClubs", "eightClubs", "nineClubs", "tenClubs", "jackClubs", "queenClubs", "kingClubs",
    "aceDiamonds", "twoDiamonds", "threeDiamonds", "fourDiamonds", "fiveDiamonds", "sixDiamonds", "sevenDiamonds", "eightDiamonds", "nineDiamonds", "tenDiamonds", "jackDiamonds", "queenDiamonds", "kingDiamonds"
];
/* -----------------------------
Deal 
----------------------------- */



/* -----------------------------
What's gonna happen is the deal() function is gonna deal all cards to players, community cards and muck, and then other functions will reveal them later down the line
----------------------------- */
const player1Cards = [];
const player2Cards = [];
const player3Cards = [];
const player4Cards = [];
const communityCards = []
const muck = [];

function deal() {
    // players hands
    for (i=0; i<2; i++) {
        //player 1 gains card from deck
        player1Cards.push(deck[0]);
        deck.splice(0,1);
        //player 2 gains card from deck
        player2Cards.push(deck[0]);
        deck.splice(0,1);
        //player 3 gains card from deck
        player3Cards.push(deck[0]);
        deck.splice(0,1);
        //player 4 gains card from deck
        player4Cards.push(deck[0]);
        deck.splice(0,1);
    };
    // burn
    muck.push(deck[0]);        
    deck.splice(0,1);
    // flop
    for (j=0; j<3; j++) {
        communityCards.push(deck[0]);        
        deck.splice(0,1);
    }
    // burn
    muck.push(deck[0]);        
    deck.splice(0,1);
    // turn
    communityCards.push(deck[0]);        
    deck.splice(0,1);
    // burn
    muck.push(deck[0]);        
    deck.splice(0,1);
    // river
    communityCards.push(deck[0]);        
    deck.splice(0,1);

    // update DOM
    // player 1 card 1
    document.getElementById("player1Card1").style.backgroundImage = "url('./images/" + player1Cards[0] + ".png')";
    // player 1 card 2
    document.getElementById("player1Card2").style.backgroundImage = "url('./images/" + player1Cards[1] + ".png')";
    // player 2 card 1
    document.getElementById("player2Card1").style.backgroundImage = "url('./images/cardBack.jpg')";
    // player 2 card 2
    document.getElementById("player2Card2").style.backgroundImage = "url('./images/cardBack.jpg')";
    // player 3 card 1
    document.getElementById("player3Card1").style.backgroundImage = "url('./images/cardBack.jpg')";
    // player 3 card 2
    document.getElementById("player3Card2").style.backgroundImage = "url('./images/cardBack.jpg')";
    // player 4 card 1
    document.getElementById("player4Card1").style.backgroundImage = "url('./images/cardBack.jpg')";
    // player 4 card 2
    document.getElementById("player4Card2").style.backgroundImage = "url('./images/cardBack.jpg')";
}

//show flop
function flop() {
    // change muck
    document.getElementById("muck").style.backgroundImage = "url('./images/cardBack.jpg')";
    // change flop
    document.getElementById("commCard1").style.backgroundImage = "url('./images/" + communityCards[0] + ".png')";
    document.getElementById("commCard2").style.backgroundImage = "url('./images/" + communityCards[1] + ".png')";
    document.getElementById("commCard3").style.backgroundImage = "url('./images/" + communityCards[2] + ".png')";
}
//show turn
function turn() {
    document.getElementById("commCard4").style.backgroundImage = "url('./images/" + communityCards[3] + ".png')";
}
//show river
function river() {
    document.getElementById("commCard5").style.backgroundImage = "url('./images/" + communityCards[4] + ".png')";
}
// burn a card
const burnCard = () => {
    muck.push(deck[0]);
    deck.splice(0,1);
}

//Stacks
let player1ChipCount = 1000;
let player2ChipCount = 1000;
let player3ChipCount = 1000;
let player4ChipCount = 1000;

//Bets
let player1Bet;
let player2Bet;
let player3Bet;
let player4Bet;

//Pot
let pot;

//Current Action
let action;
//something like: if (action == "player1" {getElement(player1ActionUI) display:default} else{display:none})

// Fold, Call and Check
//P1
const player1Fold = () => {
    for (i=0;i<2;i++) {
        muck.push(player1Cards[i]);
        player1Cards.slice(0,1)
    }
    action = "player 2";
}

const player1Call = () => {
    if (player2Bet >= player3Bet && player2Bet >= player4Bet) {//if player 2 has the highest chipcount
        player1ChipCount -= (player2Bet - player1Bet);
        player1Bet = player2Bet;
        
        
        
        
        
        
        
        
        
        
        
        
        // CURRENT PLACE
        
    } else if (player3Bet >= player2Bet && player3Bet >= player4Bet) {//if player 3 has the highest chipcount

    } else if (player4Bet >= player3Bet && player4Bet >= player2Bet) {//if player 4 has the highest chipcount

    }
}

//P2
const player2Fold = () => {
    for (i=0;i<2;i++) {
        muck.push(player2Cards[i]);
        player2Cards.slice(0,1)
    }
    action = "player 3";
}
//P3
const player3Fold = () => {
    for (i=0;i<2;i++) {
        muck.push(player3Cards[i]);
        player3Cards.slice(0,1)
    }
    action = "player 4";
}
//P4
const player4Fold = () => {
    for (i=0;i<2;i++) {
        muck.push(player4Cards[i]);
        player4Cards.slice(0,1)
    }
    action = "player 1";
}