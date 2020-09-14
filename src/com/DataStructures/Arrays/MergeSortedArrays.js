const mergeSortedArrays = (array1, array2) => {
    //Input Check
    if (typeof array1 !== 'string' || typeof array2 !== 'string')
        console.log("Invalid Input");

    if (!array1)
        return array2;

    if (!array2)
        return array1;

    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    while (array1Item || array2Item) {
        console.log(array1Item, array2Item);
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
};

const mergedArray = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log("Merged Arrays: " + mergedArray);