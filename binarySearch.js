/*
* Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half
* returns index
* */
function binarySearch(arr, searchElement, startIndex, endIndex)
{
    if (startIndex > endIndex)
    {
        return -1;
    }
    let middleIndex = parseInt(startIndex + (endIndex - startIndex)/2);
    if (arr[middleIndex] === searchElement)
    {
        return middleIndex;
    }
    if (searchElement < arr[middleIndex])
    {
        return binarySearch(arr, searchElement, startIndex, middleIndex - 1);
    }
    return binarySearch(arr, searchElement, middleIndex + 1, endIndex);
}
let sortedArray = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearch(sortedArray, 3, 0, sortedArray.length)); //2
console.log(binarySearch(sortedArray, 0, 0, sortedArray.length)); //-1
