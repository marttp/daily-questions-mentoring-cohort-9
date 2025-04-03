type Result = {
    winnerGroup: string;
    diffBetweenGroup: number;
}

export function absoluteSumDiff(nums: number[]): Result  {
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
    if (positiveSum === negativeSum) {
        return {
            winnerGroup: 'N/A',
            diffBetweenGroup: 0
        }
    }
    return {
        winnerGroup: positiveSum > negativeSum ? 'positive' : 'negative',
        diffBetweenGroup: Math.abs(positiveSum - negativeSum)
    }
}
