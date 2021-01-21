function getQuantity(array) {
  let c = 0;
  let k = 0;
  let f = 0;
  for (let i = 0; i < arr.length; i++) {
    let type = typeof arr[i];
    if (type == "number") {
      if (arr[i] % 2 == 0 && arr[i] != 0 && arr[i] != NaN) {
        c++;
      }
      if (arr[i] % 2 == 1 && arr[i] != 0 && arr[i] != NaN) {
        k++;
      }
      if (arr[i] == 0) {
        console.log("В массиве есть 0");
      }
    }
  }
  console.log(`В массиве ${c} четных чисел`);
  console.log(`В массиве ${k} нечетных чисел`);
}
let arr = [0, 1, null, "hello", 2, 3, 5, 7];
getQuantity(arr);
