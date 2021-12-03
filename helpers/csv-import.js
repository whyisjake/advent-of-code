const _ = require("lodash");
let data = require("fs").readFileSync("./route.csv", "utf8")

// Split the rows.
data = data.split("\n");

// Loop through each row and split direction.
for (let index = 0; index < data.length; index++) {
  const element = data[index];
  data[index] = _.split(element, " ");
}

console.log(data);
