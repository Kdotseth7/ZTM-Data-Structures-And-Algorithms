let obj1 = {
    a: true
};
let obj2 = obj1;
obj1.a = 'Booyaka';
delete obj1;
console.log('1:', obj1);
console.log('2:', obj2);
obj2 = 'hello';
// obj {a: true} will now be garbage collected as obj2 now references to a memory space that stores hello
console.log(obj2);