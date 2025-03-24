type Result = {
    winnerGroup: string;
    diffBetweenGroup: number;
}

function maximumCountPositiveNegative(nums: number[]): Result  {
    let positiveCount = 0;
    let negativeCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            positiveCount++;
        } else if (nums[i] < 0) {
            negativeCount++;
        }
    }
    console.log("positiveCount: ", positiveCount);
    console.log("negativeCount: ", negativeCount);
    return {
        winnerGroup: positiveCount > negativeCount ? 'positive' : 'negative',
        diffBetweenGroup: Math.abs(positiveCount - negativeCount)
    }
}

const nums = [7, 6, -1000, 1, 0, 7, 0, 6, 0, 7, 4, 6, 5, 0, 1, 6, 8, 0, 7, 1, 4];
const result = maximumCountPositiveNegative(nums);
console.log(result);
