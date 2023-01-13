/*
* Sum of digits
* 1234 = 1+2+3+4 = 10
* 007 = 0 + 0 + 7 = 7
* */
function sumOfNumber(n)
{
    if(n === 0)
    {
        return n;
    }
    return (n%10) + sumOfNumber(parseInt(n/10));
}
console.log(sumOfNumber(000000)); //0
console.log(sumOfNumber(1234)); //10
console.log(sumOfNumber(007)); //7
console.log(sumOfNumber(100)); //1