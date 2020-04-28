/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {

    //1.利用toString(2)方法把二进制数装换成字符串，然后正则替换调所有0，剩下1，求字符串长度即1的个数
    // return n.toString(2).replace(/0/g,"").length;
    //法二：n&(n-1)总能把n中最低位1变为0，依次来计算
    var ans = 0;
    while (n != 0) {         //输入n的二进制会在这个变为默认10进制计算，循环结束条件是n最低无1即统计完成了。
        ans++;
        n &= (n - 1);
    }
    return ans;
};
// @lc code=end

