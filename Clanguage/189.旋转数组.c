/*
 * @lc app=leetcode.cn id=189 lang=c
 *
 * [189] 旋转数组
 */

// @lc code=start

//法一循环替换
void rotate(int* nums, int numsSize, int k){
k=k%numsSize; //保证k是小于数组长度，才被移动
int start=0;
int count=0;  //计数器，用来限制循环条件，保证位置都替换(count=numsSize)
for(start=0;count<numsSize;start++){
    int current=start;         
    int prev=nums[start];   //保存需要被移动的元素，并腾出其位置
    do{
        int next=(current+k)%numsSize;  //找出第start个运算的最后位置
        int temp=nums[next];   //将该位置上的元素保存到临时变量temp,腾出位置
        nums[next]=prev;      //将第start个元素移动到它的最后位置
        prev=temp;           //更新需要被移动的元素
        current=next;        //更新当前的位置
        count++;       
    }while(start!=current);
}
}
//法2：逆转三步走（简单易懂）

// @lc code=end

