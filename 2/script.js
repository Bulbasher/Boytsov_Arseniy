let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = Number(prompt(`На сколько хотите увеличить массив?`));

let functionArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] += x;
    }
    return (array);
}
alert(`Массив до увеличения=${array}
Массив после увеличения=${functionArray(array)}`);