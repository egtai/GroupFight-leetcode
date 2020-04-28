/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
 贪心算法+二分法
 1.贪心就是：新建一个数组，因为希望数组尽可能是长的，所以啊希望每一次插入的
   在上神序列的那个数尽可能是最小的，这样后面就能接受更多的数
 2.利用二分法：来插入，返回插入的位置，之前有一道算法是这样的135，每一次传入更新的序列和遍历数组，
 插入位置只有三种 （数组前，数组中，数组外）
 插入位置在已有元素的前或位置上，已有元素都会被舍弃

 */
var lengthOfLIS = function(nums) {
     var a=[];
     nums.forEach(function(item){
        //  var index = binarySearch(a, item)+1;  二分法1的， //+1返回插入位置不在数组内，超出数组
         var index=binarySearch(a,item); //返回插入位置
         if(a[index]===undefined){  //空的位置,插入一个数
             a[index]=item
         }else{
             a[index]=Math.min(a[index],item); //插入更小的数,这样后面就能有更多的数,
         }
     })
     return a.length;
};

//二分法1
// function binarySearch(a,target) {   //这个二分法还可以一下，成low<hight
//     var low=0,
//         hight=a.length-1;
//     while(low<=hight){                         
//         var mid=low+Math.floor((hight-low)/2);
//         if(a[mid]>=target){
//             hight=mid-1;
//         }else{
//             low=mid+1;
//         }
//     }
//     return hight;
// }

//优化二分法后：
function binarySearch(a, target) { 
    var low = 0,
        hight = a.length;           //插入位置可能在数组外
    while (low < hight) {
        var mid = low + Math.floor((hight - low) / 2);
        if (a[mid] >= target) {
            hight = mid;            //位置可能在函数上
        } else {
            low = mid+1;
        }
    }
    return hight;   //返回left也可
}
// @lc code=end

