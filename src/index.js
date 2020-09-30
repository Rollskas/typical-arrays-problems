
exports.min = function min (array) {
  if (array)
    if (array.length)
      return array.sort(function(a,b){return a - b})[0];
  return 0;
}

exports.max = function max (array) {
  if (array)
    if (array.length)
      return Math.max.apply(null,array)
  return 0;
}

exports.avg = function avg (array) {
  if (array)
    if (array.length)
      return array.reduce((a,b)=> a + b) / array.length
  return 0;
}
