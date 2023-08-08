class Grid {
  constructor() {
    this.gridLine = "-".repeat(11);
    const emptyCell = "   ";
    this.verticalSeparator = "|";
    this.square1 = emptyCell + this.verticalSeparator;
    this.square2 = emptyCell + this.verticalSeparator;
    this.square3 = emptyCell;
    this.square4 = emptyCell + this.verticalSeparator;
    this.square5 = emptyCell + this.verticalSeparator;
    this.square6 = emptyCell;
    this.square7 = emptyCell + this.verticalSeparator;
    this.square8 = emptyCell + this.verticalSeparator;
    this.square9 = emptyCell;
    this.ref1 = 1;
    this.ref2 = 2;
    this.ref3 = 3;
    this.ref4 = 4;
    this.ref5 = 5;
    this.ref6 = 6;
    this.ref7 = 7;
    this.ref8 = 8;
    this.ref9 = 9;
  }

  printGrid() {
    console.log(this.square1 + this.square2 + this.square3);
    console.log(this.gridLine);
    console.log(this.square4 + this.square5 + this.square6);
    console.log(this.gridLine);
    console.log(this.square7 + this.square8 + this.square9);
  }

  printReferenceGrid() {
    console.log("")
    console.log("Player1 has 'X' - Player2 has 'O'")
    console.log("")
    console.log("Available choices:")
    console.log("")
    console.log(` ${this.ref1} | ${this.ref2} | ${this.ref3} `);
    console.log(this.gridLine);
    console.log(` ${this.ref4} | ${this.ref5} | ${this.ref6} `);
    console.log(this.gridLine);
    console.log(` ${this.ref7} | ${this.ref8} | ${this.ref9} `);
  }

  fillSquare(playerMove) {
    if(playerMove.player === "Player1") {
      this[`square${playerMove.move}`] = " X "  + this[`square${playerMove.move}`].substring(3);
      this[`ref${playerMove.move}`] = "/";
    } else if(playerMove.player === "Player2") {
      this[`square${playerMove.move}`] = " O "  + this[`square${playerMove.move}`].substring(3);
      this[`ref${playerMove.move}`] = "/";
    }
  }
}

module.exports = Grid;
