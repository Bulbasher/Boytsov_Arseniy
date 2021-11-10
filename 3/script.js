let sum = 0;
let array = [1, 2, [7, [1, [6, 1, [7, 5, 2, 1]]]]];

let functionArray = (array) => {
    array.forEach(function(value) {
        Array.isArray(value) ? functionArray(value) : (sum += value);
    });

    return sum;
};

alert(`Массив=${array}
сумма массива=${functionArray(array)}`);