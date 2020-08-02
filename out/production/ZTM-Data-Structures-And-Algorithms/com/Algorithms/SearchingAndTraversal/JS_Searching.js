const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

console.log("indexOf: ", beasts.indexOf('Godzilla')); //Uses LinearSearch to find element and returns the index

console.log("findIndex: ", beasts.findIndex(function(item){
    return item === 'Godzilla';
}));

console.log("find: ", beasts.find(function(item){
    return item === 'Godzilla';
}));

console.log("includes: ", beasts.includes('Godzilla'));

