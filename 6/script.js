let animal1 = {
    name: "dog",
    weight: 22,
    age: 7,
    voise: "gav-gav",
};
let animal2 = {
    name: "chicken",
    weight: 2,
    age: 5,
    voise: "Ko-ko-ko",
};
let animal3 = {
    name: "sheep",
    weight: 100,
    age: 6,
    voise: "beeeee",
};
let animal4 = {
    name: "cat",
    weight: 3.5,
    age: 9,
    voise: "meow-meow",
};
let animal5 = {
    name: "cow",
    weight: 500,
    age: 5,
    voise: "mooooo",
};
let arrayAnimals = [animal1, animal2, animal3, animal4, animal5];

class AllAnimals {
    constructor(_name, _weight, _age, _voise) {
        (this.name = _name), (this.weight = _weight), (this.age = _age), (this.voise = _voise);
    }
    voiseAnimal() {
        console.log(`животное:${this.name} вес:${this.weight} возраст: ${this.age} голос${this.voise}`);
    }
}

function AnimalFabric(arrayAnimals) {
    let newarr = [];
    for (let i = 0; i < arrayAnimals.length; i++) {
        let NewAnimals = new AllAnimals(arrayAnimals[i].name, arrayAnimals[i].weight, arrayAnimals[i].age, arrayAnimals[i].voise);
        newarr.push(NewAnimals);

        NewAnimals.voiseAnimal();
    }
    console.log(newarr);
    return newarr;
}
AnimalFabric(arrayAnimals);