
exports.min = function min (array) {
  if (!array || array.length == 0) {return 0;}
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (!array || array.length == 0) {return 0;}
  return Math.max.apply(0, array);
}

exports.avg = function avg (array) {
  if (!array || array.length == 0) {return 0;}
  return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue }, 0) / array.length;
}