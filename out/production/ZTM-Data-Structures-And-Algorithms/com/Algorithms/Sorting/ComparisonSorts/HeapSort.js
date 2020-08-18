const mergeSort = array => {
    if(array.length === 1)
        return array;
    let length = array.length;
    let middle = Math.floor(length/2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, length);
    return merge(
        mergeSort(left), mergeSort(right)
    );
};

const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

console.log(mergeSort([5, 1, 33, 22, 66, 22, 9, 1, 2]));