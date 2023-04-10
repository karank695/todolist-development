let cat_btns = document.querySelectorAll('.btn-cat');
let dateTexts = document.querySelectorAll('.tasks-list .date span');
let checkboxs = document.querySelectorAll('.checkbox');
let delbtn = document.getElementById('del');
let textbox = document.querySelector('input[type="text"]');
let descbox = document.querySelector('.desc-box');
let ids = [];
//iterating on different category for setting background color
for (let cat_btn of cat_btns) {
    switch (cat_btn.innerText) {
        case 'School':
            cat_btn.style.backgroundColor = "red";
            break;
        case 'Home':
            cat_btn.style.backgroundColor = "blue";
            break;
        case 'Daily':
            cat_btn.style.backgroundColor = "grey";
            break;
        case 'Social':
            cat_btn.style.backgroundColor = "purple";
            break;
        case 'Personal':
            cat_btn.style.backgroundColor = "black";
            break;
        case 'Office':
            cat_btn.style.backgroundColor = "green";
            break;

    }
}
//iterating on checkbox to delete task which is marked
for (let dateText of dateTexts) {
    if (dateText.innerText == 'Invalid Date') {
        dateText.innerText = 'NO DEADLINE';
        dateText.style.fontSize = 14 + 'px';
    } else {
        let formatDate = dateText.innerText.substring(4, 10) + ',' + dateText.innerText.substring(10, 15);
        dateText.innerText = formatDate;
        dateText.style.fontSize = 14 + 'px';
    }
}
for (let checkbox of checkboxs) {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            ids.push(checkbox.getAttribute('id'));
        } else {
            ids.pop();
        }
    })
}
//add event listener on delete btn for routing 
delbtn.addEventListener('click', () => {
    console.log("hi");
    let s = "";
    for (let i = 0; i < ids.length; i++) {
        s += ids[i] + " ";
    }
    if (ids.length > 0) {
        window.location.href = `/deleteTask/${s}`;
    }

})
textbox.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = "#CDDEF7";
    descbox.style.backgroundColor = "#CDDEF7";
})
textbox.addEventListener('blur', (event) => {
    event.target.style.backgroundColor = "";
    descbox.style.backgroundColor = "";
})