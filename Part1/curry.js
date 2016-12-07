// Sample implementation of a curry function
const curry = (fn, origArgLen = fn.length, origArgs = []) => {
 return  (...args) => {
   let givenArgs = origArgs.concat(args);
   return givenArgs.length >= origArgLen ?
     fn.apply(null, givenArgs) : curry(fn, origArgLen, givenArgs)
 }
