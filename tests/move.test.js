const Move = require('../src/move');

describe("Move", () => {
  test("initially it's the move 1", () => {
    const move = new Move();
    expect(move.movesCounter).toBe(0);
  });

  test("initially the array of moves is empty", () => {
    const move = new Move();
    expect(move.movesList).toEqual([]);
  })

  test("when you make a move the number of moves increases", () => {
    const move = new Move();
    move.addMove();
    expect(move.movesCounter).toBe(1);
  });

  test("when you make a move the array should include the move of the player", () => {
    const move = new Move();
    move.addMove("player1", 1);
    expect(move.movesList).toEqual([{player: "player1", move: 1}])
  })
});
