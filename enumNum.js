function enumNum() {
  let enumArray = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) enumArray.push(i);
  }

  return enumArray;
}
