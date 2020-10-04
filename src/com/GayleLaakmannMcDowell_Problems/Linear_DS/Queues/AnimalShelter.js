const Node = function(animalType) {
    this.animal = animalType;
    this.next = null;
}

const animalShelter = function() {
    this.front = null;
    this.rear = null;
    this.length = 0;
}

animalShelter.prototype.enqueue = function(x) {
    const animalCase = x.toLowerCase()
    if (animalCase === "dog" || animalCase === "cat") {
        const newAnimal = new Node(x);
        if (this.front === null) {
            this.front = newAnimal;
            this.rear = this.front;
        } else {
            this.rear.next = newAnimal;
            this.rear = newAnimal;
        }
        this.length++;
        return this;
    } else
        return false;
}

animalShelter.prototype.dequeueAny = function() {
    if (this.front === this.rear)
        return null;
    else {
        const animalToBeAdopted = this.front;
        this.front = this.front.next;
        this.length--;
        return animalToBeAdopted;
    }
}

animalShelter.prototype.dequeueDog = function() {
    if (this.front === this.rear && this.front.animal.toLowerCase() === "dog")
        return null;
    else {
        let currentAnimal = this.front;
        while (currentAnimal.next.animal.toLowerCase() !== "dog" && currentAnimal.next) {
            currentAnimal = currentAnimal.next;
        }
        if (!currentAnimal)
            return false;
        const prevAnimal = currentAnimal;
        const dog = currentAnimal.next;
        prevAnimal.next = dog.next;
        this.length--;
        return dog;
    }
}

animalShelter.prototype.dequeueCat = function() {
    if (this.front === this.rear && this.front.animal.toLowerCase() === "cat")
        return null;
    else {
        let currentAnimal = this.front;
        while (currentAnimal.next.animal.toLowerCase() !== "cat" && currentAnimal.next) {
            currentAnimal = currentAnimal.next;
        }
        if (!currentAnimal)
            return false;
        const prevAnimal = currentAnimal;
        const cat = currentAnimal.next;
        prevAnimal.next = cat.next;
        this.length--;
        return cat;
    }
}

const obj = new animalShelter();
obj.enqueue("dog");
obj.enqueue("DOG");
obj.enqueue("dog");
obj.enqueue("DOG");
obj.enqueue("CAT");
obj.enqueue("cat");
obj.enqueue("dog");
obj.enqueue("DOG");
console.log(obj.enqueue("DoG"));
console.log(obj.enqueue("cat"));
console.log(obj.enqueue("pig"));
console.log(obj.dequeueAny());
console.log(obj);
console.log(obj.dequeueDog());
console.log(obj);
/*
console.log(obj.dequeueCat());
console.log(obj);
*/
