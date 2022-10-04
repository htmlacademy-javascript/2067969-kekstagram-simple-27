function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength();


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(20, 140);

//
