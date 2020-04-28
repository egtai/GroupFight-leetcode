/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

 /*
 定理1： 设a， b为两个二进制数， 则a + b = a ^ b + (a & b) << 1。
 证明： a ^ b是不考虑进位时加法结果。 当二进制位同时为1时， 才有进位，
  因此(a & b) << 1 是进位产生的值， 称为进位补偿。 
  将两者相加便是完整加法结果
 */
var getSum = function(a, b) {
    while(b!=0){
        var carry=a&b;    //以下都是二进制来算的
        a ^=b;
        b=carry <<1;      //循环结束的条件是进位为0；
    }

    return a;
};
// @lc code=end

