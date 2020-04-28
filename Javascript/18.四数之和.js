/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */
//双指针解法
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let ans=[];
    const len=nums.length;

    //如果数组为null或者len<4
    if(nums==null || len<4){
        return ans;
    }

    //排序-升序
    nums.sort((a,b)=>a-b);
    /*定义4个指针
     k
     i=k+1;
     L=i+1;
     R=len-1; 数组的最大值也就最后一个数
    */

    for(let k=0;k<len-3;k++){  //-3是因为1+3四个元素，后面三个取不到啦
        if(k>0&&nums[k]==nums[k-1]){    //当k的当前值与上一个值相等时，去重复跳过
                continue;
        }
        
        //进一步优化，判断最小值和最大值与target大小关系，减少不必要的运行
        let min=nums[k]+nums[k+1]+nums[k+2]+nums[k+3];
        if(min>target){
            break;          //最小值都比目标大，直接跳出了，后面找不到了
        }

        let max=nums[k]+nums[len-1]+nums[len-2]+nums[len-3]
        if(max<target){
            continue;  //k往后看可能有更大的继续
        }

        //第二层循环--和三数和一样的
        for(let i=k+1;i<len-2;i++){
            if(i>k+1&&nums[i]==nums[i-1]){
                continue;
            }

            let L=i+1;
            let R=len-1;
            
            //再一步优化(同上)
            let min1=nums[k]+nums[i]+nums[L]+nums[L+1];
            if(min1>target){
                continue;
            }

            let max1=nums[k]+nums[i]+nums[R-1]+nums[R];
            if(max1<target){
                continue;
            }

            while(L<R){
                let curr=nums[k]+nums[i]+nums[L]+nums[R];
                if(curr==target){
                    ans.push([nums[k],nums[i],nums[L],nums[R]]);
                    while (L < R && nums[L] == nums[L +1]) {
                        L++;
                    }
                    while (L < R && nums[R] == nums[R -1]) {
                        R--;
                    }
                    L++;
                    R--
                }else if(curr>target){
                    R--;
                }else{
                    L++;
                }
            }
        }
    }
    return ans;
};
// @lc code=end

