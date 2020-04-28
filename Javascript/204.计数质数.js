/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var count=0;
    var primes=[]; //新建一个数组
    for(var i=0;i<n;i++){    //初始化。默认都是质数
       primes[i]=true;
    }

    //两特殊单独拿出来
    primes[0]=false;
    primes[1]=false;

 //做一个筛分，素数的倍数都排除
 for(var i=2;i<Math.sqrt(n);i++){    //这里以10为例，开方的结果为3.16，优化以下循环，省了i=4,5,6..
     for(var j=2;i*j<n;j++){
         primes[i*j]=false;      //质数的倍数都给标记上
     }
 }

  //统计true的个数即质数的个数
  var count=0;  //计数器
  var len=primes.length;
  for(var i=0;i<len;i++){
      if(primes[i]){
          count++;
      }
  }
  return count;
};
// @lc code=end

