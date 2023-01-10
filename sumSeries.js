function sumSeries(n)
{
    if(n <= 1)
    {
        return 1;
    }
    return n + sumSeries(n-1);
}

console.log(sumSeries(3)); // 1+2+3 = 6
console.log(sumSeries(5)); // 5+4+3+2+1 = 15