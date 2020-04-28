/*
 * @lc app=leetcode.cn id=118 lang=c
 *
 * [118] 杨辉三角
 */

// @lc code=start


/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** generate(int numRows, int* returnSize, int** returnColumnSizes){
 int i=0;
 int j=0;
 *returnSize=0; //无作用，不写会报错，它是系统指定的参数
 int **triangle=malloc(numRows*sizeof(int*));  //新建一个二维数组
 *returnColumnSizes = malloc(numRows*sizeof(int*)); //返回的数组每一行的列数
 for(i=0;i<numRows;i++){
     int num=i+1;
     (*returnColumnSizes)[i]=num;
     triangle[i]=malloc(num*sizeof(int));
     triangle[i][0]=1;
     triangle[i][num-1]=1;
     *returnSize=numRows;
     for(j=1;j<=num-2;j++){
         triangle[i][j]=triangle[i-1][j-1]+triangle[i-1][j];
     }
 }
 return triangle;
}


// @lc code=end

