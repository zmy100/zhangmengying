/**
 *
 * @param {number} checkHeight
 * @param {number} checkAge
 * @returns
 */
// 定义一个专门生成检测对象是否合规的函数
function checkTicket(checkHeight, checkAge) {
  // 生成检测函数
  return function (userHeight, userAge) {
    if (userHeight <= checkHeight && userAge <= checkAge) {
      console.log("可以购买儿童票");
    } else {
      console.log("不可以购买儿童票");
    }
  };
}
// 调用生成函数, 不同的游乐园, 生成不同的检测函数
var checkA = checkTicket(100, 6);
var checkB = checkTicket(120, 5);
var checkC = checkTicket(90, 7);
// 使用检测函数, 检测游客是否合规
var height = 110;
var age = 5;
checkA(height, age);
checkB(height, age);
checkC(height, age);
