const Move = require("./move");
const readline = require("readline");
const winningSequences = require("./winningSequences.js");


class Round {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    // this.round = 0; // in case of round implementation
    this.winningSequences = winningSequences;
    this.move = new Move();
  }

  playRound() {
    if (this.move.movesCounter >= 9) return;
    console.log("")
    // determine which player's turn it is
    const player = this.move.movesCounter % 2 === 0 ? "Player1" : "Player2";
    // ask the player to make a move
    this.rl.question(`${player}, make your move, choose a number: `, (playerInput) => {
      console.log([`${player}`] + " has chosen:", playerInput);
      // add the player's move to the game board
      this.move.addMove(player, playerInput);
      // if the game is over, display the result and close the readline interface
      if (this.move.movesCounter === 9 || this.player1WinChecker() || this.player2WinChecker()) {
        // this.round++; // in case of round implementation
        this.displayResult();
        this.rl.close();
      } else {
        console.log("________________________")
        console.log("");
        this.move.grid.printReferenceGrid();
        this.playRound();
      }
    });
  }

  player1WinChecker() {
    const player1Moves = this.move.movesList
      .filter((singleMove) => singleMove.player === "Player1")
      .map((player1Move) => player1Move.move);
    for (const sequence of this.winningSequences) {
      const isWinningSequence = sequence.every((number) =>
        player1Moves.includes(number)
      );
      if (isWinningSequence) {
        return true;
      }
    }
  }

  player2WinChecker() {
    const player2Moves = this.move.movesList
      .filter((singleMove) => singleMove.player === "Player2")
      .map((player2Move) => player2Move.move);
    for (const sequence of this.winningSequences) {
      const isWinningSequence = sequence.every((number) =>
        player2Moves.includes(number)
      );
      if (isWinningSequence) {
        return true;
      }
    }
  }

  displayResult() {
    if(!this.player1WinChecker() && !this.player2WinChecker()) {
      console.log("It's a draw!");
    } else if(this.player1WinChecker() && !this.player2WinChecker()) {
      console.log("")
      console.log("Congrats Player1, you win!");
      // console.log("Round:", this.round); // in case of round implementation
    } else if(!this.player1WinChecker() && this.player2WinChecker()) {
      console.log("")
      console.log("Congrats Player2, you win!");
      // console.log("Round:", this.round); // in case of round implementation
    }
  }
}

module.exports = Round;
