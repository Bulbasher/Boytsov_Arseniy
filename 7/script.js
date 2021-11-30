/*№7. Добавить функцию из 4 домашки каждоой строке. Чтобы можно было вызвать как 
"Привет".getVowels(). Замыкание можно убрать и оставить просто подсчет гласных*/

String.prototype.SearchForLetters = function() {

    let SumOfLetters = 0;
    let letters_to_find = ["а", "и", "е", "ё", "о", "у", "ы", "э", "ю", "я"];
    for (let i of this.toLowerCase()) {
        if (letters_to_find.includes(i)) {
            console.log(i)
            SumOfLetters++;
        }
    };
    alert(`В строке ' ${this} ' сумма всех гласных =${SumOfLetters} `);
};
"привет, как дела?".SearchForLetters();
"Чисто для количества добавлено".SearchForLetters();
"Чисто для количества".SearchForLetters();