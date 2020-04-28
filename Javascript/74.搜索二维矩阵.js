/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
//   return [].concat(...matrix).includes(target);
     var m=matrix.length
    
      if (m == 0) { //两种特殊情况 []
          return false;
      }
     var n = matrix[0].length;
     if(n==0){                //两种特殊情况 [[]]
         return false;
     }

     //开始二分查找
     var left=0,
         right=m*n-1;
    while(left+1<right){
        var midIndex=left+Math.round((right-left)/2); //扁平元素的位置

        //注意这里js除法带有小数点，记得取整 row=minIndex/n;col=minIndex%n;
        var midItem=matrix[Math.floor(midIndex/n)][midIndex%n]; //求该位置的元素
        if(target===midItem){
            return true;
        }
        if(midItem>target){
            right=midIndex;
        }else{
            left=midIndex;
        }
    }
    if(matrix[Math.floor(left/n)][left%n]==target) return true;
    if(matrix[Math.floor(right/n)][right%n]==target) return true;
    return false;
};
// @lc code=end

