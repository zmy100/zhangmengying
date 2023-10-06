function fn() {
  console.log(this.a + this.b);
}
var obj = {
  a: 111,
  b: 222,
  fn: fn,
};
obj.fn(); /* 结果：333 */
// obj调用fn(),规则1,fn()里面的a,b值从obj里面获得
