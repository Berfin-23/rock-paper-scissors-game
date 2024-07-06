**#Features**
**Interactive Gameplay:** Play the classic Rock, Paper, Scissors game with real-time score updates.
**Responsive Design:** The game adapts to both light and dark modes based on your system preferences.
**Persistent Score Tracking:** Scores are saved using localStorage, so you can pick up where you left off even after refreshing the page.


**#Technologies Used**
**HTML:** Structure and layout of the game.
**CSS:** Styling and responsiveness.
**JavaScript:** Game logic, DOM manipulation, and localStorage handling.


**#How to Play**
1) Clone the repository to your local machine.
2) Open index.html in your browser.
3) Click on Rock, Paper, or Scissors to make your move.
4) The game will display the results and update the scores accordingly.
5) Click the "Reset" button to reset the scores.

   
**#Code Overview**
**HTML**
The HTML file (index.html) contains the structure of the game, including buttons for each move, a section to display the results, and score counters.

**CSS**
The CSS file (styles.css) styles the game, including responsiveness for light and dark modes, button styling, and text alignment.

**JavaScript**
The JavaScript file (script.js) contains the game logic:
1) Choices: An array of possible moves (Rock, Paper, Scissors).
2) getComputerChoice: Function to generate a random move for the computer.
3) determineWinner: Function to determine the winner based on the player's and computer's choices.
4) play: Function to handle the player's move, update the scores, and display the results.
5) reset: Function to reset the scores.
6) updateScores: Function to update the displayed scores and results.
7) saveScores: Function to save the scores to localStorage.

   
**#Installation**
1) git clone 
2) cd rock-paper-scissors-game
3) Open index.html in your preferred browser to start playing.
   
**#Contributing**
If you have any suggestions or improvements, feel free to fork the repository and submit a pull request. Feedback and suggestions are always welcome!

**#License**
This project is licensed under the MIT License. See the LICENSE file for details.

**#Acknowledgment**
This project was inspired by the classic Rock, Paper, Scissors game.
