/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    	var map = {};
    	var words = str.split(" "); //句拆分为数组
    	var patt = pattern.split("");
    	var container = [];

    	if (words.length !== patt.length) return false; //比较数组长度，不相等肯定不是一个模式

    	for (var i = 0; i < patt.length; i++) {
    	    if (map.hasOwnProperty(patt[i])) {
    	        if (map[patt[i]] !== words[i]) {
    	            return false;
    	        } else {
    	            continue;
    	        }
    	    } else {
                //some():返回一个boolean，判断是否有元素是否符合func条件(有一个就行)（并没有改变原数组）
    	    if (!container.some(function (item) {
    	                return item === words[i];
    	            })) {
    	            map[patt[i]] = words[i];
    	            container.push(words[i])
    	        } else {
    	            return false;
    	        }
    	    }
    	}
    	return true;
};
// @lc code=end

