// https://sortvisualizer.com/selectionsort/
// https://en.wikipedia.org/wiki/Selection_sort

export function selectionSort(arr)
{
    for (let j = 0; j < arr.length; j++)
    {
        let min = arr[j];
        let min_index = j
        for (let i = j + 1; i < arr.length; i++)
        {
            if (arr[i] < min)
            {
                min = arr[i];
                min_index = i
            }
        }
        let tmp = arr[j]
        arr[j] = arr[min_index]
        arr[min_index] = tmp
    }


    return arr;
}
