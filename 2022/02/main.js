const fs = require("fs");

// Define the shapes.
const shapes = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors"
}

const outcomes = {
  0: "Lose",
  3: "Draw",
  6: "Win"
}

const gameOutcomes = {
  A: {
    X:3,
    Y:6,
    Z:0
  },
  B: {
    X:0,
    Y:3,
    Z:6
  },
  C: {
    X:6,
    Y:0,
    Z:3
  }
}

let   player1Score = 0,
      player2Score = 0;

/**
 * Score a single round of the game.
 * The winner of the whole tournament is the player with the highest score.
 * Your total score is the sum of your scores for each round.
 * The score for a single round is the score for the shape you selected
 * (1 for Rock, 2 for Paper, and 3 for Scissors)
 * plus the score for the outcome of the round
 * (0 if you lost, 3 if the round was a draw, and 6 if you won).
 *
 * @param {string} player1Shape The shape selected by player 1.
 * @param {string} player2Shape The shape selected by player 2.
 * @returns {number} The score for the round.
 */
function determineScore(player1Shape, player2Shape) {
  player2Score += shapeToNumber(player2Shape);
  player2Score += determineWinner(player1Shape, player2Shape);
  console.table(
    {
      "Player 1:": shapes[player1Shape],
      "Player 2:": shapes[player2Shape],
      "Outcome": outcomes[determineWinner(player1Shape, player2Shape)]
    }
  )
  return player2Score;
}

/**
 * Determine the winner of a round.
 * @param {string} player1Shape The shape selected by player 1.
 * @param {string} player2Shape The shape selected by player 2.
 * @returns {number} 0 for a loss, 3 for a draw, and 6 for a win.
 */
function determineWinner(player1Shape, player2Shape) {
  return gameOutcomes[player1Shape][player2Shape];
}

/**
 * Convert a shape to a number.
 * @param {string} shape The shape to convert.
 * @returns {number} The number for the shape.
 */
function shapeToNumber(shape) {
  switch (shape) {
    case "A":
    case "X":
      return 1;
    case "B":
    case "Y":
      return 2;
    case "Z":
    case "C":
      return 3;
    default:
      return null;
  }
}

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Split the text into an array of lines.
  const lines = data.split(/\n/);
  // For each line in the array, use the first character as the shape, and the second character as the opponent's shape.
  const newArray = lines.map((item) => {
    return [item[0], item[2]];
  });

  // New array to hold the scores.
  scores = [];

  // For each array in the newArray, determine the score.
  newArray.forEach((element) => {
    scores.push(determineScore(element[0], element[1]));
  });

  return console.log("Strategy Guide Score " + scores[scores.length - 1]);
});
