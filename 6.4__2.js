const simpleOrNot = (n) => {
  let c = 0;
  if (n > 1000) {
    console.log("Данные не верны");
  } else {
    if (n == 1 || n == 0) {
      console.log("1 и 0 не являются простыми или составными числами");
    } else {
      for (i = 0; i <= n; i++) {
        if (n % i == 0) {
          c++;
        }
      }
      if (c > 2) {
        console.log("Это число составное");
      } else {
        console.log("Это число простое");
      }
    }
  }
};
simpleOrNot(1);
simpleOrNot(0);
simpleOrNot(67);
simpleOrNot(63);
