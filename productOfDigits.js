/*
* Product of digits
* 1234 = 1*2*3*4 = 24
* 007 = 0 * 0 * 7 = 0
* */
function productOfDigits(n)
{
    if(n%10 === n)
    {
        return n;
    }
    return (n%10) * productOfDigits(parseInt(n/10));
}
console.log(productOfDigits(000000)); //0
console.log(productOfDigits(1234)); //24
console.log(productOfDigits(100)); //0

