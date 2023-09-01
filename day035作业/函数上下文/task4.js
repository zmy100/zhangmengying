function fun() {
  console.log(this.a + this.b);
}
var obj = {
  a: 111,
  b: 222,
  c: [
    "hello",
    {
      a: 333,
      b: 444,
      c: fun,
    },
  ],
};
var a = 555;
obj.c[1].c(); /* 结果:777 */
// c[1].c(),规则3,数组[下标]()-->数组，a,b的值在c[]里面获取，a=333,b=444
