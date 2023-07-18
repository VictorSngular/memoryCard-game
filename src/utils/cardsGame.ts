export const generateUniqueNumbers = (): number[] => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = [];

  while (arr.length > 0) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    result.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
  }

  return result;
};

export const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 9) + 1;
};
