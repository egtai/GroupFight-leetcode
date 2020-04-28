/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length!=t.length){  //长度不想的的直接返回false
        return false;
    }

     var map = new Map();   //新建map集合
     for (var n of s) {      //将s放入Map集合中，并标记他们出现的次数通过set
         if (map.has(n)) {
             map.set(n, map.get(n) + 1); //重复出现元素键值+1，用于计数标记
         } else {
             map.set(n, 1);         //键值设为1
         }
     }

     for (var n of t) {            
         if (map.has(n) && map.get(n) > 0) { //遍历判断t中元素在s中是否存在，map.get(n) > 0表示数量匹配
               map.set(n, map.get(n) - 1);   //每找到一个，键值-1,以保证数量上一致
         }else{                     
             return false;
         }
     }                                     
    return true; //循环结束后为s与t异位,必定t中的元素在s的map中都能找到
     
};
// @lc code=end

