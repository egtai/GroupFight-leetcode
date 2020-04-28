/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

//按行排序
var convert = function(s, numRows) {
    if(numRows==1){
        return s;
    }

    //1.初始化字符串数组
    const len=Math.min(s.length,numRows);
    const rows=[];
    for(let i=0;i<len;i++){    
        rows[i]="";
    }
    let loc=0;     //当前字符串数组的下标
    let down=false;  //是否要向下
    
    //2.遍历字符串按Z字形依次放入数组中
    for(const c of s){
        //rows["LCIR","ETOESIIR"] -->row[loc=0]="LCIR";
        rows[loc]+=c;                      //将每一行看成新的字符串数组
        if(loc==0 || loc== numRows-1){    //判断方向
            down=!down;      
        }
        loc+=down?1:-1;                  //向下为true
    }
    
    //遍历输出字符串数组rows
    let res="";
    for(const row of rows){
        res+=row;
    }
    return res;
};
// @lc code=end

