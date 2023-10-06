// 计算工资
function countSalary(year) {
  if (year == 1) {
    return 10000;
  }
  return 1.05 * countSalary(year - 1);
}
console.log(countSalary(20));
