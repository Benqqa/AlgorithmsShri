// https://leetcode.com/problems/valid-parentheses/

export function isValid(str)
{
    let stack = [];
    let el;
    let obj = {
        "(": ")",
        "{": "}",
        "[": "]",
    }
    for (let i = 0; i < str.length; i++)
    {
        el = str[i]
        if (el === "(" || el === "{" || el === "[")
        {
            stack.push(el)
        } else if (el === ")" || el === "}" || el === "]")
        {
            if (obj[stack.at(-1)] === el)
            {
                stack.pop();
            } else
            {
                return false
            }
        }
    }

    return stack.length === 0
}
