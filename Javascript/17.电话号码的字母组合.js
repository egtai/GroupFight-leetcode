/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
//回溯算法，还不大懂
var letterCombinations = function(digits) {
    
        if (digits.length === 0) return [];

        const map = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'pqrs',
            8: 'tuv',
            9: 'wxyz',
        };

        let res = [];

        function go(i, s) {
            if (i === digits.length) {
                res.push(s);
                return;
            }

            for (let c of map[digits[i]]) {
                go(i + 1, s + c);
            }
        }

        go(0, '');
        return res;
    
};
// @lc code=end

