/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var start=0,    //记录最短子串的开始位置
        minLen = Number.MAX_VALUE; //js中的最大值--预设为最短子串的长度
    var left=0,    //初始化窗口
        right=0;
    
    //两计数器
    var windows=new Map();    //记录s
    var need=new Map();      //记录t

    var match=0;           //记录有多少个字符匹配到了

    for(var n of t){          //将字符串t全部记录在need中
           if (need.has(n)) {
               need.set(n, need.get(n) + 1);
           } else {
               need.set(n, 1);
           }
    }
    
    //1.移动窗口右边
    while(right<s.length){
        var c1=s[right];
        if(need.has(c1)){
              if (windows.has(c1)) {
                  windows.set(c1, windows.get(c1) + 1);
              } else {
                  windows.set(c1, 1);
              }
              if (windows.get(c1) == need.get(c1)) {
                  match++;
              }
        }
        
         right++;

         while (match == t.length) { //2.windows中的字符已经符合need中的要求了
           
           if (right - left < minLen) { //更新结果
                 start=left;
                 minLen=right-left;
           }
           var c2=s[left];
           if(need.has(c2)){    
                windows.set(c2, windows.get(c2) - 1);
                if(windows.get(c2)<need.get(c2)){
                    match--;
                }
           }
           left++;  //窗口字符串不在need中时左窗口右移动
         }
    }
    return minLen == Number.MAX_VALUE? "" : s.substr(start,minLen);

};
// @lc code=end

