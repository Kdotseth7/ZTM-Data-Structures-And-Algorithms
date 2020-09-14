const mergeTwoArrays = function(arr1, arr2) {
    let mergedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length || j < arr2.length) {
        if (arr1[i] <= arr2[j] || arr2[j] === undefined) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    return mergedArr;
};

console.log(mergeTwoArrays([1, 2, 4, 7, 8, 9, 10, 11], [1, 3, 4]));