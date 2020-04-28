/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // var stack=[]; //定义一个栈
    // var map=new Map();
    // map.set('(',')');
    // map.set('{', '}');
    // map.set('[', ']');
    // for(var i=0;i<s.length;i++){
    //     if(!map.get(s[i])){        //闭括号不能存在value的,其本身就是value
    //       if(stack.length==0){     //情况1：栈长度为零了，还遍历一个闭括号进来那就不满足了
    //            return false;
    //       }
    //       var topEle = stack.pop(); //出栈的栈顶元素
    //       if(map.get(topEle)!=s[i]){   //如果出栈的元素与其value（新遍历的闭括号）对应即为闭合括号，继续下一步
    //          return false;   //即出栈的栈顶元素与新遍历的闭括号不不构成key-value-->不为闭合括号
    //       }
    //     }else{                   //开阔号不断的入栈
    //         stack.push(s[i]); //入栈
    //     }
    // }
    // return stack.length==0; //出入栈结束后，看栈的长度是否为空，空即全部删除完毕，是闭合的，剩余为不闭合
    
    const stack = [];                     //1.定义个栈，利用栈的先进后好=后出的特点
    for (let i = 0; i < s.length; i++) {  //2.遍历字符串
        let c = s[i];                 
        switch (c) {                 //3.遇到开括号，入栈闭括号---3种
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:                //3.1遇到比括号，就出栈一个栈顶元素看是否相等，不相等说明括号有穿插，及无效，相等继续
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    return stack.length === 0;     //循环结束后判断栈是否为空，为空则有效。
};
// @lc code=end

