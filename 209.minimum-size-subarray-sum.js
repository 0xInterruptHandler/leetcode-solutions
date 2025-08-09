// @leet start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let n = nums.length;
    let minLength = Infinity;
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < n; end++) {
        currentSum += nums[end];

        // Reducir la ventana mientras se cumpla la condición
        while (currentSum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            currentSum -= nums[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
};
// @leet end
