const game = {
    choices: ['rock', 'paper', 'scissors'],
    yourPoints: parseInt(localStorage.getItem('yourPoints')) || 0,
    cpuPoints: parseInt(localStorage.getItem('cpuPoints')) || 0,
    tie: parseInt(localStorage.getItem('tie')) || 0,

    getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * this.choices.length);
        return this.choices[randomIndex];
    },

    determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            this.tie++;
            return 'tie';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            this.yourPoints++;
            return 'win';
        } else {
            this.cpuPoints++;
            return 'lose';
        }
    },

    play(userChoice) {
        const computerChoice = this.getComputerChoice();
        const result = this.determineWinner(userChoice, computerChoice);
        this.updateScores(result, userChoice, computerChoice);
        this.saveScores();
    },

    reset() {
        this.yourPoints = 0;
        this.cpuPoints = 0;
        this.tie = 0;
        this.updateScores();
        this.saveScores();
    },

    updateScores(result = '', userChoice = '', computerChoice = '') {
        document.getElementById('you').innerText = 'You: ' + this.yourPoints;
        document.getElementById('computer').innerText = 'Computer: ' + this.cpuPoints;
        document.getElementById('tie').innerText = 'Tie: ' + this.tie;

        let resultText = 'Make your move to start the game!';
        if (result === 'win') {
            resultText = `You won!`;
        } else if (result === 'lose') {
            resultText = `Computer won!`;
        } else if (result === 'tie') {
            resultText = `It's a tie!`;
        }
        document.getElementById('result').innerText = resultText;

        if (userChoice && computerChoice) {
            document.getElementById('moves').innerHTML = `You <img class="moves-icon" src="images/${userChoice}-emoji.png" alt="${userChoice}">
            <img class="moves-icon" src="images/${computerChoice}-emoji.png" alt="${computerChoice}"> Computer`;
        } else {
            document.getElementById('moves').innerText = '   ';
        }
    },

    saveScores() {
        localStorage.setItem('yourPoints', this.yourPoints);
        localStorage.setItem('cpuPoints', this.cpuPoints);
        localStorage.setItem('tie', this.tie);
    }
};

game.updateScores();
