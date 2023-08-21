// https://sortvisualizer.com/insertionsort/
// https://en.wikipedia.org/wiki/Insertion_sort

export function insertionSort(arr)
{
    for (let j = 1; j < arr.length; j++)
    {
        for (let i = j; i > 0; i--)
        {
            if (arr[i] < arr[i - 1])
            {
                let tmp = arr[i]
                arr[i] = arr[i - 1]
                arr[i - 1] = tmp
            } else
            {
                break;
            }
        }
    }

    return arr;
}
