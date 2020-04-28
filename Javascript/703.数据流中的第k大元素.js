/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.arr = nums.sort((a, b) => a - b);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    //1. 二分搜索插入位置 同leectode35 
    const insert = () => {
        let l = 0,
         r = this.arr.length;
            //这里右边界扩大1， 因为插入的数可能大于排序数组的最大值， 此时nums长度为len + 1, 即right = len + 1 - 1 = len 
        while (l < r) {
            const mid = l+Math.floor((r-l) / 2);
            if (this.arr[mid] === val) {
               return mid;
            }
            if (this.arr[mid] > val) {
                 r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l;
    }
    const index = insert();         //插入位置的索引
    this.arr.splice(index, 0, val);  //在搜索到的位置上插入该元素，数组长度+1
    return this.arr[this.arr.length - this.k];   //返回第k大元素
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

