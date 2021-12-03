const { forInRight } = require("lodash");
const _ = require("lodash");
let data = require("fs").readFileSync("./input.csv", "utf8");

// Split the rows.
data = data.split("\n");

// Gamma rate is the most popular of the first char.
// Epsilon rate is the most popular second char.

function getSum(data, start) {
  newArr = [];
  _.each(data, function (status, key) {
    if (_.isEmpty(status)) {
      return;
    }
    newArr[key] = parseInt(status[start], 10);
  });
  return _.reduce(
    newArr,
    function (sum, n) {
      return sum + n;
    },
    0
  );
}

function commonBit(length, sum) {
  return length / 2 < sum ? 1 : 0;
}

function uncommonBit(length, sum) {
  return length / 2 < sum ? 0 : 1;
}

function gammaRate(data) {
  let length = data.length;
  let strLength = data[0].length;
  let gammaRate = [];
  for (let index = 0; index < strLength; index++) {
    gammaRate[index] = commonBit(length, getSum(data, index));
  }
  return gammaRate.join("");
}

function epsilonRate(data) {
  let length = data.length;
  let strLength = data[0].length;
  let epsilonRate = [];
  for (let index = 0; index < strLength; index++) {
    epsilonRate[index] = uncommonBit(length, getSum(data, index));
  }
  return epsilonRate.join("");
}

let gammaRateDec = parseInt(gammaRate(data), 2);
let epsilonRateDec = parseInt(epsilonRate(data), 2);
let powerConsumption = gammaRateDec * epsilonRateDec;


// Part 2

let gammaArr = gammaRate(data).split("");
let trimmedArr = data;

for (let index = 0; index < gammaArr.length; index++) {
  const element = gammaArr[index];
  console.log("===" + element + "===");

  console.log("trimmed length", trimmedArr.length);

  _.forEachRight(trimmedArr, function(value, trimmedIndex){
    // console.log(value[index], element);
    if( value[index] == element ) {
      // console.log(value[index], element, trimmedIndex);
      data.splice(trimmedIndex, 1);
    }

    gammaArr = gammaRate(trimmedArr)
  })


  // trimmedArr = _.filter(data, function(row){
  //   return row.split("")[index] !== element;
  // })
}

console.log({trimmedArr});

console.log({gammaRateDec, epsilonRateDec, powerConsumption});
