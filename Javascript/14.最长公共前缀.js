/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0){
        return "";
    }
    var ans=strs[0]; //最长公共前缀初始化为strs中的第一个字符串
    for(var i=1;i<strs.length;i++){  //将后续的字符串与ans两两比对
        for (var j = 0;j < ans.length && j < strs[i].length; j++) {
             if(ans[j]!=strs[i][j]){
                 break;
             }
        }
        ans = ans.substr(0, j); //substr返回字符串指定个数字符串（0，0）为空
        if (ans === "") { //在查找的过程中公共前缀不存在，继j=0，直接放回即可
            return ans;
        }
    }
    return ans;
};
// @lc code=end

