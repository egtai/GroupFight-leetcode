/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const res = []; //保存滑动窗口的最大值
    const q = []; //滑动窗口队列

    for (let i = 0; i < nums.length; i++) {
        //1.在队尾添加元素num[i]
        var last = q.length - 1; //队列的最后一个元素的索引
        while (last >= 0 && nums[i] > q[last]) { //2.循环求解序列中的最大值
            //2.求队列中的最大值：如果新入队列的元素，比队尾元素大，队尾被更新成新入队列的元素,保证队头为队列中的最大元素
            q.pop(); //队尾移除，
            last = q.length - 1; //队列更新长度
        }
        q.push(nums[i]); //入队列

        // 当窗口i + 1 - k >= 0时，窗口满了有三个数了
           
        const j = i + 1 - k;     //窗口向右滑动过程中最后一个元素的索引。
        if (j >= 0) {
            res.push(q[0]); //保存每一次k个窗口的最大值
            if (nums[j] === q[0]) { //3.向有滑动过程中，如果序列中的最大元素即退出窗口，则移除队列头部元素
                q.shift(); // 
            }
        }
    }
    return res;
};
// @lc code=end

