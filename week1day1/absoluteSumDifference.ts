type Result = {
    winnerGroup: string;
    diffBetweenGroup: number;
}

function absoluteSumDiff(nums: number[]): Result  {
    // In case you use JavaScript
    // Check for Falsy -> null, undefined
    if (!nums || nums.length === 0) {
        return {
            winnerGroup: 'N/A',
            diffBetweenGroup: 0
        }
    }
    let positiveSum = 0;
    let negativeSum = 0;
    // Syntax sugar of iterating through array by for-of loop
    // Note: In case you don't interest in index
    for (const n of nums) {
        if (n > 0) {
            positiveSum += n;
        } else if (n < 0) {
            // Convert negative number to positive number
            negativeSum += n * -1;
        }
    }
    console.log("positiveSum: ", positiveSum);
    console.log("negativeSum: ", negativeSum);
    return {
        winnerGroup: positiveSum > negativeSum ? 'positive' : 'negative',
        diffBetweenGroup: Math.abs(positiveSum - negativeSum)
    }
}

const nums = [7, 6, -1000, 1, 0, 7, 0, 6, 0, 7, 4, 6, 5, 0, 1, 6, 8, 0, 7, 1, 4];
const result = absoluteSumDiff(nums);
console.log(result);
