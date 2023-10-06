var obj1 = {
  a: 11,
  b: 22,
  fn: function () {
    console.log(this.a + this.b);
  },
};
var obj2 = {
  a: 33,
  b: 44,
  fn: obj1.fn,
};
obj2.fn(); /*结果：77 */
// obj1里面的fn函数在obj2里面调用，规则1，对象.函数()-->对象，a=33,b=44
