* Specifications

* Score at start of the game is 0 for both players.
  * Example Input: page loads
  * Example Output: Player 1 score = 0, Player 2 score = 0


* First player rolls die; random value between 1 & 6 is returned
  * Example Input: Submit  
  * Example Output: 4

* If random integer = 1, player 1 score = 0, & second player rolls die    
  * Example Input: 1
  * Example Output: Score = score + 0; player 2's turn

* Second player rolls die; random value between 1 & 6 is returned
  * Example Input: Submit
  * Example Output: 6

* If random integer = 1, player 2 score = 0; first player rolls die
  * Example Input: 1
  * Example Output: Score = 0; player 1's turn

* If random integer is not 1, add integer to player 1's score; player chooses to "hold" or "roll"
  * Example Input: 2
  * Example Output: score = score + 2, show "hold" & "roll" as options

* If player chooses "hold" score remains the same; next player rolls die
  * Example Input: hold
  * Example Output: score = score; player 2's turn

* If random number does not = 1, add number to player's score and show "roll" and "hold" buttons.
  * Example Input: 3
  * Example Output: score = score + 3, show "roll" and "hold"
