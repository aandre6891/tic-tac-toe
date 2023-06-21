const Grid = require('../src/grid');

describe('Grid', () => {
  it('should initially return a grid with empty squares', () => {
    const grid = new Grid();
    const spyConsole = jest.spyOn(console, 'log');
    grid.printGrid();
    expect(spyConsole).toHaveBeenCalledTimes(5);
    expect(spyConsole).toHaveBeenCalledWith("   |   |   ");
    expect(spyConsole).toHaveBeenCalledWith("-----------");
    expect(spyConsole).toHaveBeenCalledWith("   |   |   ");
    expect(spyConsole).toHaveBeenCalledWith("-----------");
    expect(spyConsole).toHaveBeenCalledWith("   |   |   ");  
  })
})