const Round = require('./round');
const Grid = require('./grid');

round = new Round();
grid = new Grid();
grid.printReferenceGrid();

round.playRound();
