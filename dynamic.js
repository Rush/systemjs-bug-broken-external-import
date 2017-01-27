import foo from './foo.js';

export let getCounter;

let counter = 0;

getCounter = function() {
  console.error(new Error('Should not happen'));
};

setTimeout(() => {
  getCounter = function() {
    return counter;
  };
}, 50);


setInterval(() => {
  counter++;
}, 100);
