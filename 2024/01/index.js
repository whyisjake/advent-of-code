const fs = require("fs");

// Read the input file
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  try {
    // Parse the file into two arrays
    const lines = data.trim().split("\n");
    const leftList = [];
    const rightList = [];

    lines.forEach((line) => {
      const [left, right] = line
        .split("   ")
        .map((value) => parseInt(value, 10));
      leftList.push(left);
      rightList.push(right);
    });

    // Sort both lists
    const sortedLeft = leftList.sort((a, b) => a - b);
    const sortedRight = rightList.sort((a, b) => a - b);

    // Calculate the absolute differences and total distance
    const totalDistance = sortedLeft.reduce((sum, left, index) => {
      const right = sortedRight[index];
      return sum + Math.abs(left - right);
    }, 0);

    console.log("Total Distance:", totalDistance);
  } catch (parseError) {
    console.error("Error parsing the file or processing data:", parseError);
  }
});

// Read the input file
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  try {
    // Parse the file into two arrays
    const lines = data.trim().split("\n");
    const leftList = [];
    const rightList = [];

    lines.forEach((line) => {
      const [left, right] = line
        .split("   ")
        .map((value) => parseInt(value, 10));
      leftList.push(left);
      rightList.push(right);
    });

    // Create a frequency map for the right list
    const rightFrequencyMap = {};
    rightList.forEach((num) => {
      rightFrequencyMap[num] = (rightFrequencyMap[num] || 0) + 1;
    });

    // Calculate the similarity score
    const similarityScore = leftList.reduce((score, num) => {
      const frequency = rightFrequencyMap[num] || 0; // Frequency of `num` in the right list
      return score + num * frequency;
    }, 0);

    console.log("Similarity Score:", similarityScore);
  } catch (parseError) {
    console.error("Error parsing the file or processing data:", parseError);
  }
});
