// https://en.wikipedia.org/wiki/Binary_search_algorithm

export function binarySearch(arr, value)
{
    let leftValue = 0;
    let rightValue = arr.length - 1;
    let middleValue;
    while (leftValue <= rightValue)
    {
        middleValue = Math.floor((rightValue + leftValue) / 2)
        if (value < arr[middleValue])
        {
            rightValue = middleValue - 1;
        } else if (value > arr[middleValue])
        {
            leftValue = middleValue + 1;
        } else
        {
            return middleValue
        }
    }

    return undefined
}
