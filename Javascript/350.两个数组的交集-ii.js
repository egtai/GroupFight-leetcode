/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/*map集合
类似于对象, 是键值对的集合, 数据可为任意类型, 与Object的区别在于Object的键
只能是字符串或者Symbols, 但Map可以为任意类型, 且Map中的键值是有序的
Map结构的实例方法
1.set(key, value)
2.get(key)--->value
has(key) --->true/false
*/
var intersect = function(nums1, nums2) {
    var map=new Map();
    for(var n of nums1){      //将数组一放入Map集合中，并标记他们出现的次数通过set
        if(map.has(n)){
               map.set(n,map.get(n)+1); //计数->更新键值
        }else{
            map.set(n,1);
        }
    }
    
    var result=[]; //空数组用来存放交集
    for(var n of nums2){      //遍历数组2来判断公有元素
      if(map.has(n)&&map.get(n)>0){  
          result.push(n);
          map.set(n,map.get(n)-1); //为了让输出的元素与原数组中出现的个数一样
      }
    }
    return result;
};
// @lc code=end

