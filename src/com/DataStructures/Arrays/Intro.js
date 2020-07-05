const strings = ['a', 'b', 'c', 'd'];
/*1 variable takes 4 bytes, so 4 variables will take 4X4 = 16 bytes*/
console.log(strings[2]);

//Operations:

//push - add item to end of array
strings.push('e'); //O(1)
strings[strings.length] = 'f';
console.log(strings);

//pop - delete item from end of array
strings.pop(); //O(1)
console.log(strings);

//unshift - add item at starting of array
strings.unshift('x'); //O(n) as we have to loop through each element to change indexes
console.log(strings);

//splice - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
strings.splice(2, 0, 'aliens'); //O(n/2) --> O(n)
console.log(strings);