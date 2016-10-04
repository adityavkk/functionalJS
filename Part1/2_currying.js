'use strict'
const log = require('../utils/log'),
  isOdd = require('./1_currying').isOdd,
  R = require('ramda'),
  curry = require('ramda').curry,
  oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  replace = curry((regEx, rep, str) => str.replace(regEx, rep)),
  match = curry((regEx, str) => str.match(regEx));

/**
 * Curry-fying functions we know
 */

/******************** CURRIED FILTER ********************/
// filter :: (a -> Bool) -> [a] -> [a]
const filter = curry((func, arr) => arr.filter(func));

let oddsTill10 = filter(isOdd, oneToTen);

// log(oddsTill10)

/**
 * The Power of Currying!
 * A partially applied isOdd with a partially applied filter
 * isOdd is actually mod(2) waiting for a numerator, and filter is waiting for an array
 */

const getTheOdds = filter(isOdd);

// log(getTheOdds([5, 1, 6, 8, 24, 95]));

/******************** CURRIED MAP ********************/

/***** With old map *****/
let stupidSequelizeResponse = [[{id: 5}, false], [{id: 6}, true], [{id: 7}, true]]

let first = (xs) => xs[0];
let onlyInstances = (findOrCreateInstances) => {
   return findOrCreateInstances.map(function(fOrCInstance){
    return first(fOrCInstance);
  })
}

// log('map 1.0', onlyInstances(stupidSequelizeResponse));

/***** New Map *****/
const map = curry((func, arr) => arr.map(func));

onlyInstances = map(first);

// log('map 2.0', onlyInstances(stupidSequelizeResponse))
// log('map 2.1', map(first, stupidSequelizeResponse))

module.exports = {map, filter};
