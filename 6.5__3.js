const getNum = (a) => {
  const countSum = (b) => {
    return a + b;
  };
  return countSum(3);
};
let resultFunction = getNum(2);
console.log(resultFunction);
