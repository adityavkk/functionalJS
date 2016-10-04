const log = require('../utils/log'),
  isOdd = require('./1_currying').isOdd,
  R = require('ramda'),
  curry = require('ramda').curry,
  map = require('./2_currying').map,
  compose = require('ramda').compose,
  join = curry((str, xs) => xs.join(str)),
  first = xs => xs[0],
  split = curry((on, str) => str.split(on)),
  errTrace = curry((tag, x) => { log(tag, x); return x;});

/**
 *  POINT FREE PROGRAMMING is a paradigm in which functions are used without
 *  explicitly identifying the arguments they operate on
 *
 *  FUNCTION COMPOSITION is a point free application of one function to the
 *  result of another to produce a third function
 */

const functionCompose = function(f, g) {
  return function(x) {
    return f(g(x));
  }
}

let CAPS = x => x.toUpperCase();
let exclaim = x => x + '!';

let yell = functionCompose(CAPS, exclaim);

// log(yell('this is sparta'));

/******************** MOAR COMPOSITION ********************/

let streetFighterChars = ['chun li', 'e honda', 'm bison', 'zangief'];

let initials = function(fullNames) {
  return fullNames.map(function(fullName) {
      let initialArr = fullName.split(' ').map(function(name) {
            return name[0].toUpperCase();
          })
      return initialArr.join('. ');
    })
}

// log('initials 1.0', initials(streetFighterChars));

let initialsOfSingleName = compose(join('. '),
                           map(compose(CAPS, first)), 
                           split(' '));

initials = map(initialsOfSingleName);

// log('initials 2.0', initials(streetFighterChars));
