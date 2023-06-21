const Player = require("../src/player");

describe("Player", () => {
  it("initially the players are not assigned", () => {
    const player = new Player();
    expect(player.player1).toBe("");
    expect(player.player2).toBe("");
  });

  it("players are correctly assigned", () => {
    const player1 = new Player();
    const player2 = new Player();
    player1.setPlayer1Name("Andrea");
    player2.setPlayer2Name("Chiara");

    expect(player1.player1).toBe("Andrea");
    expect(player2.player2).toBe("Chiara");
  });
});
