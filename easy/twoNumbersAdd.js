/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let index = 0; index <= nums.length; index++) {
        const element = nums[index];
        for (let j = index + 1; j <= nums.length; j++) {
            const element = nums[j];
            if (nums[index] + nums[j] == target) {
                console.log([index, j], 1)
                return [index, j]
            }
        }

    }


};
twoSum([0, 1, 2, 3, 4], 7)