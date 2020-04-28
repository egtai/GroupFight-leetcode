/*
 * @lc app=leetcode.cn id=374 lang=java
 *
 * [374] 猜数字大小
 */

// @lc code=start
/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int left=1;
        int right=n;
        while(left<=right){
            int mid = left+(right-left)/2;
            if(guess(mid)==0){
                return mid;
            }else if(guess(mid)==1){
                left = mid+1;
            }else{
                right = mid-1;
            }
        }
        return -1;
    }
}

// @lc code=end

