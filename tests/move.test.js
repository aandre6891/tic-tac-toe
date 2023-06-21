const Move = require('../src/move');

describe("Move", () => {
  test("initially it's the move 1", () => {
    const move = new Move();
    expect(move.movesCounter).toBe(1);
  });

  test("initially the array of moves is empty", () => {
    const move = new Move();
    expect(move.moves).toEqual([]);
  })

  test("when you play a move the number of moves increases", () => {
    const move = new Move();
    move.addMove();
    expect(move.movesCounter).toBe(2);
  });
});

