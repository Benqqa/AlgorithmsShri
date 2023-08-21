// https://sortvisualizer.com/bubblesort/
// https://en.wikipedia.org/wiki/Bubble_sort

export function bubbleSort(arr)
{
    for (let j = 0; j < arr.length; j++)
        for (let i = 1; i < arr.length - j; i++)
        {
            if (arr[i - 1] > arr[i])
            {
                let tmp = arr[i - 1]
                arr[i - 1] = arr[i];
                arr[i] = tmp;
            }
        }

    return arr;
}
