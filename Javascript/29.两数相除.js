/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
//二分法，被除数和除数均为整数
var divide = function(dividend, divisor) {

     //1.几种特殊情况的判断
     if(dividend===0){
         return 0;
     }
     if(divisor===0){
         return 0;
     }
    if (dividend === -2147483648 && divisor===-1){  //除法的溢出情况
        return 2147483647;                          //整数最大值
    }
    

    //符号处理
    var res=true;                      //预设同号得正
    if(dividend>0 !== divisor>0){      //异号得负
               res=false;
    }

    //取绝对值进行运算
    dividend=Math.abs(dividend);
    divisor=Math.abs(divisor);
    
    if(dividend<divisor){            //被除数小于除数，直接返回0
        return 0;
    }

    var count=1,                 //计数器
    result=0,                   //返回结果
    curVal = divisor;          //当前累加值
    while(dividend>=divisor){
        count=1;
        curVal = divisor;
        var mid=dividend>>1;      //dividend/2^1;
        while (curVal<=mid) {
            curVal=curVal<<1;     //curVal*2
            count=count<<1;
        }
        result+=count;       
        dividend-=curVal;   //减去被计算的divisor总和
    }
        if(!res){              //判断返回值的符号
            result=-result;
        }
    return result;
};
// @lc code=end

