const findLeastFraction = () => {
  let a = +prompt("Insert the upper value");
  let b = +prompt("Insert the lower value");
  const arrOfTwo = [a, b];

  for (let i = Math.max.apply(0, arrOfTwo); i > 1; i--) {
    if (a % i === 0 && b % i === 0) {
      a /= i;
      b /= i;
    }
  }

  alert(a + "/" + b);
};
// 2
const plusTwo = () => {
  let n = 160;
  let total = 0;
  while (n <= 2048) {
    total += n;
    n += 2;
  }
  alert(total);
};

// 3
const plusFour = () => {
  let n = 163;
  let total = 0;
  while (n <= 815) {
    total += n;
    n += 4;
  }
  alert(total);
};

// 4.
const findIndexFib = input => {
  let fib = [0, 1];
  for (let i = 1; i < input - 1; i++) {
    fib.push(fib[i] + fib[i - 1]);
  }
  alert(fib[fib.length - 1]);
};

// 5.
const minusAndPlus = () => {
  let total = 0;
  for (let i = 1; i <= 18954; i++) {
    if (i % 2 === 0) {
      total -= i;
    } else {
      total += i;
    }
  }
  alert(total);
};

// 6
const sumProducts = () => {
  let total = 0;
  for (let i = 1; i <= 87; i++) {
    total += i * (i + 1);
  }
  alert(total);
};
// 7
const sumProducts2 = () => {
  let total = 0;
  for (let i = 1; i <= 87; i++) {
    total += i * (i + 1) * (i + 2);
  }
  alert(total);
};
// 8
const sumProducts3 = () => {
  let total = 0;
  for (let i = 1; i <= 155; i += 2) {
    total += i * (i + 1) * (i + 2);
  }
  alert(total);
};
// 9
const getMinInput = () => {
  let input = prompt("Enter number");
  if (+input === NaN) return;
  let storageArr = [+input];
  while (input !== "stop") {
    storageArr.push(+input);
    input = prompt("Enter another number");
  }

  alert(Math.min.apply(0, storageArr));
};
// 10
const get3MinInput = () => {
  let input = prompt("Enter number");
  if (+input === NaN) return;
  let storageArr = [+input];
  while (input !== "stop") {
    storageArr.push(+input);
    input = prompt("Enter another number");
  }
  storageArr.sort((x, y) => y - x);
  const top3 = storageArr.slice(0, 3);
  alert(top3);
};
//  11
const getMinMaxInput = () => {
  let input = prompt("Enter number");
  if (+input === NaN) return;
  let storageArr = [+input];
  while (input !== "stop") {
    storageArr.push(+input);
    input = prompt("Enter another number");
  }
  const lowestNum = Math.min.apply(0, storageArr);
  const highestNum = Math.max.apply(0, storageArr);
  alert(lowestNum, highestNum);
};
//  12
const getMinDiffMaxInput = () => {
  let input = prompt("Enter number");
  if (+input === NaN) return;
  let storageArr = [+input];
  while (input !== "stop") {
    storageArr.push(+input);
    input = prompt("Enter another number");
  }
  console.log(storageArr);
  alert(+Math.max.apply(0, storageArr) - +Math.min.apply(0, storageArr));
};
// 15
const getReverse = () => {
  let input = prompt("Enter number");
  if (+input === NaN) return;
  let storageArr = [+input];
  while (input !== "stop") {
    if (+input === 0) continue;
    storageArr.unshift(+input);
    input = prompt("Enter another number");
  }

  alert(storageArr.join());
};
