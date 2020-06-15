class HashTable {

    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i=0; i<key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i=0; i<currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        //Loop through all elements
        for (let i=0; i<this.data.length; i++) {
            //check array isn't empty
            if (this.data[i] && this.data[i].length) {
                //in case of collision resolution
                if (this.data[i].length > 1) {
                    for (let j=0; j<this.data[i].length; j++) {
                        keysArray.push(this.data[i][j][0]);
                    }
                } else {
                    //no collision
                    keysArray.push(this.data[i][0][0]);
                }
            }
        }
        return keysArray;
    }

}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 400);
myHashTable.set('oranges', 2);
console.log(myHashTable.set('pineapples', 200));
console.log(myHashTable.get('apples', 200));
console.log(myHashTable.keys());