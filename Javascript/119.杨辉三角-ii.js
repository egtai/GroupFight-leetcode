/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var row = [1];

    for (var i = 1; i <= rowIndex; i++) {
        for (var j = i; j > 0; j--) {
            if (j === i)
                row[j] = 1;
            else
                row[j] = row[j - 1] + row[j];
        }
    }
    return row;
};
// @lc code=end

