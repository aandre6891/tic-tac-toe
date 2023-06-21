class Move {
  constructor() {
    this.movesCounter = 0;
    this.movesList = [];
  }

  addMove(player, move) {
    const playerMove = {
      player: player,
      move: move,
    }
    this.movesList.push(playerMove);
    this.movesCounter++;
  }
}

module.exports = Move;
