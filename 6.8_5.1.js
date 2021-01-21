const exponentation = (a, b) => {
  let p = 1;
  for (let i = 0; i < b; i++) {
    p *= a;
  }
  console.log(p);
};
exponentation(2, 3);
