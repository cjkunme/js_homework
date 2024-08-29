function pow(x, y) {
    if (y > 0) {
      let result = 1;
      for (let i = 0; i < y; i++) {
        result = result * x;
      }
      return result;
    } else if (y === 0) {
      let result = 1;
      return result;
    } else if (y < 0) {
      y = y * (-1);
      let result = 1;
      for (let i = 0; i < y; i++) {
        result = result * x;
      }
      return 1 / result;
    }
  }
  
  let result0 = pow(3, 2);
  console.log(result0);
  let result1 = pow(3, -2);
  console.log(result1);
  let result2 = pow(2, 3);
  console.log(result2);
  let result3 = pow(2, -3);
  console.log(result3);
  let result4 = pow(3, 0);
  console.log(result4);