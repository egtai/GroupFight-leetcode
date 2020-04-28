/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */
//双指针写法
// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var left=0;
    var right=s.length-1;
    while(left<right){
        var tem=s[left];
        s[left]=s[right];
        s[right]=tem;
        left++;
        right--;
    }
};

function swap(s,left,right){  //swap函数应该写成这样，传指针（引用值），元素是原始值无交换效果
     var tem = s[left];
     s[left] = s[right];
     s[right] = tem;
}

// @lc code=end

