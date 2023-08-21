// https://leetcode.com/problems/maximum-subarray/

export function maximumSubarray(arr)
{
    let maxSum = -Infinity
    for (let j = 0; j < arr.length; j++)
    {
        let left = 0;
        while (left != j + 1)
        {
            let sum = arr[left];
            for (let i = left + 1; i < j + 1; i++)
            {
                sum += arr[i];
            }
            maxSum = Math.max(sum, maxSum);
            left++;
        }
    }

    return maxSum;
}
