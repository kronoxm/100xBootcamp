// Create a counter in JavaScript
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

let countUpVal = 0;
const countUp = function () {
  console.log(countUpVal++);
  return;
};

setInterval(countUp, 1000);
