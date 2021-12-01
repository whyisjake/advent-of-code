const {depths} = require('./depths.js');
let increased = 0,
    decreased = 0,
    rolling   = 0;


depths.map((depth, index) => {
  let status = depth > depths[index - 1] ? 'increased' : 'decreased';
  // console.log(depths[index - 1], depth, status);
  if (status === 'increased') {
    increased++;
  } else {
    decreased++;
  }
});

depths.map((depth, index) => {
  // Are there three four prior elements for the math to work here?
  if (index < 3) {
    return;
  }
  // Get the last three, and the last two for the current.
  let prior   = depths[index -1] + depths[index - 2] + depths[index - 3];
  let current = depths[index] + depths[index - 1] + depths[index - 2];
  let status = prior < current ? 'increased' : 'decreased';
  if (status === 'increased') {
    rolling++;
  }
});


console.log(increased, decreased, increased + decreased, rolling);
