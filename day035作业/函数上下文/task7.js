var arr = [
  "A",
  "B",
  "C",
  "D",
  function () {
    console.log(this[1]);
  },
];
arr[4](); /* 结果:B */
// 规则3，arr[4]()--->function(){},数组[下标]()-->数组，this[1]的值是arr数组里面的下标为1的项
