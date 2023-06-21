const Grid = require("../src/grid");

describe("Grid", () => {
  test("should initially return a grid with empty squares", () => {
    const grid = new Grid();
    const spyConsole = jest.spyOn(console, "log");
    grid.printGrid();
    expect(spyConsole).toHaveBeenCalledTimes(5);
    expect(spyConsole).toHaveBeenCalledWith("   |   |   ");
    expect(spyConsole).toHaveBeenCalledWith("-----------");
    expect(spyConsole).toHaveBeenCalledWith("   |   |   ");
    expect(spyConsole).toHaveBeenCalledWith("-----------");
    expect(spyConsole).toHaveBeenCalledWith("   |   |   ");
  });

  test("if called printReferenceGrid() displays a grid with the number of each square", () => {
    const grid = new Grid();
    const spyConsole = jest.spyOn(console, "log");
    grid.printReferenceGrid();
    expect(spyConsole).toHaveBeenCalledWith(" 1 | 2 | 3 ");
    expect(spyConsole).toHaveBeenCalledWith("-----------");
    expect(spyConsole).toHaveBeenCalledWith(" 4 | 5 | 6 ");
    expect(spyConsole).toHaveBeenCalledWith("-----------");
    expect(spyConsole).toHaveBeenCalledWith(" 7 | 8 | 9 ");
  });
});
