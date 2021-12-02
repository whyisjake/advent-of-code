const {route} = require("./route.js");
const _ = require('lodash');

function getCoordinates(ref) {
  let direction = _.mapValues(route, ref);
  let slimmed = _.omitBy(direction, _.isNil);
  return _.sum(_.values(slimmed));
}


const up =  getCoordinates("up");
const down =  getCoordinates("down");
const forward =  getCoordinates("forward");

const depth = down - up;
const answer = forward * depth;

console.log({up, down, forward, depth, answer});
