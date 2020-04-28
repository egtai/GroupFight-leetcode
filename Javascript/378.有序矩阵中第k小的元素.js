/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {

    //解法一：数值中位数（比较慢）
  var n = matrix.length,
      lo = matrix[0][0]
  var hi = matrix[n - 1][n - 1];
  var mid, count;

  while (lo < hi) {
      mid = (lo + (hi - lo) / 2) >> 0;  //中位数如何求解--数值中位数
      count = countLEQ(matrix, mid);
      if (count < k) {
          lo = mid + 1;
      } else {
          hi = mid;
      }
  }
  return lo;

  //解法二：下标中位数（会块一点）
 
};

//求小于mid的数有几个（count），然后count和k比，由此判断k落在left ,mid,right那一个区间
var countLEQ = function (matrix, x) {
    var n = matrix.length;
    var count = 0;
    var j;

    matrix.forEach(function (row) {
        for (j = 0; j < n && row[j] <= x; j++) {
            ;
        }
        count += j
    });
    return count;
};
// @lc code=end

