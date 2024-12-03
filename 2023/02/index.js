const fs = require("fs");

// Read the input.txt file
const input = fs.readFileSync("input.txt", "utf-8");

// Split each line into an object
const lines = input.split("\n");
const objects = lines.map((line) => {
  // Each line looks like this:
  // Game 1: 4 green, 7 blue; 2 blue, 4 red; 5 blue, 2 green, 2 red; 1 green, 3 red, 9 blue; 3 green, 9 blue; 7 green, 2 blue, 2 red
  // So we need to split it into parts.
  // First, identify the game number.
  const gameNumber = line.match(/Game (\d+):/);
  if (!gameNumber) {
    return;
  }
  // Attach the game number to the object.
  const obj = { gameNumber: gameNumber[1] };
  // Then remove the game number from the line.
  line = line.replace(gameNumber[0], "");

  // Then split the line into parts.
  const parts = line.split(";");
  // Then loop through each part.
  const partsArray = parts.map((part) => {
    // Each part looks like this: 4 green, 7 blue
    // So we need to split it into the number and the color.
    const numberAndColor = part.trim().split(" ");
    // Attach the number and color to the object.
    console.log(numberAndColor);
    return {
      number: numberAndColor[0],
      color: numberAndColor[1],
    };
  });

  // Attach the parts to the object.
  obj.parts = partsArray;

  // We want to know if the game was valid.
  // At the max, there are only 12 red cubes, 13 green cubes, and 14 blue cubes
  // in the bag. So if there are more than that, the game is invalid.

  // First, we need to count the number of each color.
  const colors = {};
  partsArray.forEach((part) => {
    if (!colors[part.color]) {
      colors[part.color] = 0;
    }
    colors[part.color] += parseInt(part.number);
  });

  // Then we need to check if any of the colors are over the max.
  let valid = true;
  if (colors.red > 12) {
    valid = false;
  }
  if (colors.green > 13) {
    valid = false;
  }
  if (colors.blue > 14) {
    valid = false;
  }

  // Attach the valid property to the object.
  obj.valid = valid;
  return obj;
});

console.log(objects);
