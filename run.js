function add() {
  var x, y, text;
   // 获取 id="numb" 的值
  x = document.getElementById("num1").value;
  y = document.getElementById("num2").value;
   // 如果输入的值 x 不是数字或者小于 1 或者大于 10，则提示错误 Not a Number or less than one or greater than 10
  if (isNaN(x)) {
    text = "输入错误";
  } else {
    text = x + y;
  }
  document.getElementById("ans").innerHTML = text;
}
