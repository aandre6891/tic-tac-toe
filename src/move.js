class Move {
  constructor() {
    this.movesCounter = 1;
    this.moves = [];
  }

  addMove(player, move) {
    const playerMove = {
      player: player,
      move: move,
    }
    this.moves.push(playerMove);
    this.movesCounter++;
  }
}

module.exports = Move;
