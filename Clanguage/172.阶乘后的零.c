/*
 * @lc app=leetcode.cn id=172 lang=c
 *
 * [172] 阶乘后的零
 */

// @lc code=start
//时间复杂度要有O(log n)
//暴力法会过不时间复杂度

int trailingZeroes(int n){
  int five=0;
  while(n>=5){
      five+=n/5;
      n/=5;               //遇到25的5倍数时 n//5两次5x5=25
  }
  return five;
}


// @lc code=end

