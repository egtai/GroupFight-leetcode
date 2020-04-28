/*
 * @lc app=leetcode.cn id=1 lang=java
 *
 * [1] 两数之和
 * 方法：一遍哈希法，一遍插入到HASH表中，一边回过头来检查表中是否已存在当前元素对应的目标元素
 * 时间复杂度：利用其减低了查找比较事件复杂度O(n2)->O(1),遍历数组判断为O(n);
 * 空间上复杂度在：开辟哈希表存储在O(1);
 */
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<nums.length;i++){
            int complement=target-nums[i];
            if(map.containsKey(complement)){  //hash表中存在关键字+nums[i]
               return new int [] {map.get(complement),i}; //通过get函数找其下标，然后返回
            }
            map.put(nums[i],i);  //将数组的值和索引存入hash表
        }
        throw new IllegalArgumentException("no two sum solution"); //抛出异常
    }
}

