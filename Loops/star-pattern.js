/**
 * @param {number} n
 */
function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

/**
 * @param {number} n
 */
function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

/**
 * @param {number} n
 */
function pattern3(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}

/**
 * @param {number} n
 */
function pattern4(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}

/**
 * @param {number} n
 */
function pattern5(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j < n - i - 1) {
        row = row + " ";
      } else {
        row = row + "*";
      }
    }
    console.log(row);
  }
}

/**
 * @param {number} n
 */
function pattern6(n) {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + toggle;

      if (toggle === 1) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(row);
  }
}

// pattern1(4);
// pattern2(4);
// pattern3(5);
// pattern4(7);
// pattern5(5);
pattern6(5);
