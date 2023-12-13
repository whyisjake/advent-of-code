const fs = require("fs");
const filePath = "calibration.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let sum = 0;

  // Part One
  const lines = data.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // get a list of all numbers in the string.
    const numbers = line.match(/\d/g);
    if (!numbers) {
      continue;
    }
    console.log(numbers);
    console.log(line);
    // Find the first number in the array.
    const firstNumber = numbers[0];
    console.log(firstNumber);
    // Find the last number in the array
    const lastNumber = numbers[numbers.length - 1];
    console.log(lastNumber);
    // Add these numbers together.
    const lineSum = firstNumber + lastNumber;
    console.log("Math: " + firstNumber + "+" + lastNumber + "=" + lineSum);
    console.log(sum);
    // Add the sum to the total sum.
    sum += parseInt(lineSum);
  }
  console.log("Sum: " + sum);

  // Part Two
  sum = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // the string might have numbers that are spelled out.
    // so we need to replace them with numbers.
    // If they are at the start of the string, check there
    // first, and then do a replace.
    let lineWithNumbers = line;
    if (line.startsWith("one")) {
      lineWithNumbers = line.replace("one", "1");
    }
    if (line.startsWith("two")) {
      lineWithNumbers = line.replace("two", "2");
    }
    if (line.startsWith("three")) {
      lineWithNumbers = line.replace("three", "3");
    }
    if (line.startsWith("four")) {
      lineWithNumbers = line.replace("four", "4");
    }
    if (line.startsWith("five")) {
      lineWithNumbers = line.replace("five", "5");
    }
    if (line.startsWith("six")) {
      lineWithNumbers = line.replace("six", "6");
    }
    if (line.startsWith("seven")) {
      lineWithNumbers = line.replace("seven", "7");
    }
    if (line.startsWith("eight")) {
      lineWithNumbers = line.replace("eight", "8");
    }
    if (line.startsWith("nine")) {
      lineWithNumbers = line.replace("nine", "9");
    }
    if (line.startsWith("zero")) {
      lineWithNumbers = line.replace("zero", "0");
    }

    // Then do a general replace for all the other numbers.
    lineWithNumbers = lineWithNumbers.replace(/one/g, "1");
    lineWithNumbers = lineWithNumbers.replace(/two/g, "2");
    lineWithNumbers = lineWithNumbers.replace(/three/g, "3");
    lineWithNumbers = lineWithNumbers.replace(/four/g, "4");
    lineWithNumbers = lineWithNumbers.replace(/five/g, "5");
    lineWithNumbers = lineWithNumbers.replace(/six/g, "6");
    lineWithNumbers = lineWithNumbers.replace(/seven/g, "7");
    lineWithNumbers = lineWithNumbers.replace(/eight/g, "8");
    lineWithNumbers = lineWithNumbers.replace(/nine/g, "9");
    lineWithNumbers = lineWithNumbers.replace(/zero/g, "0");

    // get a list of all numbers in the string.
    const numbers = lineWithNumbers.match(/\d/g);
    if (!numbers) {
      continue;
    }

    console.log({ line, lineWithNumbers, numbers });

    // Find the first number in the array.
    const firstNumber = numbers[0];

    // Find the last number in the array
    const lastNumber = numbers[numbers.length - 1];

    // Add these numbers together.
    const lineSum = firstNumber + lastNumber;
    console.log(
      "String concat: " + firstNumber + "+" + lastNumber + "=" + lineSum
    );

    // Add the sum to the total sum.
    sum += parseInt(lineSum);
  }

  // Final output
  console.log("Sum: " + sum);
});
