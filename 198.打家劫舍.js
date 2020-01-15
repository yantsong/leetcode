/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(!nums.length) return 0
  if(nums.length === 1) return nums[0]
  //  选或不选问题 先写状态转移方程
  //  第n项的最大金额 = Max (当前金额 + 当前-2, 当前-1)
  //  fn = Max((current + f(n-2),f(n-1)))
  // 转移方程思考思路: 首先确定是比较,然后确定比较对象,确定比较的条件,这里是相邻不能选,所以其中一个比较是 elemtn + f(n-2)
  // 另一个比较对象自然就是f(n-1)了 因为f(n-1)肯定是经过计算element+ f(n -3 )和f(n-2)了 
  // 所以自然得出 fn  = Max( element + f(n-2) , f(n-1))
  //基线退出条件 f0 = 0 f1 = nums[0]
  const results = [0,nums[0]]
  //暂定的max
  let max = nums[0]
  for (let index = 2; index < nums.length + 1; index++) {
    const element = nums[index - 1];
    max = results[index]  =  Math.max((element + results[index - 2]),results[index -1])
  }
  return max
};
rob([2,1,1,2])
// @lc code=end

