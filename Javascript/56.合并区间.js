/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
   if(!intervals.length){        //如果区间为空
       return intervals;
   }
   //按区间的start升序排列-->a-b<0
   intervals.sort((a,b)=>a[0]-b[0])
   let res=[];                //初始化返回的新集合
   res.push(intervals[0]);    //预设排序后的第一个区间 ，此时的合并区间的start=第一个区间的start是最小的，end值还需更新
   //遍历排序后的区间，找合并区间的end
   let len=intervals.length;   //集合的长度
   for(let i=1;i<len;i++){
        let len1 = res.length;   //新集合的长度
       let curr=intervals[i];
       //遍历各区间的start与res这个新集合最后一个区间的end（res[len-1][1]）比,star<end即有交集
       if(curr[0]<=res[len1-1][1]){  
           //更新end值，取较大的即为合并区间的end值，
           res[len1-1][1]=Math.max(res[len1-1][1],curr[1])
       }else{
           res.push(intervals[i])
       }
   }
   return res;
};
// @lc code=end

