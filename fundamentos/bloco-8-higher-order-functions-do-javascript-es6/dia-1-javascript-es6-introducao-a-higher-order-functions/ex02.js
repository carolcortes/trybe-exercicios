const checkNumber = (number, randomNumber) => number === randomNumber;

const lotteryNumber = (number, callback) => {
  const randomNumber = Math.floor(Math.random() * 6);
  return callback(number, randomNumber) ? 'Lucky day, you won!' : 'Try again!';
}

console.log(lotteryNumber(2, checkNumber));