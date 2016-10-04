const log = require('../utils/log'),
  isOdd = require('./1_currying').isOdd,
  R = require('ramda'),
  curry = require('ramda').curry,
  map = require('./2_currying').map,
  filter = require('./2_currying').filter,
  compose = require('ramda').compose,
  join = curry((str, xs) => xs.join(str)),
  first = xs => xs[0],
  split = curry((on, str) => str.split(on)),
  concat = curry((message, str) => str + message),
  dot = curry((prop, obj) => obj[prop]),
  last = xs => xs[xs.length - 1],
  average = xs => xs.reduce((p, c) => p + c) / xs.length,
  sortBy = R.sortBy;

/******** COMPOSITION CONTD... **********/

let DRAGONS = [
  {name: 'Toothless', fire: 850, difficulty: 4500, eatsPeople: false},
  {name: 'Groncle', fire: 150, difficulty: 2100, eatsPeople: true},
  {name: 'Fluffy', fire: 0, difficulty: 9000, eatsPeople: false},
  {name: 'Charizard', fire: 900, difficulty: 9500, eatsPeople: false},
  {name: 'Drogon', fire: 1000, difficulty: 9800, eatsPeople: true},
],
MYTHICAL_CREATURES = [
  {name: 'Unicorn', difficulty: 25, eatsPeople: false},
  {name: 'Pikachu', difficulty: 275,  eatsPeople: false},
  {name: 'Pegasus', difficulty: 600,  eatsPeople: false},
  {name: 'Cyclops', difficulty: 5000,  eatsPeople: true}
]

let getNames = map(dot('name'))

// log('Dragon Names', getNames(DRAGONS))
// log('Mythical Creature Names', getNames(MYTHICAL_CREATURES))

let avgDifficulty = compose(average, map(dot('difficulty')));

// log('average dragon training difficulty', avgDifficulty(DRAGONS));
// log('average mythical creature training difficulty', avgDifficulty(MYTHICAL_CREATURES));

let peopleEating = compose(map(dot('name')), filter(dot('eatsPeople')));

// log('People Eating Dragons', peopleEating(DRAGONS));
// log('People Eating Non Dragons', peopleEating(MYTHICAL_CREATURES));

let mostFiery = compose(concat(' spits hot FIYAH!'),
                        dot('name'),
                        last,
                        sortBy(dot('fire')));
// log(mostFiery(DRAGONS));

/**************** EXERCISE ********************/
/**
 * Write a point free function using composition to get the
 * least difficult dragon to train
 *
 *
 */

/******************** SOLUTION ********************/
let leastDifficult = compose(concat(' is the least difficult'),
                             dot('name'),
                             first,
                             sortBy(dot('difficulty')));
// log(leastDifficult(DRAGONS));
