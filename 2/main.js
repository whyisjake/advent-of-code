const { route } = require("./route.js");
const _ = require("lodash");

function getCoordinates(ref) {
  let direction = _.mapValues(route, ref);
  let slimmed = _.omitBy(direction, _.isNil);
  return _.sum(_.values(slimmed));
}

const up = getCoordinates("up");
const down = getCoordinates("down");
const forward = getCoordinates("forward");

const depth = down - up;
const answer = forward * depth;

// console.log({up, down, forward, depth, answer});

let aim = 0;
let aimDepth = 0;
let aimForward = 0;

const directionFunc = {
  up: function (amount) {
    // Decreases aim by x units.
    aim = aim - amount;
    aimDepth = aimDepth - amount;
    console.log({ direction: "up", amount, aimDepth, aim, aimForward });
  },
  down: function (amount) {
    // Aim increases by x units.
    aim = aim + amount;
    aimDepth = aimDepth + amount;
    console.log({ direction: "down", amount, aimDepth, aim, aimForward });
  },
  forward: function (amount) {
    // Increases depth by aim multiplied by x.
    aimDepth = aimDepth + (aim * amount);
    aimForward = aimForward + amount;
    console.log({ direction: "forward", amount, aimDepth, aim, aimForward });
  },
};

route.forEach((direction) => {
  _.forOwn(direction, function (value, key) {
    directionFunc[key](value);
  });
});

const answer2 = aimDepth * aimForward;
console.log(answer2);
