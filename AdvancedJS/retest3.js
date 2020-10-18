// 1
function checkCharacter(input) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const arr = input.trim().replace(/ /g, '').split('');
  const result = arr.map(char => (alphabets.includes(char) ? 1 : 0));
  console.log('result:', result);
  const total = result.reduce((acc, cur) => (acc += cur));
  return total === arr.length
    ? 'All character are small'
    : total > 0
    ? 'All character are mix.'
    : 'All character are capital.';
}

// 2

function pow(a, n) {
  if (isNaN(a) || isNaN(n)) return 'these are not numbers';
  return a ** n;
}

// 3
function thaiTypeof(input) {
  const typeArr = ['ข้อความ', 'ตัวเลข', 'ออปเจ็คต์', 'ไม่ได้กำหนดค่า', 'บูลีน'];
  switch (typeof input) {
    case 'string':
      return typeArr[0];
    case 'number':
      return typeArr[1];
    case 'object':
      return typeArr[2];
    case 'undefined':
      return typeArr[3];
    case 'boolean':
      return typeArr[4];
  }
}

// 4

function evenArraySum(arr) {
  return arr.reduce((acc, cur) => {
    if (cur % 2 === 0) acc += cur;
    return acc;
  }, 0);
}

// 5
function changeStringtoThaiDate(date) {
  const convertToDate = new Date(date);
  if (convertToDate === 'Invalid Date') return 'Error';
  const convertToArr = date.split('-');

  const thmonth = new Array(
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม'
  );

  return `วันที่ ${convertToArr[0]} เดือน${thmonth[convertToArr[1] - 1]} พ.ศ.${
    +convertToArr[2] + 543
  }`;
}

// 6
function isTheSameAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;
  for (char of string1.toLowerCase()) {
    if (!string2.toLowerCase().includes(char)) return false;
    return true;
  }
}

// 7

function numberOfSquare(height, width) {
  let temp = height;
  let h = height < width ? height : width;
  let w = temp < width ? width : temp;
  return Math.floor(w / h);
}

// 8
function toChange(money) {
  const change = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
  let count = [];
  let k = 0;
  while (k < change.length) {
    count.push(Math.floor(money / change[k]));
    money %= change[k];
    k++;
  }
  return `แบงค์พัน ${count[0]} ใบ / แบงค์ห้าร้อย  ${count[1]} ใบ / แบงค์ร้อย ${count[2]} ใบ / แบงค์ห้าสิบ  ${count[3]} ใบ / แบงค์ยี่สิบ  ${count[4]} ใบ / เหรียญสิบ  ${count[5]} เหรียญ / เหรียญห้า  ${count[6]} เหรียญ / เหรียญสองบาท  ${count[7]} เหรียญ / เหรียญบาท  ${count[8]} เหรียญ`;
}

// 9
function maxPossibleNumber(number) {
  const numberToArr = number.toString(10).split('');
  numberToArr.sort((x, y) => y - x);
  return numberToArr.join('');
}

// 10

function findRoot(number) {
  let result = number === 2 ? number : [];
  let temp = number;
  let solution = 1;
  let remaining = 1;
  while (temp >= 3) {
    result.push(factor(temp));
    temp = temp / factor(temp);
    temp === 2 ? result.push(factor(temp)) : temp;
  }
  for (let i = 0; i < result.length; ) {
    if (result[i] === result[i + 1]) {
      solution *= result[i];
      i += 2;
    } else {
      remaining *= result[i];
      i++;
    }
  }
  return `${solution} root ${remaining}`;
}

function factor(number) {
  const arrayFromNum = [...Array(number + 1).keys()].slice(2);
  const factoring = arrayFromNum.filter(i => number % i === 0);
  return factoring[0];
}

console.log(findRoot(750));

// 11
function dotProduct(vector1, vector2) {
  const diff = vector1.length - vector2.length;
  if (diff < 0) {
    for (let i = 0; i < Math.abs(diff); i++) {
      vector1.push(0);
    }
  } else if (diff > 0) {
    for (let i = 0; i < Math.abs(diff); i++) {
      vector2.push(0);
    }
  }
  let result = vector1.map((num, i) => num * vector2[i]);
  return result.reduce((acc, curr) => (acc += curr));
}

// 12
function maxPairSum(array) {
  return array
    .sort((x, y) => y - x)
    .slice(0, 2)
    .reduce((acc, curr) => (acc += curr), 0);
}

// 13
function minPairSum(array) {
  return array
    .sort((x, y) => x - y)
    .slice(0, 2)
    .reduce((acc, curr) => (acc += curr), 0);
}

// 14
function numberOfJumpFrog(speed, distance) {
  return Math.ceil(distance / speed);
}

// 15

function calculateInterest(money, years) {
  return money * (1 + 0.025) ** years;
}
