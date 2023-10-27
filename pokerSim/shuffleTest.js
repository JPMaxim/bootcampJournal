// ============================================================================
// Shuffle Standard 52 card deck
// ============================================================================

// Create array for deck of cards
const deck = [
"aceSpades", "twoSpades", "threeSpades", "fourSpades", "fiveSpades", "sixSpades", "sevenSpades", "eightSpades", "nineSpades", "tenSpades", "jackSpades", "queenSpades", "kingSpades", 
"aceHearts", "twoHearts", "threeHearts", "fourHearts", "fiveHearts", "sixHearts", "sevenHearts", "eightHearts", "nineHearts", "tenHearts", "jackHearts", "queenHearts", "kingHearts",
"aceClubs", "twoClubs", "threeClubs", "fourClubs", "fiveClubs", "sixClubs", "sevenClubs", "eightClubs", "nineClubs", "tenClubs", "jackClubs", "queenClubs", "kingClubs",
"aceDiamonds", "twoDiamonds", "threeDiamonds", "fourDiamonds", "fiveDiamonds", "sixDiamonds", "sevenDiamonds", "eightDiamonds", "nineDiamonds", "tenDiamonds", "jackDiamonds", "queenDiamonds", "kingDiamonds"
];
const deck2 = [];

//Shuffle by pushing a random card from deck to deck2 and then popping it from deck
const shuffleFunc = () => {
    for (shuffleI = 0; shuffleI < 52; shuffleI++) {
        //random integer between 0 and 51, then 0-50, then 49... until 0
        let x = Math.floor(Math.random() * (52 - shuffleI)) 
        // take a random card from deck and put it in deck2
        deck2.push(deck[x]);
        deck.splice(x,1)  
    }
    //swap deck and deck2 so it's reset for next shuffle
    while (deck2.length != 0) {
        deck.push(deck2[0]);
        deck2.splice(0,1);
    } 
}

// ============================================================================
//Test if it's a fair shuffle
// ============================================================================

//Any card should be AceSpades 1.923076923076923...% of the time
let occurences = []
let percentage;
let iterations = 100000;
for (testI=0; testI < iterations; testI++) {
    shuffleFunc(); 
    //consider card 44   
    if (deck[43] == "aceSpades"){
        occurences.push(deck[43])
    }
}
percentage = occurences.length / iterations * 100

//result
console.log(`Card 44 was the Ace of Spades ${occurences.length} times.
There were ${iterations} iterations.
Card 44 was the Ace of Spades ${percentage}% of the time`)

