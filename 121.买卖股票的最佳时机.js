/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0
  let lowIndex = 0
  const cache = {
    lowIndex: 0,
    hightIndex: 1,
    range: 0
  }
  for (let index = 1; index < prices.length; index++) {
    const activeRange = prices[index] - prices[lowIndex]
    //当前元素 小于最小的 更新 假 lowindex 
    if (prices[index] < prices[lowIndex]) {
      lowIndex = index
    } else if (activeRange > 0 && activeRange > cache.range) {
      cache.hightIndex = index
      cache.lowIndex = lowIndex
      cache.range = prices[cache.hightIndex] - prices[cache.lowIndex]
    }
    //可以交易 并且 当前差额大于缓存中的 则更新缓存

  }
  return cache.range
};
//后记: 
// 
// 动态转移方程其实是:
// 前i天的最大收益 = max{前i-1天的最大收益，第i天的价格-前i-1天中的最小价格
// init min = prices[0] 
// init max = 0
// min = min(element , min)
// max = Math.Max(max , element - min)
// -------------------------------------------------
// 下面是来自网友的思考
// DP的keypoint

// 转移方程（大问题与小问题的关系）

//  1）定义状态：定义一个状态，例如f(i) = 到a[i]为止到最小值
//  2）设计转移方程：根据如上状态方程定义，则有 f(i+1) = min(f(i), a[i+1])
 
//  tip:
//  转移方程的设计完全依赖于状态的定义，并不是什么样的状态定义，都能有状态转移方程，因此，状态定义决定了该DP方法能否实现
// 初始条件的设置： Dp本质还是迭代，总要有一个迭代的初值。

// 特殊处理小size的问题：有些情况，由于size太小，没法带入转移方程中。

// 根据该问题，依次回答上述问题：

// 大问题与小问题的关系

//  1）状态定义：我们定义max_profit为第i天的最大收益
//  2）状态转移方程：
//  第i天的最大收益和第i-1天的最大收益之间的关系：
//      i) 最大收益不是第i天抛出的，                        ---最大收益和第i天的价格无关
//      ii）最大收益是在第i-1天前某天买入的，并在第i天抛出的，  ---与第i天的价格有关

//  因此第i天的最大收益等于：第i天抛出所造成的最大收益 和 第i-1天之前的最大收益 中的最大值
//  即：
//  前i天的最大收益 = max{前i-1天的最大收益，第i天的价格-前i-1天中的最小价格}
//  其中：
//  前i-1天中的最小价格需时时更新并记录
// 初始条件：

//  min 和 max_profit
//  min可以等于第一天的price
//  max_profit可以等于0， 因为最大收益的最小值就是0， 用人话叫，最低也不能赔了
// 小于最小问题的特殊情况： 当list的长度为0 和 1 时， 没有办法带入转移公式中，需要特殊处理。
// @lc code=end