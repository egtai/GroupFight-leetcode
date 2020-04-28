/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
/* 
双指针解法：
1.因为木桶效应，面积总是受短的指针影响，因此没遍历一次，求面积，
   应该是短的向长的靠拢，在头尾设定指针
*/
var maxArea = function(height) {
    var maxArea=0;
    var l=0;
    var r=height.length-1;
    while(l<r){
        maxArea=Math.max(maxArea,Math.min(height[l],height[r])*(r-l));
        if(height[l]<height[r]){
            l++;
        }else{
            r--
        }
    }
    return maxArea;
};
// @lc code=end

