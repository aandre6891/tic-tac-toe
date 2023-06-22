const Move = require("./move");
const readline = require("readline");
const winningSequences = require('./winningSequences.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


class Round {
  constructor() {
    this.round = 0;
    this.winningSequences = winningSequences;
    this.move = new Move();
  }

  playRound() {
    if (this.move.movesCounter < 9) {
      rl.question("Player 1, make your move: ", (playerInput) => {
        console.log("Input dell'utente:", playerInput);
        this.move.addMove("Player1", playerInput);
        if (this.move.movesCounter === 9) {
          this.displayResult();
        } else {
          rl.question("Player 2, make your move: ", (playerInput) => {
            console.log("Input dell'utente:", playerInput);
            this.move.addMove("Player2", playerInput);
            this.playRound();
          });
        }
      });
    } else {
      this.displayResult();
    }
  }

  player1WinChecker() {
    const player1Moves = this.move.movesList.filter((singleMove) => singleMove.player === "Player1").map((player1Move) => player1Move.move);
    for (const sequence of this.winningSequences) {
      const isWinningSequence = sequence.every((number) => player1Moves.includes(number));
      if (isWinningSequence) {
        return true;
      } 
    }
    return false;
  }
  
  player2WinChecker() {
    const player2Moves = this.move.movesList.filter((singleMove) => singleMove.player === "Player2").map((player2Move) => player2Move.move);
    for (const sequence of this.winningSequences) {
      const isWinningSequence = sequence.every((number) => player2Moves.includes(number));
      if (isWinningSequence) {
        return true;
      }
    }
    return false; 
  }
  
  displayResult() {
    rl.close();
    this.round++ 
    console.log(this.player1WinChecker())
    console.log(this.player2WinChecker())
    console.log("Round:", this.round);
  }
}

const round = new Round();
round.playRound();

module.exports = Round;
