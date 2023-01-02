/*
Counting Cards
In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	            2, 3, 4, 5, 6
0	            7, 8, 9
-1	            10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array. 
Do NOT include quotes (single or double) in the output.
*/

//setup
let count = 0;

function cc(card) {
  // Only change code below this line
  if (typeof card === "number") {
    if ([2, 3, 4, 5, 6].includes(card)) {
      count += 1;
    } else if ([7, 8, 9].includes(card)) {
      count += 0;
    } else if (card === 10) {
      count -= 1;
    }
  } else if (typeof card == "string" && ["J", "Q", "K", "A"].includes(card)) {
    count -= 1;
  }

  return count > 0 ? count.toString() + " Bet" : count.toString() + " Hold";
  // Only change code above this line
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("K"));
console.log(cc("A"));
