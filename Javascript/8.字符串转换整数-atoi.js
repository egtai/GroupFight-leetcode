/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
/*
 1.^ :匹配输入字符串的开始位置， 除非在方括号表达式中使用， 
  当该符号在方括号表达式中使用时， 表示不接受该方括号表达式中的字符集合。 
  要匹配 ^ 字符本身， 请使用\ ^ 。

 2.?:匹配前面的子表达式零次或一次， 或指明一个非贪婪限定符。 要匹配 ? 字符， 请使用\ ? 。

 3.|:指明两项之间的一个选择。 要匹配 | ，请使用\ | 。

 4.+: 匹配前面的子表达式一次或多次。 要匹配 + 字符， 请使用\ + 。

*/
var myAtoi = function(str) {
    str = str.trim(); //trim() 方法用于删除字符串的头尾空格,不会改变原始字符串。

    //正则表达式
    var pattern=/^(\-|\+)?[0-9]+/;
    var tmp=pattern.exec(str);   
    if(tmp){
        var num=Number(tmp[0]);  //tmp是个类数组，第一位是匹配到的字符串
        if (num < -2147483648){
            return -2147483648;
        }
        if (num > 2147483647){
            return 2147483647;
        }
        return num;
    }
    return 0;
};
// @lc code=end

