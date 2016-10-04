'use strict'
const log = require('../utils/log');
const R = require('ramda');
const curry = require('ramda').curry;










/*
 _____ _   _ _   _  ____ _____ ___ ___  _   _    _    _
|  ___| | | | \ | |/ ___|_   _|_ _/ _ \| \ | |  / \  | |
| |_  | | | |  \| | |     | |  | | | | |  \| | / _ \ | |
|  _| | |_| | |\  | |___  | |  | | |_| | |\  |/ ___ \| |___
|_|    \___/|_| \_|\____| |_| |___\___/|_| \_/_/   \_|_____|
    _ ____
   | / ___|
_  | \___ \
 |_| |___) |
\___/|____/

Writing highly readable, declarative programs by writing point-free code
PART 1: CURRYING AND COMPOSING

/**
 * The process of turning a function that accepts n arguments
 * into n functions that accept 1 argument each
 */

/*************** BLAND FUNCTION ***************/
//greet :: (Str, Str, Str) -> Str
const greet = (greeting, emphasis, name) =>
  greeting + ' ' + name + ' ' + emphasis;

// log('bland', greet('Hello,', `- the friendly ghost`, 'Casper'));


/*************** CURRIED FUNCTION ***************/
//greetCurried :: Str -> Str -> Str -> Str
const greetCurried =
  (greeting) =>
   (emphasis) =>
    (name) =>
      greeting + ' ' + name + ' ' + emphasis;

const enEspanol = greetCurried('¡ Hola')('- el fantasma amitoso¡');

// log(enEspanol('Casper'))
// log(enEspanol('Slimer'))

const greetUnsureName = greetCurried('Umm...')('?');

// log(greetUnsureName('Casper'))
// log(greetUnsureName('Umberto'))

/***** USING RAMDA/LODASH *****/
const greetDeepCurried = curry(greet);

const greetLoudly = greetDeepCurried('YO', '!!!');

// log(greetLoudly('Vigo'))
// log(greetDeepCurried('Hello', '!', 'Casper'));

///*************** NOT IMPRESSED...? ***************///

////mod :: Num -> Num -> Num
const mod = curry((divideBy, toDivide) => toDivide % divideBy);

// log('mod(9, 5)', mod(9, 5));

////isOdd :: Num -> Num
const isOdd = mod(2);

// log('isOdd(5)', isOdd(5));
// log('isOdd(8)', isOdd(8));

module.exports = {
  isOdd
}
