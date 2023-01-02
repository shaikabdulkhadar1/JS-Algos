/*
Counting Cards
In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

Sample Tests
Your function should return a value for count and the text (Bet or Hold) with one space character between them.
Sequence 2, 3, 4, 5, 6 should return the string 5 Bet
Sequence 7, 8, 9 should return the string 0 Hold
Sequence 10, J, Q, K, A should return the string -5 Hold
Sequence 3, 7, Q, 8, A should return the string -1 Hold
Sequence 2, J, 9, 2, 7 should return the string 1 Bet
Sequence 2, 2, 10 should return the string 1 Bet
Sequence 3, 2, A, 10, K should return the string -1 Hold 
*/
const prompt = require("prompt-sync")({ sigint: true });

const pos = [2, 3, 4, 5, 6];
const zer = [7, 8, 9];
const neg = [10, "J", "Q", "K", "A"];

let count = 0;
const inp = [10, "J", "Q", "K", "A"];

console.log(CountingCard(inp));

function CountingCard(inp) {
  let ans = "";
  inp.forEach((e) => {
    if (Number.isInteger(e) && pos.includes(e)) {
      count += 1;
    } else if (Number.isInteger(e) && zer.includes(e)) {
      count += 0;
    } else if (Number.isInteger(e) && neg.includes(e)) {
      count -= 1;
    } else if (typeof e === "string" && neg.includes(e)) {
      count -= 1;
    }
  });
  if (count > 0) {
    ans += count.toString() + " Bet";
  } else {
    ans += count.toString() + " Hold";
  }

  return ans;
}
