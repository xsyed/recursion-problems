/**
 * Q1: Print numbers 1 to n
 * Q2: Print numbers n to 1
 */
function printNumbers1(n)
{
    if(n === 0)
    {
        return;
    }
    printNumbers1(n-1);
    console.log(n);
}
function printNumbers2(n)
{
    if(n === 0)
    {
        return;
    }
    console.log(n);
    return printNumbers2(n-1);
}

printNumbers1(5);
console.log("====  Reverse order ====");
printNumbers2(5);