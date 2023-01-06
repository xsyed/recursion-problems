function fibonacci(x)
{
    if(x === 0 || x === 1)
    {
        return x;
    }
    return fibonacci(x-1) + fibonacci(x-2);
}

console.log(fibonacci(0)); //0
console.log(fibonacci(8)); //21