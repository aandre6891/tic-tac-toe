# Tic Tac Toe Game

Welcome to the Tic Tac Toe Game project! This README provides instructions on how to clone the project, install dependencies, and start playing the game. Additionally, it covers the project structure, game rules, and how the different components interact.

## Table of Contents

- [Getting Started](#getting-started)
- [Cloning the Repository](#cloning-the-repository)
- [Installing Dependencies](#installing-dependencies)
- [Playing the Game](#playing-the-game)
- [Project Structure](#project-structure)
- [Game Rules](#game-rules)
- [Contributions](#contributions)

## Getting Started

### Cloning the Repository

To get started, clone the repository to your local machine using the following command:

```sh
git clone https://github.com/aandre6891/tic-tac-toe
```

### Installing Dependencies

Before you can play the game, ensure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

Navigate to the project directory using your terminal:

```sh
cd tic-tac-toe
```

Install the required dependencies using npm (Node Package Manager):

```sh
npm install
```

### Playing the Game

Once the dependencies are installed, you can start the game by running the following command:

```sh
node src/game.js
```

Follow the on-screen prompts to make your moves and play Tic Tac Toe! This game is made to be played in the terminal.

## Project Structure

The project consists of several JavaScript files, each responsible for different aspects of the game:

- `game.js`: The main script that initializes the game, manages player interactions, and orchestrates rounds.
- `grid.js`: Defines the `Grid` class for displaying the game board and handling player moves.
- `move.js`: Contains the `Move` class, which tracks player moves and updates the game board.
- `player.js`: Defines the `Player` class to set and manage players.
- `round.js`: Implements the `Round` class that handles player turns, validates winning conditions, and displays results.
- `winningSequences.js`: Contains the possible winning sequences on the game board.

## Game Rules

- The game is played on a 3x3 grid.
- Players take turns to place their symbols ("X" or "O") on empty cells.
- A player wins if they form a winning sequence of three symbols horizontally, vertically, or diagonally.
- If all cells are filled and no player has won, the game ends in a draw.

## Contributions

Contributions to the project are welcome! Feel free to submit issues or pull requests to suggest improvements or report problems.

---

Enjoy playing your Tic Tac Toe game! If you have any questions or need assistance, feel free to reach out to the project maintainers or check out the GitHub repository for more information.