/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var left=0;    //左窗口
    var right=0;   //右窗口
    var map=new Map();    //map为窗口用来记录s相应字符出现的次数
    var res=0;  //记录最长的长度
    while(right<s.length){         //1.开始移动右窗口--初步符合要求
        var c1=s[right];  //遍历字符串
        if(map.has(c1)){
            map.set(c1,map.get(c1)+1)
        }else{
            map.set(c1,1);
        }
        right++;

        while(map.get(c1)>1){    //2.如果出现重复出现的字符则开始移动左窗口--优化结果
            var c2=s[left];
            map.set(c2,map.get(c2)-1);
            left++;
        }
        res=Math.max(res,right-left);      //保留记录每一次长度（更新最长长度）
    }
    return res;
};
// @lc code=end

