type Result = {
    winnerGroup: string;
    diffBetweenGroup: number;
}

export function maximumCountPositiveNegative(nums: number[]): Result  {
    // In case you use JavaScript
    // Check for Falsy -> null, undefined
    if (!nums || nums.length === 0) {
        return {
            winnerGroup: 'N/A',
            diffBetweenGroup: 0
        }
    }
    let positiveCount = 0;
    let negativeCount = 0;
    // Normal traversal by index
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            positiveCount++;
        } else if (nums[i] < 0) {
            negativeCount++;
        }
    }
    if (positiveCount === negativeCount) {
        return {
            winnerGroup: 'N/A',
            diffBetweenGroup: 0
        }
    }
    return {
        winnerGroup: positiveCount > negativeCount ? 'positive' : 'negative',
        diffBetweenGroup: Math.abs(positiveCount - negativeCount)
    }
}

const nums = [7, 6, -1000, 1, 0, 7, 0, 6, 0, 7, 4, 6, 5, 0, 1, 6, 8, 0, 7, 1, 4];
const result = maximumCountPositiveNegative(nums);