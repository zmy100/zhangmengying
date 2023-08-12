//  计算平均数
function avg() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}
console.log(avg(1, 2, 3, 4, 5));
