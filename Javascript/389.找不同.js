/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var sum1=0; //用来保存s字符串中元素uicode编码和的
    var sum2 = 0 //用来保存t字符串中元素uicode编码和的

    for(var i=0;i<s.length;i++){
        sum1+=s[i].charCodeAt();
    }

    for (var i = 0; i < t.length; i++) {
        sum2 += t[i].charCodeAt();
    }
    return String.fromCharCode(sum2-sum1); //即为新增的
    };

//法二：在t中删除s有的字母，留下的的即为新增字母，但是新增相同字母就不行了
// @lc code=end

