class drawN {
  constructor(n) {
    this.n = n;
  }
  quiz1() {
    console.log("*".repeat(this.n));
  }
  quiz1method2() {
    let star = "";
    let i = 0;
    while (i < this.n) {
      star += "*";
      i++;
    }
    console.log(star);
  }

  quiz2() {
    let i = 0;
    while (i < this.n) {
      console.log("*".repeat(this.n));
      i++;
    }
  }

  quiz3() {
    let i = 0;
    while (i < this.n) {
      let num = "";

      for (let j = 1; j <= this.n; j++) {
        num += j;
      }
      console.log(num);
      i++;
    }
  }

  quiz4() {
    let i = 1;
    while (i <= this.n) {
      console.log(String(i).repeat(this.n));
      i++;
    }
  }

  quiz5() {
    let i = this.n;
    while (i > 0) {
      console.log(String(i).repeat(this.n));
      i--;
    }
  }

  quiz6() {
    const double = this.n * this.n;
    for (let i = 1; i <= double; ) {
      let num = "";

      for (let j = 1; j <= this.n; j++) {
        num += i;
        i++;
      }
      console.log(num);
    }
  }
  quiz7() {
    const double = this.n * this.n;
    for (let i = double; i > 0; ) {
      let num = "";

      for (let j = 1; j <= this.n; j++) {
        num += i;
        i--;
      }
      console.log(num);
    }
  }

  quiz8() {
    let start = 0;
    for (let i = 0; i < this.n; i++) {
      i === 0 ? (start += 0) : (start += 2);
      console.log(start);
    }
  }
  quiz9() {
    let start = 0;
    for (let i = 0; i < this.n; i++) {
      i === 0 ? (start += 2) : (start += 2);
      console.log(start);
    }
  }
  // 10.

  quiz10() {
    for (let i = 1; i <= this.n; i++) {
      let num = "";

      for (let j = 1; j <= this.n; j++) {
        num += i * j;
      }
      console.log(num);
    }
  }

  quiz11() {
    for (let i = 0; i < this.n; i++) {
      let blank = "";

      for (let j = 0; j < this.n; j++) {
        if (j === i) {
          blank += "_";
        } else {
          blank += "*";
        }
      }
      console.log(blank);
    }
  }
  quiz12() {
    for (let i = this.n - 1; i >= 0; i--) {
      let blank = "";

      for (let j = 0; j < this.n; j++) {
        if (j === i) {
          blank += "_";
        } else {
          blank += "*";
        }
      }
      console.log(blank);
    }
  }
  quiz13() {
    for (let i = 0; i < this.n; i++) {
      let blank = "";

      for (let j = 0; j < this.n; j++) {
        if (j <= i) {
          blank += "*";
        } else {
          blank += "_";
        }
      }
      console.log(blank);
    }
  }
  // 14.
  quiz14() {
    for (let i = this.n; i > 0; i--) {
      let blank = "";

      for (let j = 1; j <= this.n; j++) {
        if (j <= i) {
          blank += "*";
        } else {
          blank += "_";
        }
      }
      console.log(blank);
    }
  }

  // 15.
  quiz15() {
    const lines = this.n * 2 - 1;
    const middleLine = Math.floor(lines / 2);
    let storage = -1;

    for (let i = 0; i < lines; i++) {
      let blank = "";
      i > middleLine ? storage-- : storage++;
      for (let j = 0; j < this.n; j++) {
        if (j <= storage) {
          blank += "*";
        } else {
          blank += "_";
        }
      }
      console.log(blank);
    }
  }
  // 16.
  quiz16() {
    const lines = this.n * 2 - 1;
    const middleLine = Math.ceil(lines / 2);
    let storage = -1;
    let numStorage = 0;

    for (let i = 1; i <= lines; i++) {
      let blank = "";
      i > middleLine ? storage-- : storage++;
      i > middleLine ? numStorage-- : numStorage++;
      for (let j = 0; j < this.n; j++) {
        if (j <= storage) {
          blank += numStorage;
        } else {
          blank += "-";
        }
      }
      console.log(blank);
    }
  }
  // 17
  quiz17() {
    for (let i = this.n - 1; i >= 0; i--) {
      let blank = "";
      for (let j = 0; j < this.n; j++) {
        if (j < i) {
          blank += "_";
        } else {
          blank += "*";
        }
      }
      console.log(blank);
    }
  }

  quiz18() {
    for (let i = this.n; i > 0; i--) {
      let blank = "";
      for (let j = 0; j < this.n; j++) {
        if (j < i) {
          blank += "*";
        } else {
          blank += "_";
        }
      }
      console.log(blank);
    }
  }
  quiz19() {
    let storage = this.n;
    const lines = this.n * 2 - 1;
    const middleLine = Math.ceil(lines / 2);
    for (let i = lines; i > 0; i--) {
      let blank = "";
      i < middleLine ? storage++ : storage--;
      for (let j = 0; j < this.n; j++) {
        if (j < storage) {
          blank += "_";
        } else {
          blank += "*";
        }
      }
      console.log(blank);
    }
  }
  quiz20() {
    let storage = this.n;
    let num = 0;
    const lines = this.n * 2 - 1;
    for (let i = lines; i > 0; i--) {
      let blank = "";
      i < Math.ceil(lines / 2) ? storage++ : storage--;
      for (let j = 0; j < this.n; j++) {
        if (j < storage) {
          blank += "-";
        } else {
          num += 1;
          blank += num;
        }
      }
      console.log(blank);
    }
  }

  quiz21() {
    const lines = this.n * 2 - 1;
    let addRight = this.n - 1,
      addLeft = this.n + 1;

    for (let i = 0; i < this.n; i++) {
      let blank = "";
      addRight++;
      addLeft--;
      for (let j = 1; j <= lines; j++) {
        if (j >= addLeft && j <= addRight) {
          blank += "*";
        } else {
          blank += "_";
        }
      }
      console.log(blank);
    }
  }
  quiz22() {
    let addRight = this.n * 2 + 1,
      addLeft = -1;

    for (let i = 0; i < this.n; i++) {
      let blank = "";
      addRight--;
      addLeft++;
      for (let j = 1; j <= this.n * 2 - 1; j++) {
        if (j > addLeft && j < addRight) {
          blank += "*";
        } else {
          blank += "_";
        }
      }
      console.log(blank);
    }
  }

  quiz23() {
    const lines = this.n * 2 - 1;
    const middleLine = Math.floor(lines / 2);

    let addRight = this.n - 1,
      addLeft = this.n + 1;

    for (let i = 0; i < lines; i++) {
      let blank = "";
      i > middleLine ? addRight-- : addRight++;
      i > middleLine ? addLeft++ : addLeft--;

      for (let j = 1; j <= this.n * 2 - 1; j++) {
        if (j >= addLeft && j <= addRight) {
          blank += "*";
        } else {
          blank += "_";
        }
      }
      console.log(blank);
    }
  }

  quiz24() {
    const lines = this.n * 2 - 1;
    const middleLine = Math.floor(lines / 2);
    let num = 0;

    let addRight = this.n - 1,
      addLeft = this.n + 1;

    for (let i = 0; i < lines; i++) {
      let blank = "";
      i > middleLine ? addRight-- : addRight++;
      i > middleLine ? addLeft++ : addLeft--;

      for (let j = 1; j <= this.n * 2 - 1; j++) {
        if (j >= addLeft && j <= addRight) {
          num += 1;
          blank += num;
        } else {
          blank += "_";
        }
      }
      console.log(blank);
    }
  }
}

const draw = new drawN(4);
const draw2 = new drawN(4);
