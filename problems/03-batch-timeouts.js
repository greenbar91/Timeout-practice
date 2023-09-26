/***********************************************************************
Write a function, `batchTimeouts`, that accepts an array of callbacks and an
array of delays in milliseconds. The function should set a timeout for each
callback in the array with its corresponding delay. For example, the
callback at index 0 should be set with the delay at index 0,
the callback at index 1 should be set with the delay at index 1, and so on.
The `batchTimeouts` function should return an array containing the Timeout
objects for each timeout that was set. You may assume that both array arguments
have the same length.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below to confirm the correct behavior.

Note: The test specs for this problem are valid for iterative solutions. If you
pass the specs for an iterative solution and then attempt a recursive solution,
you will need to test your new solution manually using node.
***********************************************************************/

// function batchTimeouts(callbacks, delays) {
//   let timeoutArr = []
//   for (let i = 0; i < callbacks.length; i++) {
//     const timeoutObj = setTimeout(callbacks[i], delays[i])
//     timeoutArr.push(timeoutObj)
//   }
//   return timeoutArr
// }

function batchTimeouts(callbacks, delays, timeoutArr = [], i = 0, counter = callbacks.length) {
  //base case
  if (counter === 0) return timeoutArr
  //recursive step to decrease counter
  const timeoutObj = setTimeout(callbacks[i], delays[i])
  //recursive base
  timeoutArr.push(timeoutObj)
  return batchTimeouts(callbacks, delays, timeoutArr, i + 1, counter - 1)
}

const sayHello = () => console.log('hi');
const sayGoodbye = () => console.log('bye');
const shout = () => console.log('WHAT?');
const tasks = [sayHello, sayGoodbye, shout];
const delays = [500, 200, 900];

const timeoutObjs = batchTimeouts(tasks, delays);
console.log(timeoutObjs); // [ Timeout {...},  Timeout {...}, Timeout {...} ]
// should print:
//  'bye' after 200 ms
//  'hi' after 500 ms
//  'WHAT?' after 900 ms

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = batchTimeouts;
} catch {
  module.exports = null;
}
