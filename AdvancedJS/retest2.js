//?  1. - 3
const findPrimeNumber = number => {
  let start = Date.now();
  if (number <= 1 || !number) return number;
  let numToArr = [],
    primeNum = [2];

  numToArr = [...Array(number + 1).keys()].slice(2);
  while (numToArr.length > 1) {
    numToArr.map((num, index) => {
      if (num % primeNum[primeNum.length - 1] === 0) {
        numToArr.splice(index, 1);
      }
    });
    primeNum.push(numToArr[0]);
  }
  let finish = Date.now();
  console.log(finish - start);

  return primeNum;
};
// ! Splice faster at less numbers in array but mcuch slower passing  >>> 50000

// 1 - 3
const findPrimeNumberFilter = number => {
  let start = Date.now();
  if (number <= 1 || !number) return number;
  let numToArr,
    primeNum = [2];

  numToArr = [...Array(number + 1).keys()].slice(2);
  while (numToArr.length > 1) {
    numToArr = numToArr.filter(num => !!(num % primeNum[primeNum.length - 1]));
    primeNum.push(numToArr[0]);
  }

  let finish = Date.now();
  console.log(finish - start);

  return primeNum;
};
// // 3
// const sumToGivenN = (arr, n) => {
//   let result = arr.reduce((acc, curr, ind) => {
//     if (ind < n) {
//       acc += curr;
//     }
//     return acc;
//   });
//   return result;
// };
// 4
const findPrimeNumberAndSumToN = (number, n) => {
  if (number <= 1 || !number) return 'no prime number detected';
  let numToArr = [],
    primeNum = [2];

  numToArr = [...Array(number + 1).keys()].slice(2);
  while (numToArr.length > 1) {
    numToArr.forEach((num, index) => {
      if (num % primeNum[primeNum.length - 1] === 0) {
        numToArr.splice(index, 1);
      }
    });
    primeNum.push(numToArr[0]);
  }

  return sumToGivenN(primeNum, n);
};

//  5
const sumMultiplyItself = num => {
  let arrFromNum = [...Array(num + 1).keys()].slice(1);
  return arrFromNum.reduce((acc, curr) => (acc += curr * curr));
};

//  5

const replaceAndFindTotal = (num, primeArr) => {
  let numToArr = [...Array(num + 1).keys()].slice(1);
  return numToArr.reduce((acc, curr) => {
    if (primeArr.includes(curr)) {
      acc -= curr;
    } else {
      acc += curr;
    }
    return acc;
  }, 0);
};
//  6
const findTotalNegativePrime = number => {
  if (number <= 1 || !number) return -number;
  let primeNum = [2];

  let numToArr = [...Array(number + 1).keys()].slice(2);
  while (numToArr.length > 1) {
    numToArr.forEach((num, index) => {
      if (num % primeNum[primeNum.length - 1] === 0) {
        numToArr.splice(index, 1);
      }
    });
    primeNum.push(numToArr[0]);
  }

  return replaceAndFindTotal(number, primeNum);
};

// ข้อ 6

// const findPrimeTillNth = number => {
//   if (number <= 1 || !number) return -number;
//   let primeNum = [2];

//   let numToArr = [...Array(number + 1).keys()].slice(2);
//   while (numToArr.length > 1) {
//     numToArr.forEach((num, index) => {
//       if (num % primeNum[primeNum.length - 1] === 0) {
//         numToArr.splice(index, 1);
//       }
//     });
//     primeNum.push(numToArr[0]);
//   }

//   return primeNum;
// };

function findLCM(list) {
  let maxNum = 0;
  for (let num of list) {
    num = num < 0 ? 0 - num : num;
    maxNum = num > maxNum ? num : maxNum;
  }
  for (let i = maxNum; i <= Infinity; i += maxNum) {
    for (let num of list) {
      if (i % num !== 0) break;
      if (list.indexOf(num) === list.length - 1) return i;
    }
  }
}
// console.log(findLCM([3, 12, 12]));

// 7
function gcd2(a, b) {
  // Greatest common divisor of 2 integers
  if (!b) return a;

  return gcd2(b, a % b);
}

console.log(lcm([12, 8]));

function gcd(arr) {
  // Greatest common divisor of a list of integers
  let n = 0;
  for (let i = 0; i < arr.length; ++i) {
    n = gcd2(arr[i], n);
    console.log('n:', n);
  }
  return n;
}

// ข้อ 8

function lcm2(a, b) {
  // Least common multiple of 2 integers
  return (a * b) / gcd2(a, b);
}
function lcm(array) {
  // Least common multiple of a list of integers
  let n = 1;
  for (let i = 0; i < array.length; ++i) n = lcm2(array[i], n);
  return n;
}

// ข้อ 9
const factorial = n => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

// ข้อ 10

const returnMinMaxSort = (arr, boolean) => {
  return boolean ? arr.sort((x, y) => x - y) : arr.reduce((x, y) => y - x);
};
// ข้อ 11
const returnMinMax = (arr, boolean) => {
  return boolean
    ? arr.reduce((acc, curr) => {
        let index = 0;
        while (index < acc.length && curr >= acc[index]) index++;
        acc.splice(index, 0, curr);
        return acc;
      }, [])
    : arr.reduce((acc, curr) => {
        let index = 0;
        while (index < acc.length && curr <= acc[index]) index++;
        acc.splice(index, 0, curr);
        return acc;
      }, []);
};

// ข้อ 12
const totalOfMultiplyThreeAndFive = number => {
  if (number <= 1 || !number) return number;
  let numToArr = [],
    threeAndFive = [3, 5];

  let result = [];

  numToArr = [...Array(number).keys()].slice(3);

  numToArr.forEach((num, index) => {
    if (num % threeAndFive[0] === 0 || num % threeAndFive[1] === 0) {
      result.push(num);
    }
  });

  return result.reduce((acc, curr) => (acc += curr));
};

// ข้อ 13
const sumEachSingleNum = (...numArr) => {
  debugger;
  let result = 0,
    str = numArr.join('');
  for (let no of str) {
    result += +no;
  }
  return result;
};

//  ข้อ 14
function findValueFromIndex(n) {
  let resultOfFac = factorial(n);
  resultOfFac = resultOfFac.toString(10).split('');
  return resultOfFac.reduce((acc, curr) => (acc += Number(curr)), 0);
}

// ข้อ 15
const sumFromNtoN = n => (n * (n + 1)) / 2;
