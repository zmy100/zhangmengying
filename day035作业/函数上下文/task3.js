function outer() {
  var a = 1;
  var b = 2;
  return {
    a: 3,
    b: 4,
    fn: function () {
      console.log(this.a + this.b);
    },
  };
}
outer().fn(); /* 结果:7 */
// 调用outer()函数，相当于调用一个对象，规则1，找到fn(),a=3,b=4
