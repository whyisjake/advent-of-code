const fs = require("fs");

// Define the shapes.
const shapes = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

const outcomes = {
  0: "Lose",
  3: "Draw",
  6: "Win",
};

const finalOutcomes = {
  X: "Lose",
  Y: "Draw",
  Z: "Win",
};

const gameOutcomes = {
  A: {
    X: 3,
    Y: 6,
    Z: 0,
  },
  B: {
    X: 0,
    Y: 3,
    Z: 6,
  },
  C: {
    X: 6,
    Y: 0,
    Z: 3,
  },
};

const newMatrix = {
  A: {
    // Rock
    X: "Paper", // Lose the round
    Y: "Rock", // Draw the round
    Z: "Scissors", // Win the round
  },
  B: {
    // Paper
    X: "Scissors", // Lose the round
    Y: "Paper", // Draw the round
    Z: "Rock", // Win the round
  },
  C: {
    // Scissors
    X: "Rock", // Lose the round
    Y: "Scissors", // Draw the round
    Z: "Paper", // Win the round
  },
};

const nameToShape = {
  Rock: "X",
  Paper: "Y",
  Scissors: "Z",
}

let player2Score = 0;
let player2Final = 0;

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
function determineScore(player1Shape, player2Shape, final = false) {
  let finalScore = 0;
  if (final) {
    finalScore = player2Final += shapeToNumber(nameToShape[newMatrix[player1Shape][player2Shape]]) + determineWinner(player1Shape, nameToShape[newMatrix[player1Shape][player2Shape]]);
  } else {
    finalScore = player2Score += shapeToNumber(player2Shape) + determineWinner(player1Shape, player2Shape, final);

  }
  return finalScore;
}

/**
 * Determine the winner of a round.
 * @param {string} player1Shape The shape selected by player 1.
 * @param {string} player2Shape The shape selected by player 2.
 * @returns {number} 0 for a loss, 3 for a draw, and 6 for a win.
 */
function determineWinner(player1Shape, player2Shape, final = false) {
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
  let scores = [];
  let finalScores = [];

  // Loop through the array and determine the score for each round.
  newArray.forEach((element) => {
    scores.push(determineScore(element[0], element[1]));
    finalScores.push(determineScore(element[0], element[1], true));
  });

  console.log("Initial Score " + scores[scores.length - 1]);
  console.log("Final Score " + finalScores[scores.length - 1]);
  console.log(player2Final);
});
