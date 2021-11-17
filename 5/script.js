let worker1 = {
    name: "Ivan",
    age: 24,
    salary: 1000,
};
let worker2 = {
    name: "Anton",
    age: 26,
    salary: 1000,
};
let worker3 = {
    name: "Gena",
    age: 27,
    salary: 10500,
};
let worker4 = {
    name: "Andrey",
    age: 25,
    salary: 500,
};
let worker5 = {
    name: "Roman",
    age: 21,
    salary: 100,
};
let worker6 = {
    name: "Roman",
    age: 29,
    salary: 1500,
};
let array = [worker1, worker2, worker3, worker4, worker5, worker6];

function WorkersSumSalary(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].salary;
    }
    console.log(`Сумма зарплат работников-${sum}`);
    alert(`Сумма зарплат работников-${sum}`)
    return sum;
}
WorkersSumSalary(array);