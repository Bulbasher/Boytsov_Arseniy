function SearchForLetters(parameter1) {
    let sum_of_letters = 0;
    return function(parameter2) {
        for (let i of parameter1.toLowerCase()) {
            if (parameter2.includes(i)) {
                sum_of_letters += 1;
                console.log(i);
            }
        }
        return sum_of_letters;
    };
}

function Search2(params) {
    let sum = 0;
    return function() {
        let letters_to_find = ["а", "и", "е", "ё", "о", "у", "ы", "э", "ю", "я"];
        for (let i of params.toLowerCase()) {
            for (let j = 0; j < letters_to_find.length; j++) {
                if (i === letters_to_find[j]) {
                    sum++;
                    console.log(i);
                }
            }
        }
        return sum;
    };
}

function SearchForEachLetter(parameter1) {
    return function(parameter2) {
        let sum_of_letters = 0;
        for (let i of parameter1.toLowerCase()) {
            if (parameter2.includes(i)) {
                sum_of_letters += 1;
                console.log(i);
            }
        }
        return sum_of_letters;
    };
}

function SearchForLettersString(parameter1) {
    let new_string = " ";
    return function(parameter2) {
        for (let i of parameter1.toLowerCase()) {
            if (parameter2.includes(i)) {
                new_string = new_string.concat(i);
                console.log(i);
            }
        }
        return new_string;
    };
}
let string = prompt(`Введите строку для поиска и подсчета гласных букв`);
let letters_to_find = ["а", "и", "е", "ё", "о", "у", "ы", "э", "ю", "я"];

let new_Search = SearchForLetters(string);
let new_Search2 = Search2(string);
let string_Search = SearchForLettersString(string);
let each_letter_count = SearchForEachLetter(string);

alert(`число всех гласных 1 способ:${new_Search(letters_to_find)}
число всех гласных 2 способ:${new_Search2()}
строка только из гласных русского алфавита:${string_Search(letters_to_find)}
число ${letters_to_find[0]}:${each_letter_count(letters_to_find[0])}
число ${letters_to_find[1]}:${each_letter_count(letters_to_find[1])}
число ${letters_to_find[2]}:${each_letter_count(letters_to_find[2])}
число ${letters_to_find[3]}:${each_letter_count(letters_to_find[3])}
число ${letters_to_find[4]}:${each_letter_count(letters_to_find[4])}
число ${letters_to_find[5]}:${each_letter_count(letters_to_find[5])}
число ${letters_to_find[6]}:${each_letter_count(letters_to_find[6])}
число ${letters_to_find[7]}:${each_letter_count(letters_to_find[7])}
число ${letters_to_find[8]}:${each_letter_count(letters_to_find[8])}
число ${letters_to_find[9]}:${each_letter_count(letters_to_find[9])}`);