const readline = require('readline');
const Round = require("../src/round");

jest.mock('readline');  
  test("initially the round is 0", () => {
    const round = new Round();
    expect(round.round).toBe(0);
  });
  
  test('should call rl.question() with the correct message', () => {
    const rlMock = {
      question: jest.fn(),
      close: jest.fn(),
    };
    
    readline.createInterface = jest.fn().mockReturnValue(rlMock);
    const round = new Round();
    round.playRound(rlMock);
    expect(rlMock.question).toHaveBeenCalledWith("Player1, make your move: ");
    expect(rlMock.close).toHaveBeenCalled();
  });
  
  test("player1WinChecker should return true and player2WinChecker should return false", () => {
    const mockMove = jest.fn().mockImplementation(() => ({
      movesList: [
        { player: "Player1", move: "2" }, // winning combination
        { player: "Player2", move: "7" },
        { player: "Player1", move: "1" }, // winning combination
        { player: "Player2", move: "5" },
        { player: "Player1", move: "3" }, // winning combination
        { player: "Player2", move: "6" },
        { player: "Player1", move: "4" },
        { player: "Player2", move: "8" },
        { player: "Player1", move: "9" },
      ],
    }));

    const round = new Round();
    round.move = mockMove();
    const response1 = round.player1WinChecker();
    expect(response1).toBe("Player 1 wins!");
    const response2 = round.player2WinChecker();
    expect(response2).toBe("");
  
  });

  test("both players should win", () => {
    const mockMove = jest.fn().mockImplementation(() => ({
      movesList: [
        { player: "Player1", move: "4" }, // winning combination Player1
        { player: "Player2", move: "9" },  // winning combination Player2
        { player: "Player1", move: "2" },
        { player: "Player2", move: "3" },  // winning combination Player2
        { player: "Player1", move: "1" }, // winning combination Player1
        { player: "Player2", move: "5" },
        { player: "Player1", move: "7" }, // winning combination Player1
        { player: "Player2", move: "6" },  // winning combination Player2
        { player: "Player1", move: "8" },
      ],
    }));

    const round = new Round();
    round.move = mockMove();
    const response1 = round.player1WinChecker();
    expect(response1).toBe("Player 1 wins!");
    const response2 = round.player2WinChecker();
    expect(response2).toBe("Player 2 wins!");
  });
  
  test("only player2WinChecker should return true", () => {
    const mockMove = jest.fn().mockImplementation(() => ({
      movesList: [
        { player: "Player1", move: "1" },
        { player: "Player2", move: "8" },  // winning combination Player2
        { player: "Player1", move: "6" },
        { player: "Player2", move: "9" }, 
        { player: "Player1", move: "3" },
        { player: "Player2", move: "5" },  // winning combination Player2
        { player: "Player1", move: "7" }, 
        { player: "Player2", move: "2" },  // winning combination Player2
        { player: "Player1", move: "4" },
      ],
    }));

    const round = new Round();
    round.move = mockMove();
    const response1 = round.player1WinChecker();
    expect(response1).toBe("Player 1 wins!");
    const response2 = round.player2WinChecker();
    expect(response2).toBe("Player 2 wins!");
  });
