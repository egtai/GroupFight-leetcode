/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    // //1.思考左右边界
    // var left=0;
    // var right=nums.length-1;     //right=nums.length-1;

    // while(left+1<right){    //2.思考循环条件，避免判断返回左还是右边界
    //     var mid=left+Math.floor((right-left+1)/2); //3.思考中位数（左右）--确保不会造成死循环,这里和第3点相关
    //     if(nums[mid]==target){
    //         return mid;
    //     }

    //     if(nums[mid]>target){      //3.思考排除中位数时，左右边界的取值
    //          right=mid-1;           //or reight=mid-1;right=mid多判断一下
    //     }else{
    //         left=mid+1;         // or left=mid  往内夹所以left+1
    //     }
    // }

    // //4.思考后处理如果目标不在，left ,mid ,right 题目说返回啥就放回啥
    // if(nums[left]==target) return left;
    // if(nums[right]==target) return right;
    //  return -1;

            // //1.思考左右边界
            // var left = 0;
            // var right = nums.length - 1; //right=nums.length-1也可;

            // while (left < right) { //2.思考循环条件，避免判断返回左还是右边界
            //     var mid = left + Math.floor((right - left) / 2);
            //     if (nums[mid] == target) {
            //         return mid;
            //     }

            //     if (nums[mid] > target) {
            //         right = mid-1; //right=mid-1 
            //     } else {
            //         left = mid+1;
            //     }
            // }

            // //5.后处理                                                 
            // return nums[left] === target ? left : -1;

            //1.思考左右边界
            var left = 0; //左边界
            var right = nums.length - 1; //右边界

            while (left <= right) { //2.思考循环条件
                var mid = left + Math.floor((right - left) / 2); //3.思考中位数（左右），这里预设为左中位数
                if (nums[mid] == target) {
                    return mid;
                }
                if (nums[mid] > target) { //4.思考以下排除中位数缩小边界，总原则是不漏选不进入死循环即可，与1,2,3条件环相扣可至上而下，也可至上而下去改变条件
                    right = mid-1; //or reight=mid-1也可;right=mid不可，夹到一位数时，会出现循环
                } else {
                    left = mid+1; // or left=mid不可，因为中位数为左中位数，剩余两元素时，总有left==mid(左)，及left<=right总成立，即死循环
                }
            }
            //5.无需进行后处理，找不到直接返回值-1             //由于2的循环条件可以知道，目标元素只可能在循环内部返回即mid处，即全部“夹逼”完了，剩余0个元素
            return -1;
    
};
// @lc code=end

