const element = document.getElementsByTagName("ul");
const ul = element[0];

ul.addEventListener("click", function(event) {
    if (event.target.tagName != "LI") return;
    if (event.target.tagName === "LI") {
        if (event.ctrlKey || event.metaKey) {
            event.target.style.background = "green";
        } else {
            list_to_color_1(event.target);
        }
    }
});

function list_to_color_1(li) {
    let selected = ul.querySelectorAll("li");
    for (let elem of selected) {
        elem.style.background = "none";
    }
    li.style.background = "green";
}


second_list.onclick = function(event) {
    if (event.target.tagName != "LI") return;
    if (event.ctrlKey || event.metaKey) {
        event.target.classList.toggle("second_list");
    } else {
        list_to_color_2(event.target);
    }
};
console.log(second_list);

function list_to_color_2(li) {
    let selected = second_list.querySelectorAll(".second_list");
    for (let elem of selected) {
        elem.classList.remove("second_list");
    }
    li.classList.add("second_list");
}