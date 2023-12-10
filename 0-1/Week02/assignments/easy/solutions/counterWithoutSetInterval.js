// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let countUpVal = 0;
function countUp2() {
  setTimeout(() => {
    console.log(countUpVal++);
    countUp2();
  }, 1000);
}

countUp2();
