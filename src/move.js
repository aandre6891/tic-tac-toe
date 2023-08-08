const Grid = require('./grid');
// const Round = require('./round');

class Move {
  constructor() {
    this.movesCounter = 0;
    this.movesList = [];
    this.grid = new Grid();
  }
  
  addMove(player, move) {
    const playerMove = {
      player: player,
      move: move,
    }
    this.grid.fillSquare(playerMove);
    this.movesList.push(playerMove);
    console.log("");
    console.log("///////////////////////////////////////////////////")
    console.log("Current situation:");
    console.log("");
    this.grid.printGrid();
    this.movesCounter++;
  }
}

module.exports = Move;
