/* #11 DZ
const formArray = [{ type: text, name: "text" }, { type: password, name: "passwords" }, {}];
const form = document.createElement("form");
Создать функцию, для создания элементов формы, результат функции вставить в форму */

let div = document.createElement("div");
div.className = "container";
document.body.append(div);

let formArray = [
    { type: "text", name: "surname", value: "Boytsov" },
    { type: "text", name: "Name", value: "Arseniy" },
    { type: "text", name: "fathername", value: "Vitalievich" },
    { type: "textarea", name: "about", value: "Will be updated" },
]

function formCreation(formArray) {
    const form = document.createElement("form");
    div.append(form);

    for (let i = 0; i < formArray.length; i++) {
        if (formArray[i].type === "text") {
            let textInput = document.createElement("input");
            textInput.value = formArray[i].value;
            form.append(textInput);
            textInput.className = "form_input";
        }
        if (formArray[i].type === "textarea") {
            let textareaInput = document.createElement("input");
            textareaInput.value = formArray[i].value;

            form.append(textareaInput);
            textareaInput.className = "form_textarea";
        }
    }
};
formCreation(formArray);