const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(data);
  // Split the text into an array of lines with double empty lines as the delimiter.
  const lines = data.split(/\n\n/);

  // For each line in the array, split it into an array of lines and then find the sum.
  const newArray = lines.map((item) => {
    return item.split(/\n/);
  });

  // New array to hold the sums.
  sums = [];

  // For each array in the newArray, sum the numbers.
  newArray.forEach((element) => {
    let sum = 0;
    element.forEach((item) => {
      sum += parseInt(item, 10);
    });
    sums.push(sum);
  });

  // Sort the array of sums.
  sums.sort(compareNumbers);

  // Output the answers.
  console.log("Top Elf: " + sums[0]);
  console.log("Top Three Elves: " + (sums[0] + sums[1] + sums[2]));
});

function compareNumbers(a, b) {
  return b - a;
}
