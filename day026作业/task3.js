//  判断质数
function isPrimeNum(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      if (num !== i && i !== 1) {
        return false;
      }
    }
  }
  return true;
}
console.log(isPrimeNum(10));
