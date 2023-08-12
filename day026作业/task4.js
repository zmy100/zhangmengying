//  求和
function sum(a, b) {
  var sum = 0;
  for (var i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
console.log(sum(3, 7));
