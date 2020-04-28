/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const VOWELS = {       //元字母对象
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1,
        'A': 1,
        'E': 1,
        'I': 1,
        'O': 1,
        'U': 1
    };
    const arr = s.split('');
    let i = 0,      //双指针
        j = arr.length - 1;
    while (i < j) {
        if (VOWELS[arr[i]] && VOWELS[arr[j]]) {   //看两指针是否都为元字母
            [arr[i], arr[j]] = [arr[j], arr[i]]; //es6的元素交换
            i++;
            j--;
        } else if (VOWELS[arr[i]]) {
            j--;
        } else {
            i++;
        }
    }
    return arr.join('');
    };

// @lc code=end

