class Grid {
  constructor() {
    this.gridLine = "-".repeat(11);
    const emptyCell = "   ";
    const verticalSeparator = "|";
    this.square1 = emptyCell + verticalSeparator;
    this.square2 = emptyCell + verticalSeparator;
    this.square3 = emptyCell;
    this.square4 = emptyCell + verticalSeparator;
    this.square5 = emptyCell + verticalSeparator;
    this.square6 = emptyCell;
    this.square7 = emptyCell + verticalSeparator;
    this.square8 = emptyCell + verticalSeparator;
    this.square9 = emptyCell;
  }

  printGrid() {
    console.log(this.square1 + this.square2 + this.square3);
    console.log(this.gridLine);
    console.log(this.square4 + this.square5 + this.square6);
    console.log(this.gridLine);
    console.log(this.square7 + this.square8 + this.square9);
  }

  printReferenceGrid() {
    let squareNum = 0;
    console.log(` ${squareNum + 1} | ${squareNum + 2} | ${squareNum + 3} `);
    console.log(this.gridLine);
    console.log(` ${squareNum + 4} | ${squareNum + 5} | ${squareNum + 6} `);
    console.log(this.gridLine);
    console.log(` ${squareNum + 7} | ${squareNum + 8} | ${squareNum + 9} `);
  }
}

const grid = new Grid();
grid.printGrid();
grid.printReferenceGrid();

module.exports = Grid;
