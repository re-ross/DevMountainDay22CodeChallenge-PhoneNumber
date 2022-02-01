function createPhoneNumber(numbers) {
  let newPhoneNumber = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    newPhoneNumber = newPhoneNumber.replace("x", numbers[i]);
  }
  return console.log(newPhoneNumber);
}

createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
createPhoneNumber([0, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
