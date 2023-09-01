function fun() {
  arguments[4]();
}
fun("A", "B", "C", "D", function () {
  console.log(this[3]);
}); /* 结果:D */
// 规则3，arguments对象是类数组对象，arguments[4]()---> function () {},this[3]的值是fun()里面的下标为3的项
