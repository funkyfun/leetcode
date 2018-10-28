
function randNum(min, max) {
  let num = Math.floor(Math.random()*max)
  return num = num < min ? min : num
}

function randNumArr(min, max, length) {
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push(randNum(min, max))
  }
  return arr
}
function randNumArrDifferent(min, max, length) {
  if (length > max - min) length = max - min
  let arr = []
  while (length > arr.length) {
    let num = randNum(min, max)
    arr.indexOf(num) > -1 || arr.push(num)
  }
  return arr
}
module.exports = {
  randNum,
  randNumArr,
  randNumArrDifferent
}