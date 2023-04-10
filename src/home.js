let cat_btn = document.querySelector('.btn-cat');
if (cat_btn.innerText == 'School' || cat_btn.innerText == 'Office') {
    cat_btn.style.backgroundColor = "red";
}
else if (cat_btn.innerText == 'Social' || cat_btn.innerText == 'Personal') {
    cat_btn.style.backgroundColor = "blue";
}
else if (cat_btn.innerText == 'Home' || cat_btn.innerText == 'Daily') {
    cat_btn.style.backgroundColor = "grey";
}
