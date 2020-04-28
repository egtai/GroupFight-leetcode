/*
 * @lc app=leetcode.cn id=88 lang=c
 *
 * [88] 合并两个有序数组
 */

// @lc code=start


void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n){
int p=m+n-1; //m为数组nums1的长度，n为数组nums2的长度,用于追踪刚加入的元素的位置
int p1=m-1; //nums1的指针
int p2=n-1; //nums2的指针
nums1Size=m+n;
nums2Size=n;
while(p1>=0&&p2>=0){
   
    nums1[p--]=nums1[p1]<nums2[p2]?nums2[p2--]:nums1[p1--];//新加入的元素比末尾大，直接加入，末尾小插入到末尾前
}
while(p2>=0){    //当nums1为空时（m=1），nums2只有一个元素(n=1)
    nums1[p--]=nums2[p2--];
}

}


// @lc code=end

