/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

 //1.中心扩散找回文串函数
 function expandAroundCenter(s, l, r) {     //这里传入l和r是为了处理回文串长度奇数和偶数的情况
     //防止索引越界，若字符两边一样则两边扩散
     while (l >= 0 && r < s.length && s[l] == s[r]) { 
         //向两边扩散
         l--;
         r++;
     }
     //返回以s[l]和s[r]为中心的回文串
     return s.substring(l + 1, r);
 }

//主函数
var longestPalindrome = function(s) {
      var max="";  //最长回文子串初始化
      for(var i=0;i<s.length;i++){
          var s1 = expandAroundCenter(s,i,i);   //以s[i]为中心的回文子串
          var s2=expandAroundCenter(s,i,i+1);   //以s[i]和s[i+1]为中心的回文串
          //更新最长回文子串
          max=max.length>s1.length?max:s1;     
          max=max.length>s2.length?max:s2;
      }
      return max;
};



// @lc code=end

