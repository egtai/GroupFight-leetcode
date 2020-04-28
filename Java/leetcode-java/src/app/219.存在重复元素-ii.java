import java.util.Set;

/*
 * @lc app=leetcode.cn id=219 lang=java
 *
 * [219] 存在重复元素 II
 */
//哈希表--,利用其不重复性，和k长度区间滑动来，来限制加入哈希表的元素来判断
// @lc code=start
class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Set<Integer> set=new HashSet<>(); //set集合
        for(int i=0;i<nums.length;i++){
            if(set.contains(nums[i])){ //如果在散列表中搜索到当前元素。
                return true;
            }
            set.add(nums[i]); //
            if(set.size()>k){   //保证在哈希表里最多只有K个元素，即判断数组若在K距离有相同的数
                set.remove(nums[i-k]);//移除最前的（最旧的）
            }
        }
        return false;
    }
}
// @lc code=end

