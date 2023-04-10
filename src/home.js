let cat_btns = document.querySelectorAll('.btn-cat');
let dateTexts = document.querySelectorAll('.tasks-list .date span');
let checkboxs = document.querySelectorAll('.checkbox');
let delbtn = document.getElementById('del');
let ids=[];
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
        console.log(ids);
    })
}
delbtn.addEventListener('click', () => {
    console.log("hi");
    let s="";
    for (let i = 0; i < ids.length; i++){
        s += ids[i]+" ";
    }
    window.location.href = `/deleteTask/${s}`;
})
