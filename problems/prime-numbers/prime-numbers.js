// https://ru.wikipedia.org/wiki/Решето_Эратосфена

export function primeNumbers(num)
{
    const result = [];
    let arr = Array.from(Array(num), (_, index) => index + 1);
    for (let j = 1; j < arr.length; j++)
    {
        let el = arr[j];
        if (el !== -1)
        {
            result.push(el);
            for (let i = j + el; i < arr.length; i += el)
            {
                arr[i] = -1
            }
        }

    }

    return result;
}
