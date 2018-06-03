/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//枚举法
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
// twoSum([0, 1, 2, 3, 4], 7)
//时间复杂度O(n2)
// ******
//HashMap式:通过将数组中元素存在MAP中,寻找MAP的key,来降低时间复杂度
let twoSumHash = (nums, target) => {
    const MAP = {}
    nums.forEach((item, index, element) => {
        let num = target - item
            //num in MAP ,如果传进来的index对应的item 和已经存在表中的某个值相加等于 target则return 否则 put到表中
            //此处要注意不能先MAP 一定要先判断 不然如果元素值相同 则被覆盖
        if (MAP.hasOwnProperty(num)) {
            console.log([MAP[num], index]);
            return [MAP[num], index]
        }
        MAP[item] = index
    });
}
twoSumHash([2, 7, 11, 15], 9)